<ul class="sub-menu-l2">
    @php $i = 1; @endphp
    @foreach ($brands as $brand)
        <li>
            <a href="{{ $brand->url }}" class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
                data-gaaction="Interacted with Top Section" data-galabel="{{ $brand->name }} | {{ $page }}">
                {{ $brand->name }}
            </a>
        </li>
        @php $i++; @endphp
    @endforeach
    <li>
        <a href="{{ url('brands') }}" class="parent-cat trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
            data-gaaction="Interacted with Top Section" data-galabel="See all | {{ $page }}" style="text-decoration: underline;">
            Browse All Brands
        </a>
    </li>
</ul>
