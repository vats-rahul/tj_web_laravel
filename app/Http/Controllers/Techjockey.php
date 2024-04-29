<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Libraries\HomeLib;
// use App\Libraries\Redislib;

class Techjockey extends Controller
{
   public function index()
    {
        $homelib = new HomeLib();
        $data = $homelib->homeData();
        // var_dump(dd($data));
        // return view('/V2/home/web/homepage', $data);
        return view('custom/web/layout/home',$data);
    }

    public function mob_index(){
        $homelib = new HomeLib();
        $data = $homelib->homeData('mobile');

        $data['prod_label_color'] = json_decode(config('constants.LABEL_COLORS'));
        // $data['login_slug'] = $this->session->flashdata('login_slug');
        // $data['recently_viewed_products'] = getRecentlyViewedProducts();
        // echo "<pre>";
        // print_r($data);
        // die;
        return view('custom/mobile/layout/home',$data);

    }
}
