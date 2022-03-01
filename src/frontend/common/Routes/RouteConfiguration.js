import React from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute.js";
import AccountEdit from "../../../views/Management/AccountEdit.js";
import ManagementInquiryForm from "../../../views/Management/InquiryForm.js";
import DataListHuman from "../../../views/Management/DataListHuman.js";
import InquiryForm from "../../../views/MyCarte/InquiryForm.js";
import MyCarteAccountEdit from "../../../views/MyCarte/AccountEdit.js";
import MyCarteMotionidEdit from "../../../views/MyCarte/MotionIdEdit.js";

//Management import
import ManagementFaqSample from "../../../views/Management/ManagementFaqSample.js";
import ManagementInquiryFormFinish from "../../../views/Management/InquiryFormFinish.js";
import ManagementInquiryFormConfirm from "../../../views/Management/InquiryFormConfirm";
import ManagementStaff from "../../../views/Management/Staff";
import ManagementAccountSubEdit from "../../../views/Management/AccountSubEdit.js";
import ManagementAccountSubAdd from "../../../views/Management/AccountSubAdd.js";
import ManagementHelpcontent from "../../../views/Management/HelpContent.js";
import ManagementNoticeDetail from "../../../views/Management/NoticeDetail";
import ManagementFaqDetail from "../../../views/Management/FaqDetail";
import ManagementFaqByGroup from "../../../views/Management/FAQsViewByGroup";
import ManagementChangePassword from "../../../views/Management/ChangePassword.js"

//MyCarte import
import MyCarteFaqSample from "../../../views/MyCarte/FaqSample.js";
import MyCarteInquiryFormConfirm from "../../../views/MyCarte/InquiryFormConfirm.js";
import MyCarteInquiryFormFinish from "../../../views/MyCarte/InquiryFormFinish.js";
import MyCarteMotionEdit2 from "../../../views/MyCarte/MotionIdEdit2.js";

import MyCarteHelpcontent from "../../../views/MyCarte/HelpContent.js";
import MyCarteRadarChart from "../../../views/MyCarte/RadarChart";
import MyCarteNoticeDetail from "../../../views/MyCarte/NoticeDetail";
import MyCarteFaqDetail from "../../../views/MyCarte/FaqDetail";
import MyCarteFaqByGroup from "../../../views/MyCarte/FAQsViewByGroup";
import HelpUpdate from "../../../views/AlcMaintenace/UpdateHelp";
import MessageUpdate from "../../../views/AlcMaintenace/UpdateMessage.js";
import MyCarteChangePassword from "../../../views/MyCarte/ChangePassword.js"
//AlcMaintenace import
import NewFacilityRegistration from "../../../views/AlcMaintenace/NewFacilityRegistration.js";
import AlcMaintenaceUpdateFaq from "../../../views/AlcMaintenace/UpdateFaq.js";
import HelpManagement from "../../../views/AlcMaintenace/HelpManagement.js";
import FaqManagement from "../../../views/AlcMaintenace/FaqFiller";
import MessageManagement from "../../../views/AlcMaintenace/MessageManagement.js";
import RegisterConfirmation from "../../../views/AlcMaintenace/RegisterConfirmation.js";
import AccountManagement from "../../../views/AlcMaintenace/AccountManagement.js";
import ContractPlanManagement from "../../../views/AlcMaintenace/ContractPlanManagement.js";
import Register from "../../../views/AlcMaintenace/Register.js";
import ManagementAccountManagement from "../../../views/AlcMaintenace/ManagementAccountManagement.js";
import ReportDispatcher from "../../../views/MyCarte/movingFile/ReportDispatcher.js";
import Calendar from "../CalendarJapan/CalendarJapan.js"

