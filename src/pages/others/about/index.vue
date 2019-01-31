<template>
  <div class="about">
    <common-search :border="true"></common-search>
    <scroll-view
      class="wrap company_dis"
      scroll-y>
      <img mode="widthFix" class="about" src="https://static.casacdn.com/static/images/host/about.png"/>
      <h1 class="pro_title">公司简介</h1>
      <wxParse :content="intro.about_company" />
      <dl class="fw_line">
        <dt class="fw_line-title">服务流程</dt>
        <dl style="overflow:hidden;">
          <dt class="fen_class">
              <span
                class="order_class"
                :class="{class_change: !tabindex}"
                @click="class_tab(0)">定制类</span>
            <span
              class="pro_class"
              :class="{class_change: tabindex}"
              @click="class_tab(1)">现货类</span>
          </dt>
          <dd class="order_info pro_class_list" v-if="tabindex">
            <ul>
              <li class="info_list">
                <h1 class="info_title">线上选购/意大利代购:</h1>
                <p class="xinxi">进入我们的“现货平台”选购您所需要的产品，并联系在线专员获得精准产品信息及报价；如有代购需求，亦可与在线专员联系，沟通需要购买的商品，包括商品品牌、图片、规格等内容以获取准确代购价格。</p>
              </li>
              <li class="info_list">
                <h1 class="info_title">自有物流:</h1>
                <p class="xinxi">您将能在我们的客户全程追踪系统中，监测到从海外发货到国内物流的全过程。</p>
              </li>
              <li class="info_list">
                <h1 class="info_title">免费安装:</h1>
                <p class="xinxi">我们将提供全国范围内的免费配送及上门安装服务，并承诺一年质保。</p>
              </li>
              <li class="info_list">
                <h1 class="info_title">无忧售后:</h1>
                <p class="xinxi">配套的售后及其他全面服务 。完善的售后服务体系可以全盘解决用户的一切后顾之忧。有荣-意大利之家拥有全面的售后配套服务，悉数解决用户家居过程中出现的各种问题，真正的做到专注细节，品质保障。</p>
              </li>
            </ul>
          </dd>
          <dd class="order_info order_class_list" v-else>
            <ul>
              <li class="info_list">
                <h1 class="info_title">线上查询:</h1>
                <wxParse :content="no1.about_company" />
              </li>
              <li class="info_list">
                <h1 class="info_title">专业设计:</h1>
                <p class="xinxi">意大利及国内知名品牌设计师团队。总部位于意大利米兰的我们，已在意大利签约合作超过50位的设计专家。无论是产品或者空间设计，您都将能通过我们，享受到国际一线大牌设计师的贴身服务。</p>
              </li>
              <li class="info_list">
                <h1 class="info_title">意大利定制:</h1>
                <p class="xinxi">我们承诺您所下单的所有产品均按您的定制需求，由您指定的意大利品牌所属工厂精心打造。在整个生产过程中，您将能通过我们的客户全程追踪系统，同步监测到您心爱的物品生产进展情况。</p>
              </li>
              <li class="info_list">
                <h1 class="info_title">国际自有仓储:</h1>
                <p class="xinxi">有荣-意大利之家目前在拉文纳、坎图、佛罗伦萨、维罗纳等四城市都拥有自己的仓储集散网点，可以更迅速地实现与厂家沟通、订单交流、验货、发货等内容，确保尽快将定制家具以最快速度送达中国。</p>
              </li>
              <li class="info_list">
                <h1 class="info_title">免费安装:</h1>
                <p class="xinxi">有荣-意大利之家承诺在全国范围内提供免费的配送及上门安装服务。我们的海内外配送员均接受过意大利多家家具建材的专业培训，将能为客户提供海运装箱、国内配送、配件安装全流程的安全与专业保障。</p>
              </li>
              <li class="info_list">
                <h1 class="info_title">无忧售后:</h1>
                <p class="xinxi">跨境采购的担忧莫过于售后服务。作为意大利建材家居品牌的中国市场综合解决方案提供商，有荣-意大利之家对所出售的产品均承诺一年质保，其中部分产品还有长达七年的免费质保。</p>
              </li>
            </ul>
          </dd>
        </dl>
      </dl>
      <dl class="fw_line">
        <dt class="fw_line-title">我们的团队</dt>
        <dd style="overflow:hidden;">
          <img mode="widthFix" class="wu" src="https://static.casacdn.com/static/images/host/wu.jpg"/>

          <h1 class="info_title">武瑞军\t\t\t\t\t\t恒邦信大/有荣-意大利之家董事长</h1>\n
          <p class="xinxi">
            北京恒邦信大国际贸易有限公司，简称“恒邦信大”，是由旅意华侨武瑞军先生投资成立的意大利奢侈家具贸易公司。“恒邦信大”董事长武瑞军凭借32年的贸易经验和17年家居贸易经验，组建强大的管理团队，聚集了大量优质资源，经过7年的努力和探索，将意大利家居资源以O2O的模式呈现给国人。
          </p>
          <h1 class="info_title">中意设计精英团队/集聚国内外人才</h1>\n
          <p class="xinxi">
            人才是“恒邦信大”大财富，一批高素质人才队伍是平台迅速发展的保证。公司拥有中意设计师团队，以自身优势了解意大利设计领域的潮流走向，融合中国的东方审美及家居需求，为中国市场提供较新的概念设计、产品设计、装饰设计、家居生活设计等服务。
          </p>
          <div class="cordpart">
            <div class="item" style="width:13%;background:#212224;">博士\t\t1%</div>
            <div class="item" style="width:17%;background:#535353;">硕士\t\t17%</div>
            <div class="item" style="width:41%;background:#9a9a9a;">本科\t\t47%</div>
            <div class="item" style="width:29%;background:#d2d2d2;color:#535353;">专科\t\t35%</div>
          </div>
          <ul class="order_info order_class_list">
            <li class="info_list">
              <h1 class="info_title">中国•北京</h1>
              <p class="xinxi">2010年成立”恒邦信大”，搭建意大利家居综合O2O平台</p>
              <img mode="widthFix" src="https://static.casacdn.com/static/images/host/about/team-beijing.jpg" />
            </li>
            <li class="info_list">
              <h1 class="info_title">中国•上海</h1>
              <p class="xinxi">2013年成立上海公司，2015年将中国运营总部迁至上海</p>
              <img mode="widthFix" src="https://static.casacdn.com/static/images/host/about/team-shanghai.jpg" />
            </li>
            <li class="info_list">
              <h1 class="info_title">意大利•米兰</h1>
              <p class="xinxi">2014年将意大利总部搬迁至米兰，聚集了一批一流的国际化人才</p>
              <img mode="widthFix" src="https://static.casacdn.com/static/images/host/about/team-italy.jpg" />
            </li>
            <li class="info_list">
              <h1 class="info_title">中国•深圳</h1>
              <p class="xinxi">2015年7月在深圳设立分公司，为周边地区开拓意大利进口家居市场提供支持</p>
              <img mode="widthFix" src="https://static.casacdn.com/static/images/host/about/team-shenzhen.jpg" />
            </li>
            <li class="info_list">
              <h1 class="info_title">中国•杭州</h1>
              <p class="xinxi">2015年成立杭州分公司</p>
              <img mode="widthFix" src="https://static.casacdn.com/static/images/host/about/team-hangzhou.jpg" />
            </li>
            <li class="info_list">
              <h1 class="info_title">中国•成都</h1>
              <p class="xinxi">2017年成立成都分公司</p>
              <img mode="widthFix" src="https://static.casacdn.com/static/images/host/about/team-chengdu.jpg" />
            </li>
            <li class="info_list">
              <h1 class="info_title">我们•在壮大</h1>
              <p class="xinxi">2016年至2018年，团队网点布局将覆盖南京、厦门、大连……等13个一线城市，并且逐步走向国际化，启动全球发展战略</p>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="fw_line">
        <dt class="fw_line-title">九大核心优势</dt>
        <dl style="overflow:hidden;">
          <dt class="fen_class">
              <span class="nine_list_class"
                    :class="{nine_class_change:nine_tabindex === 0}"
                    @click="nine_class_tab(0)">完善的电商平台</span>
            <span class="nine_list_class"
                  :class="{nine_class_change:nine_tabindex === 1}"
                  @click="nine_class_tab(1)">销售信息化团队</span>
            <span class="nine_list_class"
                  :class="{nine_class_change:nine_tabindex === 2}"
                  @click="nine_class_tab(2)">意大利正品保证</span>
            <span class="nine_list_class"
                  :class="{nine_class_change:nine_tabindex === 3}"
                  @click="nine_class_tab(3)">极具优势的价格</span>
            <span class="nine_list_class"
                  :class="{nine_class_change:nine_tabindex === 4}"
                  @click="nine_class_tab(4)">丰富的品牌资源</span>
            <span class="nine_list_class"
                  :class="{nine_class_change:nine_tabindex === 5}"
                  @click="nine_class_tab(5)">强大供应链系统</span>
            <span class="nine_list_class"
                  :class="{nine_class_change:nine_tabindex === 6}"
                  @click="nine_class_tab(6)">定制设计支持</span>
            <span class="nine_list_class"
                  :class="{nine_class_change:nine_tabindex === 7}"
                  @click="nine_class_tab(7)">自主仓储海外直发</span>
            <span class="nine_list_class"
                  :class="{nine_class_change:nine_tabindex === 8}"
                  @click="nine_class_tab(8)">免费配送及维修</span>
          </dt>

          <dd class="order_info order_class_list nine_orderlist" v-if="nine_tabindex === 0">
            <h1 class="info_title">1.自建完善的电商平台</h1>
            <p class="xinxi">有荣-意大利之家自建完善的电商平台和成熟庞大的直销型电商团队，24小时为您提供：\n</p>
            <p class="xinxi">意大利家具建材品牌采购的咨询及相关服务\n</p>
            <p class="xinxi">在线直销意大利家具建材品牌厂商提供的原厂现货\n</p>
            <p class="xinxi">替您寻找您所青睐的意大利境内家具建材产品，并给予配套服务\n</p>
            <p class="xinxi">根据您的实际情况，展开包含工程项目大宗采购、建材原料及配件供应、代理销售等在内的多样化商务合作\n</p>
            <img mode="widthFix" src="https://static.casacdn.com/static/images/host/platform1.jpg" />
          </dd>
          <dd class="order_info order_class_list nine_orderlist" v-else-if="nine_tabindex === 1">
            <h1 class="info_title">2.销售信息化团队</h1>
            <div class="team_list">
              <div class="left">
                <img mode="widthFix" src="https://static.casacdn.com/static/images/host/team1.jpg" />
                <h1>在线营销团队</h1>
                <p class="xinxi">线上营销团队不单为客户提供相关产品的资讯和在线咨询服务。并可协助客户寻找一切想找的意大利品牌及商品，根据需要预约相关品牌设计师和匹配室内设计人员等一整个流程的服务。</p>
              </div>
              <div class="right">
                <img mode="widthFix" src="https://static.casacdn.com/static/images/host/team2.jpg" />
                <h1>在线营销团队</h1>
                <p class="xinxi">线上营销团队不单为客户提供相关产品的资讯和在线咨询服务。并可协助客户寻找一切想找的意大利品牌及商品，根据需要预约相关品牌设计师和匹配室内设计人员等一整个流程的服务。</p>
              </div>
            </div>
          </dd>
          <dd class="order_info order_class_list nine_orderlist" v-else-if="nine_tabindex === 2">
            <h1 class="info_title">3.意大利正品保证</h1>
            <img src="https://static.casacdn.com/static/images/host/certificate3.jpg" />
            <wxParse :content="no2.about_company" />
          </dd>
          <dd class="order_info order_class_list nine_orderlist" v-else-if="nine_tabindex === 3">
            <h1 class="info_title">4.极具优势的价格</h1>
            <img mode="widthFix" src="https://static.casacdn.com/static/images/host/price.jpg?v=201811091653" />
          </dd>
          <dd class="order_info order_class_list nine_orderlist" v-else-if="nine_tabindex === 4">
            <h1 class="info_title">5.丰富的品牌资源</h1>
            <img mode="widthFix" src="https://static.casacdn.com/static/images/host/brand.jpg" />
          </dd>
          <dd class="order_info order_class_list nine_orderlist" v-else-if="nine_tabindex === 5">
            <h1 class="info_title">6.强大的品牌整合能力</h1>
            <ul>
              <li class="brand_all">
                <h1 class="info_title">总部位于米兰</h1>
                <p class="xinxi">总部设在米兰，迄今已有17年的历史，拥有经验丰富的营销和资源整合团队，多渠道人脉累积和资源采购优势。\n</p>
                <p class="xinxi">创始人、董事长武瑞军侨居意大利多年，其总部团队对意大利知名家居品牌的一系列产品和生产流程均进行过实地考察，系统掌握意大利制造的特点及过程。\n</p>
              </li>
              <li class="brand_all">
                <h1 class="info_title">无可比拟的自有仓储</h1>
                <p class="xinxi">目前在拉文纳、坎图、佛罗伦萨、维罗纳等四城市都拥有自己的仓储集散网点。所拥有强大的囤货能力，可以更迅速地实现与厂家沟通、订单交流、验货、发货等，确保商品以较快速度送达中国。\n</p>
              </li>
              <li class="brand_all">
                <h1 class="info_title">强大的品牌整合能力</h1>
                <p class="xinxi">有荣-意大利之家拥有绝大部分意大利奢侈品牌的代理权，如中国用户熟知的Zanaboni（扎纳博尼）、Andre Fanfani（范珐尼）等誉满欧洲、蜚声国际的大腕儿。\n</p>
                <p class="xinxi">17年的意大利供应商资源的累积与合作形成坚固的供应链系统。\n</p>
              </li>
            </ul>
          </dd>
          <dd class="order_info order_class_list nine_orderlist" v-else-if="nine_tabindex === 6">
            <h1 class="info_title">7.定制设计支持</h1>
            <img mode="widthFix" src="https://static.casacdn.com/static/images/host/dz.jpg" />
          </dd>
          <dd class="order_info order_class_list nine_orderlist" v-else-if="nine_tabindex === 7">
            <h1 class="info_title">8.自主仓储、海外直发</h1>
            <p class="xinxi">
              有荣-意大利之家物流管理自有标准严格的操作体系和过程把控。一切运输途中的运费和相关费用由有荣-意大利之家独力承担。大限度保障用户权益，一切因意外造成的产品损坏，丢失，财物损失亦由有荣-意大利之家承担！因交通或其它不可控因素造成的产品延误并影响到用户使用和生活的，有荣-意大利之家亦承担全部的责任。不让用户担心，操心，费心，是我们工作的基本底线。
            </p>
            <img mode="widthFix" src="https://static.casacdn.com/static/images/host/logistics.jpg" />
          </dd>
          <dd class="order_info order_class_list nine_orderlist" v-else-if="nine_tabindex === 8">
            <h1 class="info_title">9.免费配送及维修</h1>
            <img mode="widthFix" src="https://static.casacdn.com/static/images/host/maintenance.jpg" />
          </dd>
        </dl>
      </dl>
      <dl class="fw_line">
        <dt class="fw_line-title">常见问题</dt>
        <dd class="normal_pro">
          <h1 class="info_title">订货周期大概多久？</h1>
          <p class="xinxi">国外高档家具品牌通常情况下是按照订单生产，以保证产品品质。从订单生效到您收到货物大约16-24周的时间；
            通常情况下，各个品牌的生产周期大约为8-16周，海运和海关业务时间就长达8周。如果您订单中的产品在专卖店正好有现货，则这个时间可以缩短4-8周，也就是12-16周的时间。如果您急着需要使用，可考虑空运的方式，这可以节省4周以上时间</p>
        </dd>
        <dd class="normal_pro">
          <h1 class="info_title">网站上没有列出的品牌和产品可以代购么？</h1>
          <p class="xinxi">
            当然可以！您在中国市场上看到的任何意大利进口家居品牌产品，您只需抄录它们的品牌信息，有荣-意大利之家将替您直接在厂家取回零售价格并报价给您；如果您觉得价格合适，那么双方签订购买合同，有任何产品或者品牌需求都可咨询市场部人员。有荣-意大利之家网站中无法将所有产品列出，但您可以通过这些产品对比中国市场零售价格。有荣-意大利之家正在努力将更多品牌和产品在网站中列出，便于您选择。</p>
        </dd>
        <dd class="normal_pro">
          <h1 class="info_title">谁负责售后安装？维修保养怎么处理？</h1>
          <p class="xinxi">
            有荣-意大利之家拥有专业的物流以及安装人员给你提供这项服务，不额外收取成本费用。如果您购买的是软体家具（沙发，床垫，扶手椅…）则无需安装服务，我们将无偿为您提供送货上门服务。需要组装的家具，例如板式家具、厅柜等有荣-意大利之家会有专业的安装人员上门服务；如果您的产品在使用中发生破损，需要维修，有荣-意大利之家提供一年的保修服务。</p>
        </dd>
      </dl>
    </scroll-view>
  </div>
