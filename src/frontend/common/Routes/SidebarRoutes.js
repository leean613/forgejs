import ReportDispatcher from "../../../views/MyCarte/movingFile/ReportDispatcher";
import MyCarteDashboardNEW from "../../../views/MyCarte/DashboardNew";
import MyCarteMotionMenu from "../../../views/MyCarte/Motion.js";
import MyCarteMotionId from "../../../views/MyCarte/MotionId.js";
import MyCarteNotices from "../../../views/MyCarte/Notices.js";
import MyCarteSettings from "../../../views/MyCarte/Settings.js";
import MyCarteHelps from "../../../views/MyCarte/Helps.js";
import MyCarteFAQs from "../../../views/MyCarte/FAQs.js";
import MyCarteChoices from "../../../views/MyCarte/Choices.js";
import MyCarteInquirys from "../../../views/MyCarte/Inquirys.js";
import MyCarteAccountTop from "../../../views/MyCarte/AccountTop.js";
import MyCarteAccountSub from "../../../views/MyCarte/AccountSub.js";

import { Dashboard as ManagementDashboard } from "../../../views/Management/Dashboard.js";
import DataList from "../../../views/Management/DataList.js";
import ManagementNotices from "../../../views/Management/Notices.js";
import { Settings as ManagementSettings } from "../../../views/Management/Settings.js";
import { Helps as ManagementHelps } from "../../../views/Management/Helps.js";
import { FAQs as ManagementFAQs } from "../../../views/Management/FAQs.js";
import { ManagementInquirys } from "../../../views/Management/Inquirys.js";
import { Input } from "../../../views/Management/Input.js";
import AccountSub from "../../../views/Management/AccountSub.js";
import AccountTop from "../../../views/Management/AccountTop.js";

//master sidebar root
import AlcMaintenanceAccountManagement from "../../../views/AlcMaintenace/AccountManagement.js";
import AlcMaintenanceRegister from "../../../views/AlcMaintenace/Register.js";
import AlcMaintenanceMessage from "../../../views/AlcMaintenace/Message.js";
import AlcMaintenanceContractPlanManagement from "../../../views/AlcMaintenace/ContractPlanManagement.js";
import AlcMaintenanceHelp from "../../../views/AlcMaintenace/Help.js";
import AlcMaintenanceFAQ from "../../../views/AlcMaintenace/Faq.js";
import WorkoutDispatcher from "../../../views/MyCarte/movingFile/WorkoutDispatcher";

var myCarteRoutes = [
  {
    rootPath: "",
    path: "/dashboard",
    name: "運動器健診結果",
    // component: MyCarteDashboardNEW,
    component: ReportDispatcher,
    layout: "/user",
    container: "mycarte_top",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/motion-menu",
    name: "運動メニュー",
    component: WorkoutDispatcher,
    layout: "/user",
    container: "motion",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/motion-id",
    name: "運動器ID",
    component: MyCarteMotionId,
    layout: "/user",
    container: "motionid",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/notice",
    name: "お知らせ",
    component: MyCarteNotices,
    layout: "/user",
    container: "notice",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/setting",
    name: "設定",
    component: MyCarteSettings,
    layout: "/user",
    container: "setting",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/help",
    name: "ヘルプ",
    component: MyCarteHelps,
    layout: "/user",
    container: "help",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/faq",
    name: "FAQ",
    component: MyCarteFAQs,
    layout: "/user",
    container: "faq",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/inquiry",
    name: "問い合わせ",
    component: MyCarteInquirys,
    layout: "/user",
    container: "inquiry",
    hasChildren: false,
  },

  // {
  //   rootPath: "",
  //   path: "/choice",
  //   name: "検査項目別",
  //   component: MyCarteChoices,
  //   layout: "/user",
  //   container: "choice",
  //   hasChildren: false,
  // },
];

var managementRoutes = [
  {
    rootPath: "",
    path: "/dashboard",
    name: "ダッシュボード",
    component: ManagementDashboard,
    layout: "/admin",
    container: "management_top",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/data-list",
    name: "データ一覧",
    component: DataList,
    layout: "/admin",
    container: "data_list",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/input",
    name: "新規登録",
    component: Input,
    layout: "/admin",
    container: "input",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/notice",
    name: "お知らせ",
    component: ManagementNotices,
    layout: "/admin",
    container: "notice",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/setting",
    name: "設定",
    component: ManagementSettings,
    layout: "/admin",
    container: "setting",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/help",
    name: "ヘルプ",
    component: ManagementHelps,
    layout: "/admin",
    container: "help",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/faq",
    name: "FAQ",
    component: ManagementFAQs,
    layout: "/admin",
    container: "faq",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/inquiry",
    name: "問い合わせ",
    component: ManagementInquirys,
    layout: "/admin",
    container: "inquiry",
    hasChildren: false,
  },
];

