<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=5">
<meta name="theme-color" content="#402fa1">
<link rel="manifest" href="{{ asset('new-assets/js/manifest.json') }}">

@if (request()->segment(1) == 'Product' && (request()->segment(2) == 'index' || request()->segment(2) == 'product_detail_mobile'))
    <link rel="alternate" type="application/rss+xml" href="{{ url('/detail/rsslatest.xml') }}">
@endif

<title>{{ isset($page_title) && $page_title != '' ? $page_title : 'Techjockey' }}</title>
<meta name="keywords" content="{{ isset($page_keywords) && $page_keywords != '' ? $page_keywords : (isset($default_keywords) ? $default_keywords : 'Techjockey') }}">
<meta name="description" content="{{ isset($page_description) && $page_description != '' ? $page_description : 'Techjockey' }}">
<meta name="google-site-verification" content="9LeAk66wKYcVAMBcXARf4T4f6yWiCuYQqoGiC2y2Rvk">

@if ($_SERVER['HTTP_HOST'] !== 'www.techjockey.com' || (isset($indexing) && !$indexing))
    <meta name="robots" content="index,follow">
@endif

@if (isset($robots_tag) && !empty($robots_tag) && (request()->segment(2) == 'acd_call' || request()->segment(2) == 'review' || ((request()->segment(2) == 'brand' || request()->segment(2) == 'mob_brand') && request()->segment(1) == 'brand') || ((request()->segment(2) == 'index' || request()->segment(2) == 'product_detail_mobile') && request()->segment(1) == 'Product') || ((request()->segment(2) == 'category' || request()->segment(2) == 'mob_category') && request()->segment(1) == 'category')))
    <meta name="robots" content="{{ $robots_tag }}">
@endif

<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta property="og:site_name" content="Techjockey">
<meta property="og:site" content="www.techjockey.com">
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@Techjockey">
<meta property="og:title" content="{{ isset($page_title) && !empty($page_title) ? $page_title : 'Best Online Business Software Solution Store in India-Techjockey' }}">
<meta name="twitter:title" content="{{ isset($page_title) && !empty($page_title) ? $page_title : 'Best Online Business Software Solution Store in India-Techjockey' }}">
<meta property="og:type" content="website">

@php
    $canonical_url = isset($canonical_url) && $canonical_url != '' ? $canonical_url : url()->current();
    $canonical_url = rtrim($canonical_url, '/');
@endphp
<meta property="og:url" content="{{ $canonical_url }}">
<meta property="og:image" content="https://www.techjockey.com/assets/images/techjockey-image.png">
<meta name="twitter:image" content="https://www.techjockey.com/techjockey-image.png">
<meta property="og:image:url" content="https://www.techjockey.com/assets/images/techjockey-image.png">
<meta property="og:image:secure_url" content="https://www.techjockey.com/assets/images/techjockey-image.png">
<meta property="og:image:type" content="image/png">
<meta property="fb:app_id" content="1779377402295970">
<meta property="og:description" content="{{ isset($page_description) && !empty($page_description) ? $page_description : 'Techjockey is the only ecommerce store that helps you choose best business software & IT support in India. Talk to us at our Toll Free no. +91-9205781956' }}">
<meta name="twitter:description" content="{{ isset($page_description) && !empty($page_description) ? $page_description : 'Techjockey is the only ecommerce store that helps you choose best business software & IT support in India. Talk to us at our Toll Free no. +91-9205781956' }}">
<meta name="ahrefs-site-verification" content="af8c747d1795e16f990a1405a165a4bb2d1a380fdd6e7004f80040e78d4c97d3">
<meta name="facebook-domain-verification" content="ig81ervuf71d1nx3302p0hxlx1o3cw">
<meta name='dmca-site-verification' content='YzRtcFMycUpJZFBmL0EvNk4rRGhRN2FSc082cjJWb1Nuak14Q21BbVNnRT01'>

<link rel="canonical" href="{{ strtolower($canonical_url) }}">

<link rel="preconnect" href="https://fonts.googleapis.com" as="googlefontapi">
<link rel="preconnect" href="https://fonts.gstatic.com" as="googlefont" crossorigin>
<link rel="preconnect" href="{{ config('constants.AWS_PATH') }}" as="aws" crossorigin>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Techjockey",
        "legalName": "TECHJOCKEY INFOTECH PRIVATE LIMITED",
        "alternateName": "TJ",
        "description": "Techjockey Helps Million of Businesses to Buy the Best Software Online in India. 20000+ Software, 5500+ Vendors, 500+ Categories, 1+ Lakh Verified Reviews.",
        "knowsAbout": "Software, SaaS, PaaS, IaaS, Hardware, Cloud Solutions and Tools",
        "url": "https://www.techjockey.com",
        "logo": "https://www.techjockey.com/assets/new-assets/images/logo.png",
        "foundingDate":"2016",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Habitat India, C-3, Block C, Qutab Institutional Area",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110016",
            "addressCountry": "India"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+91-114-221-3003",
                "email": "support@techjockey.com"
            }
        ],
        "sameAs": [
            "https://www.linkedin.com/company/techjockey",
            "https://www.facebook.com/Techjockey/",
            "https://twitter.com/TechJockeys",
            "https://www.youtube.com/@techjockeydotcom"
        ]
    }
</script>
<script type="text/javascript">
    var tj = tj || {};
    document.addEventListener("DOMContentLoaded", function(event) {
        if (tj.hasOwnProperty('loadCss')) {
            tj.loadCss('tj-font-css', 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap');
        }
    });
</script>

<script type="text/javascript">
    window.dataLayer = window.dataLayer || [];
    function ga(){}
    function gtag(){dataLayer.push(arguments);}
    function tjgtag(){window.dataLayer.push(arguments);}
    window.onload = (event) => {
        tj.loadScript('tj-moengage-loader', '<?= config('app.CDN_ASSETS') ?>/assets/js/moengage-events.js?v=1.1', false, {}, true)
        .then(() => {
            var google_login_success = "{{ session()->get('google_login_success') }}";
            if (google_login_success != "") {
                tj.events.clevertap.oneTapLoginEvent();
                $.growl.notice({
                    message: google_login_success
                });
            }
        })
        .catch(() => {});
        setTimeout(function() {
            tj.loadThirdParty();
        }, 5000);
    }
</script>

<!-- Webpush Notification code added on 11 June by DV -->
<link rel="manifest" href="/manifest.json">
<!-- Webpush Notification code ends here -->
<meta name="p:domain_verify" content="add1d14133189a3fc631e532910249f0">
<noscript>
    <img alt="linkedin" height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=588443&conversionId=6460897&fmt=gif">
</noscript>
