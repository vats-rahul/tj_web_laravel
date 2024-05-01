<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Libraries\AjaxLib;

class Ajax extends Controller
{
    public function renderHeaderNavElements(Request $request)
    {
        $page_type = $request->input('page_type');
        $page = $request->input('page');
        $nav_element = $request->input('nav_element');
        $action = $request->input('action');
        $source = $request->input('source', 'web');
        $redirect_url = $request->input('ru', '');
        $response = [];
        $response['element'] = $nav_element;
        $response['action'] = $action;
        $customer_id = Session::get('customer_id');
        $Ajaxlib = new AjaxLib();

        switch ($nav_element) {
            case 'nav_industry':
                $response['content'] = $Ajaxlib->renderNavIndustry($page,$page_type);
                return response()->json($response);
                break;

            case 'nav_department':
                $response['content'] = $Ajaxlib->renderNavDepartment($page,$page_type);
                return response()->json($response);
                break;
            case 'nav_category':
                $response['content'] = $Ajaxlib->renderNavCategory($page,$page_type);
                return response()->json($response);
                break;
            case 'nav_brand':
                $response['content'] = $Ajaxlib->renderNavBrand($page,$page_type);
                return response()->json($response);
                break;
            case 'nav_help':
                $data = array();
                $data['page_type'] = $page_type;
                $data['page'] = $page;
                $data['segment'] = 'dropdown';
                $data['current_url'] = $this->input->get('ref');
                
                $data['bestPriceUrl'] = 'acd?product_id='.DEFAULT_PRODUCT_ID.'&action=ShowPrice&referer='. urlencode($data['current_url']);
                $data['expertUrl'] = 'acd?product_id='.DEFAULT_PRODUCT_ID.'&action=TalkToTechExpert&referer='. urlencode($data['current_url']); 
                

                $response['content'] = $this->load->view('V2/common/ajax_pages/header_nav_help',$data,true);
                return response()->json($response);
                break;
            case 'search_popup':
                $response['content'] = $Ajaxlib->renderSearchPopupContent($source);
                return response()->json($response);
                break;
            case 'login_popup':
                $response['content'] = "";
                if(!$customer_id){
                    $response['content'] = $Ajaxlib->renderLoginPopupContent('web', $redirect_url);
                }
                return response()->json($response);
                break;
            case 'user_acc_nav':
                $response['content'] = "";
                $param = array(
                    'page_type' => $page_type,
                    'page' => $page,
                    'customer_id' => $customer_id,
                    'version' => $version
                );
                $response['content'] = $Ajaxlib->renderHeaderUserNavContents($param);
                
                return response()->json($response);
                break;
            case 'cart_icon_cont':
                $response['content'] = $Ajaxlib->renderHeaderCartQty();
                return response()->json($response);
                break;
            case 'cart-summary-cont':
                $response['content'] = $Ajaxlib->renderHeaderCartContents();
                return response()->json($response);
                break;
            case 'cart_confirmation_popup':
                $response['content'] = $Ajaxlib->renderConfirmationPopup();
                return response()->json($response);
                break;
            case 'compare_popup':
                $response['content'] = "";
                $arrCompares = $this->session->userdata('compareProducts');
                if(count($arrCompares) > 0){
                    $response['content'] = $Ajaxlib->renderComparePopup($arrCompares);
                }
                return response()->json($response);
                break;
            default:
                error_log($nav_element.": header nav element not found");
                break;
        }
    }

    public function renderMobileElements(Request $request){
        $navElement = $request->input('nav_element');
        $action = $request->input('action');
        $source = $request->input('source', 'web');
        $redirectUrl = $request->input('ru', '');
        $pageType = $request->input('page_type', 'Techjockey');
        $page = $request->input('page', 'Techjockey');
        $version = $request->input('version', 'V2');
        $variant = $request->input('variant', '');
        $response = array();
        $response['element'] = $navElement;
        $response['action'] = $action;
        $customer_id = Session::get('customer_id');
        $ajaxLib = new AjaxLib();
        switch ($navElement) {
            case 'nav_menu':
                $data['current_url'] = $request->input('ref');
                $data['page_type'] = $pageType;
                $data['page'] = $page;
                $data['version'] = $version;
                $data['variant'] = $variant;
                $response['content'] = $ajaxLib->renderNavMenu($data);
                return response()->json($response);
                break;
            case 'search_popup':
                $response['content'] = $ajaxLib->renderSearchPopupContent($source);
                return response()->json($response);
                break;

            case 'login_popup':
                $response['content'] = '';
                if (!$customer_id) {
                    $response['content'] = $ajaxLib->renderLoginPopupContent('mobile', $redirectUrl);
                }
                return response()->json($response);
                break;
            case 'cart_icon_cont':
                    $response['content'] = $ajaxLib->renderHeaderCartQty();
                    return response()->json($response);
                    break;
    
            case 'cart-summary-cont':
                    $response['content'] = $ajaxLib->renderHeaderCartContents();
                    return response()->json($response);
                    break;
    
            case 'cart_confirmation_popup':
                    $response['content'] = $ajaxLib->renderConfirmationPopup();
                    return response()->json($response);
                    break;
    
            case 'compare_popup':
                    $response['content'] = '';
                    $arrCompares = Session::get('compareProducts');
                    if (count($arrCompares) > 0) {
                        $response['content'] = $ajaxLib->renderComparePopup($arrCompares);
                    }
                    return response()->json($response);
                    break;
    
            case 'sort_by':
                    $data = [
                        'page_type' => $pageType,
                        'page' => $page,
                        'version' => $version
                    ];
                    $response['content'] = $ajaxLib->renderSortByPopup($data);
                    return response()->json($response);
                    break;    
            default:
                error_log($nav_element.": header nav element not found on mobile");
                break;
        }
    }

    public function userInfo()
    {
        $Ajaxlib = new AjaxLib();
        $response = [];
        $isLoggedIn = !empty(session('customer_id'));
        $response['isLoggedIn'] = $isLoggedIn;
        $response['customer_id'] = $isLoggedIn ? session('customer_id') : GuestUserId();
        $response['customer_name'] = $isLoggedIn ? session('name', 'Guest User') : 'Guest User';
        $response['customer_phone'] = $isLoggedIn ? session('phone', 'N/A') : 'N/A';
        $response['customer_email'] = $isLoggedIn ? session('email', 'N/A') : 'N/A';

        if ($isLoggedIn) {
            $customer = $Ajaxlib->getUserInfo(session('customer_id'));

            if ($customer) {
                $response['customer'] = [
                    'name' => $customer['first_name'] . (!empty($customer['last_name']) ? ' ' . $customer['last_name'] : ''),
                    'email' => $customer['email'],
                    'phone' => $customer['phone'],
                    'dial_code' => $customer['dial_code']
                ];
            }
        }

        return response()->json($response);
    }
}