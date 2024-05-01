<?php 

namespace App\Libraries;
use App\Models\AjaxModel;

class Ajaxlib{
	
	
    public function renderNavIndustry($page=null,$page_type=null){
		$ajaxmodel= new AjaxModel();
		$data['industries'] = $ajaxmodel->getIndustries();
		$data['page'] = $page;
		$data['page_type'] = $page_type;
		$content = view('custom.web.components.common.ajaxpages.header_nav_industry', $data)->render();
		return $content;
	}
    public function renderNavDepartment($page=null,$page_type=null){
		$ajaxmodel= new AjaxModel();
		$data['departments'] = $this->CI->ajax_model->get_departments();
		$data['page'] = $page;
		$data['page_type'] = $page_type;
		$content = $this->CI->load->view('common/ajax_pages/web/header_nav_department',$data,true);
		return $content;
	}
    public function renderNavCategory($page=null,$page_type=null){
		$ajaxmodel= new AjaxModel();
		$data['categories'] = $ajaxmodel->getCategories(11);
		$data['page'] = $page;
		$data['page_type'] = $page_type;
		$content = view('custom.web.components.common.ajaxpages.header_nav_category', $data)->render();
		return $content;
	}
    public function renderNavBrand($page=null,$page_type=null){
		$ajaxmodel= new AjaxModel();
		$data['brands'] = $ajaxmodel->getBrands();
		$data['page'] = $page;
		$data['page_type'] = $page_type;
		$content = view('custom.web.components.common.ajaxpages.header_nav_brand',$data)->render();
		return $content;
	}
    public function renderSearchPopupContent($source = 'web'){
		$content = $this->CI->load->view('common/ajax_pages/'. $source .'/search_popup',NULL,true);
		return $content;
	}
    public function renderLoginPopupContent($source = 'web', $redirect_url = '/'){
		if($source == 'mobile'){
			$content = $this->CI->load->view('V2/common/ajax_pages/login/mobile/login_popup',['redirect_url' => $redirect_url],true);
		} else {
			$content = $this->CI->load->view('V2/common/ajax_pages/login/login_popup',['redirect_url' => $redirect_url],true);
		}
		return $content;
	}
    public function renderHeaderUserNavContents($params){
		$content = $this->CI->load->view($params['version'] . '/common/ajax_pages/web/header_user_nav_dropdown',$params,true);
		return $content;
	}
    public function renderHeaderCartQty(){
		$total_qty = 0;
		$content = "";
        foreach ($this->CI->cart->contents() as $rowid => $items) {
            if (!empty($items['variables'])) {
                foreach ($items['variables'] as $qt) {
                    if (strtolower($qt['name']) == 'quantity' || strtolower($qt['name']) == 'users' || strtolower($qt['name']) == 'storage') {
                        $total_qty = $total_qty + $qt['value'];
                        break;
                    } else {
                        $total_qty = 1;
                        break;
                    }
                }
            }
        }
        if($total_qty > 0){
	        $content = "<span id='number_badge' class='number_badge trigger_cs_popup'>". $total_qty ."</span>";
	    }

        return $content;
	}
    public function renderHeaderCartContents($source = 'web'){
		$data = array();
		$data['arrWishlistIds'] = array();
		$data['cart_total_items'] = $this->CI->cart->total_items();
		if ($data['cart_total_items'] > 0) {
		    $data['customer_id'] = $this->CI->session->userdata('customer_id');
		    if ($data['customer_id']){
		        $arrWishlistIds = $this->CI->common->get_selected_columns('tbl_product_wishlist', array('product_id'), array('customer_id' => $data['customer_id']), $records = "multiple", $flag = false);
		        $data['arrWishlistIds'] = array_column($arrWishlistIds, 'product_id');
		    }
	    }
	    if($source == 'mobile') {
	    	$content = $this->CI->load->view('V2/common/ajax_pages/mobile/cart_popup_summary',$data,true);
	    } else {
	    	$content = $this->CI->load->view('V2/common/ajax_pages/cart_popup_summary',$data,true);
	    }

	    return $content;
	}
    public function renderConfirmationPopup($source = 'web'){
		if($source == 'mobile'){
			$content = $this->CI->load->view('V2/common/ajax_pages/mobile/cart_confirmation_popup',NULL,true);
		} else {
			$content = $this->CI->load->view('V2/common/ajax_pages/cart_confirmation_popup',NULL,true);	
		}
		
		return $content;
	}
    public function renderComparePopup($compare_products, $source = 'web'){
		if($source == 'mobile'){
			$content = $this->CI->load->view('V2/common/ajax_pages/mobile/compare_popup',['compare_products' => $compare_products],true);
		} else {
			$content = $this->CI->load->view('V2/common/ajax_pages/compare_popup',['compare_products' => $compare_products],true);
		}
		return $content;
	}
	public function getUserInfo($customerId)
    {
        $customer = DB::table('tbl_customer')
            ->select('customer_id', 'first_name', 'last_name', 'email', 'phone', 'dial_code')
            ->where('customer_id', $customerId)
            ->first();

        return $customer ? (array) $customer : null;
    }
	public function renderNavMenu($params)
	{
		$customer_id = session()->get('customer_id');
		$name = session()->get('name');
		$email = session()->get('email');
		$currentUrl = $params['current_url'];
		$pageType = $params['page_type'];
		$page = $params['page'];
		
		if ($params['variant'] === 'enterprise') {
			$content = view('.common.ajax_pages.mobile.enterprise_nav_menu', compact('customer_id', 'name', 'email', 'currentUrl', 'pageType', 'page'))->render();
		} else {
			$content = view('.custom.mobile.components.home.nav_menu', compact('customer_id', 'name', 'email', 'currentUrl', 'pageType', 'page'))->render();
		}
		
		return $content;
	}
}