var managementAccountServiceRoutes = [
  {
    rootPath: "",
    path: "/account-top",
    name: "アカウント情報編集",
    component: AccountTop,
    layout: "/admin",
    container: "account_top",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/account-sub",
    name: "サブアカウント情報編集",
    component: AccountSub,
    layout: "/admin",
    container: "account_sub",
    hasChildren: false,
  },

  {
    rootPath: "",
    path: "/faq",
    name: "FAQ",
    component: ManagementFAQs,
    layout: "/admin",
    container: "faq",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/inquiry",
    name: "問い合わせ",
    component: ManagementInquirys,
    layout: "/admin",
    container: "inquiry",
    hasChildren: false,
  },
];
var myCarteAccountServiceRoutes = [
  {
    rootPath: "",
    path: "/account-top",
    name: "アカウント情報編集",
    component: MyCarteAccountTop,
    layout: "/user",
    container: "account_top",
    hasChildren: false,
  },

  {
    rootPath: "",
    path: "/account-sub",
    name: "連携アカウント情報編集",
    component: MyCarteAccountSub,
    layout: "/user",
    container: "account_sub",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/faq",
    name: "FAQ",
    component: MyCarteFAQs,
    layout: "/user",
    container: "faq",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/inquiry",
    name: "問い合わせ",
    component: MyCarteInquirys,
    layout: "/user",
    container: "inquiry",
    hasChildren: false,
  },
];
var alcMaintenanceRoutes = [
  {
    rootPath: "",
    path: "/account-management",
    name: "アカウント管理",
    component: AlcMaintenanceAccountManagement,
    layout: "/master",
    container: "account-management",
    hasChildren: false,
  },

  {
    rootPath: "",
    path: "/account-new",
    name: "新規アカウント発行",
    component: AlcMaintenanceRegister,
    layout: "/master",
    container: "account-new",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/message",
    name: "メッセージ",
    component: AlcMaintenanceMessage,
    layout: "/master",
    container: "message",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/help",
    name: "ヘルプ",
    component: AlcMaintenanceHelp,
    layout: "/master",
    container: "help",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/faq",
    name: "FAQ",
    component: AlcMaintenanceFAQ,
    layout: "/master",
    container: "faq",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/contract-plan-management",
    name: "契約プラン管理",
    component: AlcMaintenanceContractPlanManagement,
    layout: "/master",
    container: "contract-plan-management",
    hasChildren: false,
  },
];
var inspectionAccountServiceRoutes = [
  {
    rootPath: "",
    path: "/account-top",
    name: "アカウント情報編集",
    component: AccountTop,
    layout: "/admin",
    container: "account_top",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/account-sub",
    name: "サブアカウント情報編集",
    component: AccountSub,
    layout: "/admin",
    container: "account_sub",
    hasChildren: false,
  },

  {
    rootPath: "",
    path: "/faq",
    name: "FAQ",
    component: ManagementFAQs,
    layout: "/admin",
    container: "faq",
    hasChildren: false,
  },
  {
    rootPath: "",
    path: "/inquiry",
    name: "問い合わせ",
    component: ManagementInquirys,
    layout: "/admin",
    container: "inquiry",
    hasChildren: false,
  },
];
var accountServicePageNameList = [
  "account-top",
  "account-sub",
  "change-password",
  "account-edit",
  "staff",
  "account-sub-edit",
  "faq",
  "inquiry",
  "inquiry-form",
  "faq-sample",
  "inquiry-form-confirm",
  "inquiry-form-finish",
  "account-sub-edit",
  "account-sub-add",
  "faq-by-group"
];
var generalPageMainAppAndServiceList = [
  "inquiry",
  "inquiry-form",
  "inquiry-form-confirm",
  "inquiry-form-finish",
  "faq",
  "faq-sample",
  "faq-by-group"
];
export const AuthorizationRoutes = {
  myCarteRoutes,
  managementRoutes,
  managementAccountServiceRoutes,
  myCarteAccountServiceRoutes,
  alcMaintenanceRoutes,
  inspectionAccountServiceRoutes,
  accountServicePageNameList,
  generalPageMainAppAndServiceList
};
