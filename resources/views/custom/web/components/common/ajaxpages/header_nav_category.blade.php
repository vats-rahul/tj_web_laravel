@php $j = 1; @endphp
@foreach ($categories as $key => $header_menu)
    <li>
        <p>{{ rtrim($header_menu->category_name) }} Categories
            <img class="drop-down-img" src="{{ config('constants.S3_ASSETS') }}images/V4_img/icon_dropdown_arrow_blue.svg" alt="{{ rtrim($header_menu->category_name) }}">
            <span class="sub-text">{{ strtolower(rtrim($header_menu->category_name)) == 'software' ? '500+ Listed' : '30+ Listed' }}</span>
        </p>
        <ul class="sub-menu-l2" id="cat_top_navigation">
            @foreach ($header_menu->sub_categories as $key => $parents)
                @php $is_subcat = (count($parents->sub_categories) > 0) ? true : false; @endphp
                <li>
                    <a href="{{ url('category/' . $parents->slug) }}" class="parent-cat trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with Top Section" data-galabel="{{ $parents->category_name }} | {{ $page }}">
                        {{ $parents->category_name }} 
                        @if ($is_subcat)
                            <img src="{{ config('constants.S3_ASSETS') }}images/V4_img/icon_dropdown_arrow_blue.svg" class="drop-down-img" alt="{{ $parents->category_name }}">
                        @endif
                    </a>
                    @php $li_counter = 0; @endphp
                    @if ($is_subcat)
                        <ul class="sub-menu-l3">
                            @foreach ($parents->sub_categories as $key => $child)
                                <li>
                                    <a href="{{ url('category/' . $child->slug) }}" class="child-cat trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with Top Section" data-galabel="{{ $child->category_name }} | {{ $page }}">
                                        {{ $child->category_name }}
                                    </a>
                                </li>
                                @php $li_counter++; @endphp
                            @endforeach
                        </ul>
                    @endif
                </li>
            @endforeach
            <li>
                <a href="{{ url('categories') }}" class="parent-cat trigger_event" data-gacat="{{ ucfirst($page_type) }} Page" data-gaaction="Interacted with Top Section" data-galabel="See all | {{ $page }}" style="text-decoration: underline;">  See All </a>
            </li>
        </ul>
    </li>
    @php $j++; @endphp
@endforeach
