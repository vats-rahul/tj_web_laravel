<ul class="sub-menu-l2">
    @php $i = 1; @endphp
    @foreach ($industries as $industry)
        <li class="">
            <a href="{{ $industry->url }}" class="trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
                data-gaaction="Interacted with Top Section" data-galabel="{{ $industry->name }} | {{ $page }}">
                {{ $industry->name }}
            </a>
        </li>
        @php $i++; @endphp
    @endforeach
    <li>
        <a href="{{ url('industries') }}" class="parent-cat trigger_event" data-gacat="{{ ucfirst($page_type) }} Page"
            data-gaaction="Interacted with Top Section" data-galabel="See all | {{ $page }}" style="text-decoration: underline;">  
            Browse All Industries
        </a>
    </li>
</ul>
