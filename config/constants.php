<?php

return [
    'CANO_BASE_URL' => 'https://example.com',
    'TOP_TRENDING_CATEGORIES' => [
        "204", "604", "235", "246", "240", "332", "541", "584", "504",
        "87", "649", "90", "515", "475", "994", "233", "509"
    ],
    'DEFAULT_PRODUCT_ID'=>'14481',
    'AWS_PATH' => env('AWS_PATH').'web/',
    'S3_ASSETS' => config('app.aws_path') . 'assets/',
    'ASSETS'=> config('app.base_url').'assets/',
    'DIR_FS_TECHJOCKEY_IMAGES'=>'https://cdn.techjockey.com/web/assets/images/techjockey/',
    'DIR_FS_CATEGORY_ICON'=> 'https://cdn.techjockey.com/web/assets/images/techjockey/' .'category/icon/',
    'DIR_FS_CATEGORY_NOICON'=> 'https://cdn.techjockey.com/web/assets/images/techjockey/' . 'no-category.png',
    'DEFAULT_IMAGE'=> 'https://cdn.techjockey.com/web/assets/V2/img/base64/default_image.jpg',
    'LABEL_COLORS' => [
        "Best Seller" => "green",
        "Editor's Choice" => "blue",
        "Hot Deals" => "red",
        "Top Rated" => "sky-blue",
        "Sponsored" => "yellow",
        "New Addition" => "purple",
        "Trending" => "green"
    ],
    'DIR_FS_PRODUCT_IMAGE'=>'https://cdn.techjockey.com/web/assets/images/techjockey/'.'products/',
    'MEDIA_IMAGE'=>'/assets/images/base64/media_image.png',
    'GENERAL_IMAGE'=> 'https://cdn.techjockey.com/web/assets/images/techjockey/general_image.jpg',
    'CDN_ASSETS' => env('CDN_ASSETS') ? env('AWS_PATH') . 'assets' : env('ASSETS'). 'assets',
    'DIR_FS_BLOG_IMAGE'=>env('AWS_PATH') .'assets/new-assets/blog_images/',
    'DIR_FS_PRODUCT_NOIMAGE'=>'https://cdn.techjockey.com/web/assets/images/techjockey/' .'no-image.png',
    'LABEL_COLORS' => json_encode([
        "Best Seller" => "green",
        "Editor's Choice" => "blue",
        "Hot Deals" => "red",
        "Top Rated" => "sky-blue",
        "Sponsored" => "yellow",
        "New Addition" => "purple",
        "Trending" => "green"
    ]),
    'FOOTER_SOCIAL_IMAGE'=> '/assets/images/base64/footer_social_image.jpg',
    'DIR_FS_BRAND_IMAGE'=>'https://cdn.techjockey.com/web/assets/images/techjockey/brands/'

];
?>