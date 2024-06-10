<?php 

namespace App\Libraries;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class CartLib {
    public $product_id_rules = '\.a-z0-9_-';
    public $product_name_rules = '\w \-\.\:';
    public $product_name_safe = true;
    protected $_cart_contents = [];

    public function __construct($params = [])
    {
        // Are any config settings being passed manually? If so, set them
        $config = is_array($params) ? $params : [];

        // No need to start session manually in Laravel
        
        // Grab the shopping cart array from the session table
        $this->_cart_contents = Session::get('cart_contents');
        if ($this->_cart_contents === null) {
            // No cart exists so we'll set some base values
            $this->_cart_contents = ['cart_total' => 0, 'total_items' => 0];
        }

        Log::info('Cart Class Initialized');
    }

    public function contents($newest_first = false)
    {
        // Get the cart contents from the session
        $cart = collect($this->_cart_contents);

        // Do we want the newest first?
        if ($newest_first) {
            $cart = $cart->reverse();
        }

        // Remove total_items and cart_total from the cart contents
        $cart = $cart->except(['total_items', 'cart_total']);

        return $cart->toArray();
    }
    
    public function totalItems()
    {
        return isset($this->cartContents['total_items']) ? $this->cartContents['total_items'] : 0;
    }

}