</template>

<script>
  import store from '@/status/store'
  import wxParse from 'mpvue-wxparse'
  import CommonSearch from '@/components/common-search'
  export default {
    data () {
      return {
        tabindex: 0,
        nine_tabindex: 0
      }
    },
    components: {
      wxParse,
      CommonSearch
    },
    computed: {
      serverSide () {
        return store.state.serverSide
      }
    },
    onLoad () {
      const {serverSide} = this
      wx.request({
        url: `${serverSide}/wxapi/about/aboutUs`,
        success: ({data: {data}}) => {
          Object.assign(this, data)
        }
      })
    },
    methods: {
      class_tab (index) {
        this.tabindex = index
      },
      nine_class_tab (index) {
        this.nine_tabindex = index
      }
    }
  }
</script>

<style scoped>
  @import url("~mpvue-wxparse/src/wxParse.css");
  .wxParse .p{
    text-align: justify!important;
  }
  ._img {
    width: 100%;
  }
  .xinxi{
    width:100%;
    font-family:Helvetica, sans-serif;
    font-size:12px;
    color:#666;
    line-height:1.8;
  }
  .company_dis {
    padding: 0 15px;
    height:calc(100vh - 100px);
    box-sizing: border-box;
  }

  .company_dis .about {
    width: 50%;
    vertical-align: middle;
    margin: 30px 25%;
  }

  .company_dis span {
    font-size: 12px;
  }

  .pro_title {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }

  .order_class, .pro_class {
    display: inline-block;
    width: 100px;
    height: 30px;
    margin-right: 15px;
    border: 1px solid #e8e8e2;
    color: #211;
    line-height: 30px;
    background: #fff;
    text-align: center;
  }

  .class_change {
    background: #e8e8e2;
    border: none;
  }

  .fw_line {
    border: 1px solid #d2d2d2;
    margin: 15px 0;
    position: relative;
    padding-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    margin-bottom: 50px;
  }

  .fw_line .fw_line-title {
    position: absolute;
    width: 30%;
    height: 25px;
    text-align: center;
    line-height: 25px;
    top: -12px;
    left: 35%;
    background: #fff;
  }

  .fen_class {
    padding: 25px 10px 0 15px;
  }

  .fw_line .order_info {
    overflow: hidden;
  }

  .info_title {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 26px;
    font-weight: 700;
  }

  .info_list {
    border-left: 1px solid #a0a0a0;
    width: 75%;
    float: right;
    padding: 7.5px;
    box-sizing: border-box;
    margin-top: 25px;
  }

  .fw_line .wu {
    width: 90%;
    vertical-align: middle;
    margin-left: 5%;
    margin-top: 25px;
  }

  .team_list_title {
    color: #535353;
    font-size: 15px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
    display: block;
    margin-top: 5px;
  }

  .cordpart {
    width: 100%;
    height: 41px;
    overflow: hidden;
    margin-top: 25px;
    margin-bottom: 10px;
    display: flex;
  }

  .cordpart .item {
    height: 41px;
    float: left;
    line-height: 41px;
    text-align: center;
    color: #fff;
    font-size: 10px;
  }

  .info_list image {
    width: 100%;
    margin-left: 0;
    margin-top: 5px;
  }

  .nine_list_class {
    display: inline-block;
    width: 31%;
    margin-left: 1%;
    height: 30px;
    border: 1px solid #e8e8e2;
    color: #211;
    line-height: 30px;
    background: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  .nine_class_change {
    background: #e8e8e2;
  }

  .nine_orderlist {
    padding: 15px;
  }

  .nine_orderlist image {
    width: 100%;
    margin-left: 0;
  }

  .team_list {
    overflow: hidden;
  }

  .team_list .left {
    float: left;
    width: 49%;
  }

  .team_list .right {
    float: right;
    width: 49%;
  }

  .team_list .left image, .team_list .right image {
    width: 100%;
  }

  .brand_all {
    background: #808080;
    padding: 30px 80px;
    margin-top: 30px;
    /* color:#fff; */
  }

  .brand_all view {
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
  }

  .brand_all text {
    color: #fff;
  }

  .normal_pro {
    margin-top: 30px;
  }

  .normal_pro .problem {
    font-weight: bold;
    margin-bottom: 15px;
  }

  /* 导航 */

  .menuBox {
    position: fixed;
    z-index: 100000000;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: -100vw;
    transition: left 0.5s;
  }

  .menuBox.show {
    left: 0;
  }

  .menuBox .box {
    height: 100vh;
    width: 70vw;
    background: #212224;
    padding: 15pt;
    box-sizing: border-box;
  }

  .menuBox .box .inputWrap {
    display: block;
    flex: 1;
  }

  .menuBox .box .inputWrap .input {
    height: 30px;
    line-height: 30px;
    background: #fff;
    border-radius: 15px;
    color: #666;
  }

  .menuBox .box .inputWrap .input .icon-sousuo {
    color: #666;
    display: inline-block;
    margin-left: 7px;
    font-size: 15px;
  }

  .menuBox .box .menu-list {
    margin-top: 10vh;
    padding-left: 10px;
  }

  .menuBox .box .menu-list .menu-item {
    display: flex;
    align-items: center;
  }

  .menuBox .box .menu-list .menu-item .iconfont {
    font-size: 18px;
    color: #fff;
  }

  .menuBox .box .menu-list .menu-item .title {
    font-size: 12px;
    display: inline-block;
    padding-left: 20px;
    color: #fff;
  }

  .menuBox .box .menu-list .menu-item + .menu-item {
    margin-top: 40px;
  }

  .wxParse-p .wxParse-inline {
    font-size: 12px;
  }

  .info_list .wxParse-inline {
    font-size: 12px;
  }
</style>
