<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5">
    <title>Header</title>
</head>
<body>
    @if(isset($menu) && !empty($menu))
        <header class="main-header">
            <div class="container-website">
                <div class="row">
                <div class="col-md-9">
                        @if(isset($is_variant) && $is_variant == 'enterprise')
                            @include('custom.web.components.common.enterprise_header_nav')
                        @else
                            @include('custom.web.components.common.header_nav')
                        @endif
                    </div>
                    <div class="col-md-3">
                        <div class="search_bar-icon">
                            <ul>
                                <li class="search-icon">
                                    <button id="search-initiator-btn">
                                        <img alt="img" src="{{ asset('assets/images/V4_img/search_icon.svg') }}">
                                    </button>
                                </li>
                                @if(!isset($is_variant) || empty($is_variant) || $is_variant != 'enterprise')
                                    <li class="become-v1">
                                    <a href="{{ env('HTTP_SCHEME') . '://' . env('ESELLER_URL') }}" class="trigger_event"
                                        data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Clicked on Become a Seller"
                                        data-galabel="{{ $page }}" target="_blank">Become a Seller</a>
                                    </li>
                                @endif
                                <li class="dropdown-new">
                                    <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <defs>
                                                <style>
                                                .cls-1 {
                                                    fill: #1a73e8;
                                                }

                                                .cls-2 {
                                                    fill: #e7f1fd;
                                                }
                                                </style>
                                            </defs>
                                            <g id="user_profile" transform="translate(-71.491 -14)">
                                                <circle id="Ellipse_6" data-name="Ellipse 6" class="cls-1" cx="14" cy="14"
                                                    r="14" transform="translate(73.491 15.952)" />
                                                <path id="Path_16286" data-name="Path 16286" class="cls-2"
                                                    d="M100,14a16,16,0,1,0,16,16A16.014,16.014,0,0,0,100,14Zm0,7.162a5.019,5.019,0,1,1-5.019,5.019A5.032,5.032,0,0,1,100,21.162ZM91.242,37.7V36.96a3.874,3.874,0,0,1,3.874-3.874h9.768a3.874,3.874,0,0,1,3.874,3.874V37.7a13.069,13.069,0,0,1-17.515,0Z"
                                                    transform="translate(-12.509)" />
                                            </g>
                                        </svg>
                                    </p>
                                    <ul id="user_acc_nav">
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="demo-hd1"></div>
    @endif
</body>
</html>