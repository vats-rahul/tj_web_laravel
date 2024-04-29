<style>
    .logo {
        position: relative;
        z-index: 9999;
        padding: 6px 0px;
        float: left;
        width: 20%;
        margin-right: 12px;
    }
    .sub-menu-l2 p{
        font-size:13px !important;
    }
    .free-demo-btn p img{
        margin-right:5px;
    }
    .sub-menu-l2,
    .sub-menu-l3 {
        min-height: 200px;
    }
</style>
<nav id="cssmenu">
    <div class="logo">
        <a href="{{ url("<?= base_url('/enterprise'); ?>") }}" title="the best software for your business">
            <img alt="Techjockey | Buy Software in India" src="{{ asset("/<?= S3_ASSETS . 'V4/img/tj_ent_logo.png'; ?>") }}" title="Techjockey">
        </a>
    </div>
    <div id="head-mobile"></div>
    <div class="button"></div>
    <ul>
        <li class="active">
            <span class="nav_head_element" data-id="nav_cyber_security" data-action="html"> Cyber security </span>
            <ul class="sub-menu-l2" id="nav_cyber_security">
                <li>
                    <p>Application Security Software <img class="drop-down-img" src="{{ asset("/<?= ASSETS . 'V4/img/icon_dropdown_arrow_blue.svg'; ?>") }}" alt="Software"></p>
                    <ul class="sub-menu-l3" id="cat_top_navigation">
                        <li>
                            <a href="{{ url("<?= base_url('category/web-application-firewall/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Web Application Firewall</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/static-application-security-testing-sast/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Static Application Security Testing (SAST) Software</a>
                        </li>
                    </ul>
                </li>
                <li>
                   <p>Data Security Software <img class="drop-down-img" src="{{ asset("/<?= ASSETS . 'V4/img/icon_dropdown_arrow_blue.svg'; ?>") }}" alt="Software"></p>
                    <ul class="sub-menu-l3" id="cat_top_navigation">
                        <li>
                            <a href="{{ url("<?= base_url('category/encryption-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Encryption Software</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Network Security Software <img class="drop-down-img" src="{{ asset("/<?= ASSETS . 'V4/img/icon_dropdown_arrow_blue.svg'; ?>") }}" alt="Software"></p>
                    <ul class="sub-menu-l3" id="cat_top_navigation">
                        <li>
                            <a href="{{ url("<?= base_url('category/email-security-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Email Security Software</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/network-monitoring-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Network Monitoring Tools</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/vpn-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            VPN Software</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/firewall-security-management-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Firewall Security Management Software</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Endpoint Security Software <img class="drop-down-img" src="{{ asset("/<?= ASSETS . 'V4/img/icon_dropdown_arrow_blue.svg'; ?>") }}" alt="Software"></p>
                    <ul class="sub-menu-l3" id="cat_top_navigation">
                        <li>
                            <a href="{{ url("<?= base_url('category/mobile-device-management/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Mobile Device Management (MDM) Software</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/endpoint-security-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Endpoint Detection and Response (EDR) Software</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/extended-detection-and-response-xdr-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Extended Detection and Response (XDR) Software</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Identity Access Management Software <img class="drop-down-img" src="{{ asset("/<?= ASSETS . 'V4/img/icon_dropdown_arrow_blue.svg'; ?>") }}" alt="Software"></p>
                    <ul class="sub-menu-l3" id="cat_top_navigation">
                        <li>
                            <a href="{{ url("<?= base_url('category/password-management-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Password Management Software</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/web-access-management-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Web Access Management Software</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/single-sign-on/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                            Single Sign-On (SSO) Software</a>
                        </li>
                    </ul>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/mobile-security-app/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Moolya (Bugasura) | Accounting Software" data-faitracker-click-bind="true">
                    Mobile Security Software</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/website-security-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Vyapar | Accounting Software" data-faitracker-click-bind="true">
                    Website Security Software</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/vulnerability-assessment-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Adobe | Accounting Software" data-faitracker-click-bind="true">
                    Vulnerability Assessment Tools</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/antivirus-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Tally Solutions | Accounting Software" data-faitracker-click-bind="true">
                    Antivirus Software</a>
                </li>
            </ul>
        </li>
        <li class="active nav_head_element" data-id="nav_cloud_services" data-action="html">
            <span id="nav_cloud_services">Cloud Service</span>
            <ul class="sub-menu-l2" id="nav_category">
                <li>
                    <p>Cloud Computing Platform <img class="drop-down-img" src="{{ asset("/<?= ASSETS . 'V4/img/icon_dropdown_arrow_blue.svg'; ?>") }}" alt="Software"></p>
                    <ul class="sub-menu-l3" id="cat_top_navigation">
                        <li>
                            <a href="{{ url("<?= base_url('category/infrastructure-as-a-service/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                                Infrastructure as a Service (Iaas)</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/serverless-computing/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                                Serverless Computing Services</a>
                        </li>
                    </ul>
                </li>
                <li>
                   <p>Database Management Software <img class="drop-down-img" src="{{ asset("/<?= ASSETS . 'V4/img/icon_dropdown_arrow_blue.svg'; ?>") }}" alt="Software"></p>
                    <ul class="sub-menu-l3" id="cat_top_navigation">
                        <li>
                            <a href="{{ url("<?= base_url('category/nosql-database-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                                NoSql Database Software</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/relational-database-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                                Relational Databse Software</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/graph-databases/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                                Graph Databse Software</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Cloud Networking Services <img class="drop-down-img" src="{{ asset("/<?= ASSETS . 'V4/img/icon_dropdown_arrow_blue.svg'; ?>") }}" alt="Software"></p>
                    <ul class="sub-menu-l3" id="cat_top_navigation">
                        <li>
                            <a href="{{ url("<?= base_url('category/load-balancer/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                                Load Balancing Software</a>
                        </li>
                        <li>
                            <a href="{{ url("<?= base_url('category/virtual-private-cloud/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                                Virtual Private Cloud(VPC)</a>
                        </li>
                    </ul>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/cloud-storage/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Moolya (Bugasura) | Accounting Software" data-faitracker-click-bind="true">
                    Cloud Storage</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/cloud-analytics/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Vyapar | Accounting Software" data-faitracker-click-bind="true">
                    Cloud Analytics Solution</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/cloud-monitoring-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Adobe | Accounting Software" data-faitracker-click-bind="true">
                    Cloud Monitoring Tools</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/cloud-security-services/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Tally Solutions | Accounting Software" data-faitracker-click-bind="true">
                    Cloud Security Services</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/cloud-cost-management-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Tally Solutions | Accounting Software" data-faitracker-click-bind="true">
                    Cloud Clost Management Tools</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/cloud-migration-tools/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Tally Solutions | Accounting Software" data-faitracker-click-bind="true">
                    Cloud Migration Tools</a>
                </li>
            </ul>
        </li>
        <li class="active nav_head_element" data-id="nav_Infrastructure" data-action="after">
            <span id="nav_Infrastructure">Infrastructure</span>
            <ul class="sub-menu-l2">
                <li>
                <a href="{{ url("<?= base_url('category/server-solution/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Salesforce | Accounting Software" data-faitracker-click-bind="true">
                    Server Solution</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/wan-optimizer/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                    Wan Optimizer</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/load-testing-tools/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Leadsquared  | Accounting Software" data-faitracker-click-bind="true">
                    Load Testing Software</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/master-data-management-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Moolya (Bugasura) | Accounting Software" data-faitracker-click-bind="true">
                    Master Data Management</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/virtual-server-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Vyapar | Accounting Software" data-faitracker-click-bind="true">
                    Virtual Server</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/nas-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Adobe | Accounting Software" data-faitracker-click-bind="true">
                    NAS Software</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/virtualization-management-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Tally Solutions | Accounting Software" data-faitracker-click-bind="true">
                    Virtualization Management Software</a>
                </li>
                <li>
                <a href="{{ url("<?= base_url('category/application-virtualization/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Keka  | Accounting Software" data-faitracker-click-bind="true">
                    Application Virtualization</a>
                </li>
            </ul>
        </li>
        <li class="active nav_head_element" data-id="nav_network" data-action="after">
            <span id="nav_network">Network</span>
                <ul class="sub-menu-l2">
                    <li>
                    <a href="{{ url("<?= base_url('category/wireless-access-point/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Salesforce | Accounting Software" data-faitracker-click-bind="true">
                        Wireless</a>
                    </li>
                    <li>
                    <a href="{{ url("<?= base_url('category/lan-switching-tool/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Microsoft | Accounting Software" data-faitracker-click-bind="true">
                        Switches</a>
                    </li>
                    <li>
                    <a href="{{ url("<?= base_url('category/network-devices/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Leadsquared  | Accounting Software" data-faitracker-click-bind="true">
                        Router</a>
                    </li>
                    <li>
                    <a href="{{ url("<?= base_url('category/messaging-collaboration-software/enterprise'); ?>") }}" class="trigger_event" data-gacat="Category Page" data-gaaction="Interacted with Top Section" data-galabel="Moolya (Bugasura) | Accounting Software" data-faitracker-click-bind="true">
                        Collaboration</a>
                    </li>
                </ul>   
        </li>
        <li><a href="https://www.techjockey.com/enterprise-blog/" class="trigger_event"
                data-gacat="<?= isset($page_type) ? ucfirst($page_type) : ''; ?> Page"
                data-gaaction="Interacted with Top Section"
                data-galabel="Clicked on Enterprise Resources | <?= isset($page) ? $page : ''; ?>"
                rel="noreferrer noopener">Resources</a>
        </li>
        <li class="free-demo-btn">
            <p contenteditable="false" data-userintent="Call" data-gacat="<?= ucfirst($page_type); ?> Page"
                data-gaaction="Clicked on Enterprise Contact Us" data-galabel="Top Header | <?= $page; ?>"
                data-action="GetFreeCall" data-proname="Techjockey ACD" data-proid="<?= DEFAULT_PRODUCT_ID ?>"
                data-ispdp="<?= $product_id ?? 0 ?>" data-categoryname="<?= $category_name ?? ""; ?>"
                data-categoryid="<?= $category_id ?? ""; ?>" class="tj-acd-form trigger_event"><img alt="Contact Us" src="{{ asset("/<?= ASSETS . 'V4/img/icon_cta_call.webp'; ?>") }}"> Contact Us</p>
        </li>
    </ul>
</nav>