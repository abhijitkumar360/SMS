import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SCREENS from "./Screens";
import CustomDrawer from "../components/CustomDrawer";

import Cssstyle from "../theme/Cssstyle";
import Dashboard from "screens/Dashboard";
import BottomNavigation from "./BottomNavigation";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Drawer.Navigator
      drawerStyle={Cssstyle.mainDrawerContainer}
      initialRouteName={SCREENS.DASHBOARD}
      screenOptions={{
        gestureDirection: 'horizontal',
        headerShown: false,
        drawerStyle:{...Cssstyle.mainDrawerContainer}
        // transitionSpec: {
        //   open: openConfig,
        //   close: openConfig,
        // },
        // cardStyleInterpolator:
        //   CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
      drawerContent={({ navigation }) => {
        return <CustomDrawer navigation={navigation} />;
      }}>
        {/* <Drawer.Screen name={SCREENS.DASHBOARD} component={Dashboard} /> */}
        <Drawer.Screen name={SCREENS.BOTTOM_NAVIGATION} component={BottomNavigation} />
      {/* <Drawer.Screen name={SCREENS.HOME} component={HomeScreen} /> */}
      {/* <Drawer.Screen name={SCREENS.DASHBOARD} component={Dashboard} />
      <Drawer.Screen name={SCREENS.VIDEO_LISTING} component={VideoListing} />
      <Drawer.Screen name={SCREENS.VIDEO_PLAYER} component={VideoPlayer} />
      <Drawer.Screen name={SCREENS.SEARCH_VACCINE} component={SearchVaccine} />
      <Drawer.Screen name={SCREENS.VACCINE_SLOT_LISTING} component={VaccineSlotListing} />
      <Drawer.Screen name={SCREENS.ASSESSMENT} component={AssessmentScreen} />
      <Drawer.Screen name={SCREENS.CONGRATULATIONS_SCREEN} component={CongratsScreen} />
      <Drawer.Screen name={SCREENS.ASSESSMENT_REVIEW} component={AssessmentReview} />
       <Drawer.Screen name={SCREENS.RESULT} component={ResultScreen} /> 
      <Drawer.Screen name={SCREENS.RESULT_DETAILS} component={ResultDetails} />
      <Drawer.Screen name={SCREENS.NOTIFICATION} component={Notification} />
      <Drawer.Screen name={SCREENS.COURSE_LIST} component={CourseList} />
      <Drawer.Screen name={SCREENS.COURSE_DETAILS} component={CourseDetails} />
      <Drawer.Screen name={SCREENS.CHAPTER_DETAILS} component={ChapterDetails} />
      <Drawer.Screen name={SCREENS.PROFILE} component={Profile} />
      <Drawer.Screen name={SCREENS.UPDATE_PROFILE} component={UpdateProfile} />
      <Drawer.Screen name={SCREENS.CONTACT_US} component={ContactUs} />
      <Drawer.Screen name={SCREENS.SUBSCRIPTION_PLAN} component={SubscriptionPlan} />
      <Drawer.Screen name={SCREENS.BOTTOM_NAVIGATION} component={BottomNavigation} />
      <Drawer.Screen name={SCREENS.HDFC_WEBVIEW} component={HDFCWebview} />
      <Drawer.Screen name={SCREENS.ORDER_HISTORY} component={OrderHistory} />
      <Drawer.Screen name={SCREENS.PAYMENT_DETAILS} component={PaymentDetails} />
      <Drawer.Screen name={SCREENS.PAYMENT_SUCCESS} component={PaymentSuccess} />
      <Drawer.Screen name={SCREENS.TOPIC_LIST} component={TopicList} />
      <Drawer.Screen name={SCREENS.OTHER_COURSE_LIST} component={OtherCourseList} />
      <Drawer.Screen name={SCREENS.CUSTOME_PLAYER} component={CustomVideoPlayer} />
      <Drawer.Screen name={SCREENS.VLE_SUBSCRIPTION} component={VLESubscription} />
      <Drawer.Screen name={SCREENS.PAID_COURSE_PAYMENT} component={PaidCoursePayment} />
      <Drawer.Screen name={SCREENS.BUY_CERTIFICATE} component={BuyCertificate} /> */}
    </Drawer.Navigator>
  );
}