function RouteConfiguration(props) {
  var inspectionRoutes = [
    {
      path: "/admin/account-edit",
      component: AccountEdit,
    },
    {
      path: "/admin/inquiry-form",
      component: ManagementInquiryForm,
    },
    {
      path: "/admin/faq-sample",
      component: ManagementFaqSample,
    },
    {
      path: "/admin/inquiry-form-confirm",
      component: ManagementInquiryFormConfirm,
    },
    {
      path: "/admin/inquiry-form-finish",
      component: ManagementInquiryFormFinish,
    },
    {
      path: "/admin/staff",
      component: ManagementStaff,
    },
    {
      path: "/admin/account-sub-edit",
      component: ManagementAccountSubEdit,
    },
    {
      path: "/admin/account-sub-add",
      component: ManagementAccountSubAdd,
    },
    {
      path: "/admin/faq-detail/:id",
      component: ManagementFaqDetail,
    },
    {
      path: "/admin/faq-by-group",
      component: ManagementFaqByGroup,
    },
    {
      path: "/admin/change-password",
      component: ManagementChangePassword,
    },
  ];

  var managementRoutes = [
    {
      path: "/admin/calendar",
      component: Calendar,
    },
    {
      path: "/admin/account-edit",
      component: AccountEdit,
    },
    {
      path: "/admin/inquiry-form",
      component: ManagementInquiryForm,
    },
    {
      path: "/admin/data-list-human",
      component: DataListHuman,
    },
    {
      path: "/admin/faq-sample",
      component: ManagementFaqSample,
    },
    {
      path: "/admin/inquiry-form-confirm",
      component: ManagementInquiryFormConfirm,
    },
    {
      path: "/admin/inquiry-form-finish",
      component: ManagementInquiryFormFinish,
    },
    {
      path: "/admin/staff",
      component: ManagementStaff,
    },
    {
      path: "/admin/account-sub-edit",
      component: ManagementAccountSubEdit,
    },
    {
      path: "/admin/account-sub-add",
      component: ManagementAccountSubAdd,
    },
    {
      path: "/admin/help-content/:id",
      component: ManagementHelpcontent,
    },
    {
      path: "/admin/notice-detail/:id",
      component: ManagementNoticeDetail,
    },
    {
      path: "/admin/faq-detail/:id",
      component: ManagementFaqDetail,
    },
    {
      path: "/admin/faq-by-group",
      component: ManagementFaqByGroup,
    },
    {
      path: "/admin/change-password",
      component: ManagementChangePassword,
    },
  ];

  var mycarteRoutes = [
    {
      path: "/user/inquiry-form",
      component: InquiryForm,
    },
    {
      path: "/user/inquiry-form-confirm",
      component: MyCarteInquiryFormConfirm,
    },
    {
      path: "/user/inquiry-form-finish",
      component: MyCarteInquiryFormFinish,
    },
    {
      path: "/user/account-edit",
      component: MyCarteAccountEdit,
    },
    {
      path: "/user/motionid-height-update",
      component: MyCarteMotionidEdit,
    },
    {
      path: "/user/faq-sample",
      component: MyCarteFaqSample,
    },
    {
      path: "/user/motionid-weight-update",
      component: MyCarteMotionEdit2,
    },
    {
      path: "/user/help-content/:id",
      component: MyCarteHelpcontent,
    },
    {
      path: "/user/radar-chart",
      component: MyCarteRadarChart,
    },
    {
      path: "/user/notice-detail/:id",
      component: MyCarteNoticeDetail,
    },
    {
      path: "/user/faq-detail/:id",
      component: MyCarteFaqDetail,
    },
    {
      path: "/user/faq-by-group",
      component: MyCarteFaqByGroup,
    },
    {
      path: "/user/change-password",
      component: MyCarteChangePassword,
    },
    {
      path: "/user/test/dispatcher/:subjectId",
      component: ReportDispatcher,
    },
  ];

  var alcRoutes = [
    {
      path: "/master/faq-detail/:id",
      component: AlcMaintenaceUpdateFaq,
    },
    {
      path: "/master/new-facility-registration",
      component: NewFacilityRegistration,
    },
    {
      path: "/master/help-detail/:id",
      component: HelpUpdate,
    },
    {
      path: "/master/help-management",
      component: HelpManagement,
    },
    {
      path: "/master/faq-management",
      component: FaqManagement,
    },
    {
      path: "/master/message-management",
      component: MessageManagement,
    },
    {
      path: "/master/message-detail/:id",
      component: MessageUpdate,
    },
    {
      path: "/master/account-new/confirmation",
      component: RegisterConfirmation,
    },
    {
      path: "/master/account-management",
      component: AccountManagement,
    },
    {
      path: "/master/contract-plan-management",
      component: ContractPlanManagement,
    },
    {
      path: "/master/register",
      component: Register,
    },
    {
      path: "/master/management-account-management/:id",
      component: ManagementAccountManagement,
    },
  ];

  return (
    <Switch>
      {/* Inspection routes */}
      {props.role === "INSPECTION" &&
        inspectionRoutes.map((route, index) => (
          <PrivateRoute
            key={index}
            path={route.path}
            component={route.component}
            changeAccountService={props.changeAccountService}
          />
        ))}

      {/* Management routes */}
      {props.role === "MANAGEMENT" &&
        managementRoutes.map((route, index) => (
          <PrivateRoute
            key={index}
            path={route.path}
            component={route.component}
            changeAccountService={props.changeAccountService}
          />
        ))}

      {/* MyCarte routes */}
      {props.role === "MYCARTE" &&
        mycarteRoutes.map((route, index) => (
          <PrivateRoute
            key={index}
            path={route.path}
            component={route.component}
            changeAccountService={props.changeAccountService}
          />
        ))}

      {/* Alc Maintenace routes */}
      {props.role === "ALC-MAINTENANCE" &&
        alcRoutes.map((route, index) => (
          <PrivateRoute
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}

      {/* Sidebar routes */}
      {/* This function must be placed at the end */}
      {props.routes && props.routes.map((prop, key) => {
        return (
          (prop.hasChildren === false && (
            <PrivateRoute
              changeAccountService={props.changeAccountService}
              path={prop.rootPath + prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          )) ||
          (prop.hasChildren === true &&
            prop.items.map((item, key) => (
              <PrivateRoute
                path={item.rootPath + item.layout + item.path}
                component={item.component}
                key={key}
              />
            )))
        );
      })}
    </Switch>
  );
}

export default RouteConfiguration;
