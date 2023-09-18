"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3],{88346:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=o(87462),i=(o(67294),o(3905)),a=o(50214),l=(o(58764),o(29518));const r={title:"BottomNavigation"},p=void 0,d={unversionedId:"components/BottomNavigation/BottomNavigation",id:"components/BottomNavigation/BottomNavigation",title:"BottomNavigation",description:"BottomNavigation provides quick navigation between top-level views of an app with a bottom navigation bar.",source:"@site/docs/components/BottomNavigation/BottomNavigation.mdx",sourceDirName:"components/BottomNavigation",slug:"/components/BottomNavigation/",permalink:"/react-native-paper/docs/components/BottomNavigation/",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/BottomNavigation/BottomNavigation.tsx",tags:[],version:"current",frontMatter:{title:"BottomNavigation"},sidebar:"components",previous:{title:"Banner",permalink:"/react-native-paper/docs/components/Banner"},next:{title:"BottomNavigation.Bar",permalink:"/react-native-paper/docs/components/BottomNavigation/BottomNavigationBar"}},m={},s=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"shifting",id:"shifting",level:3},{value:"labeled",id:"labeled",level:3},{value:"compact",id:"compact",level:3},{value:"navigationState (required)",id:"navigationstate-required",level:3},{value:"onIndexChange (required)",id:"onindexchange-required",level:3},{value:"renderScene (required)",id:"renderscene-required",level:3},{value:"renderIcon",id:"rendericon",level:3},{value:"renderLabel",id:"renderlabel",level:3},{value:"renderTouchable",id:"rendertouchable",level:3},{value:"getAccessibilityLabel",id:"getaccessibilitylabel",level:3},{value:"getBadge",id:"getbadge",level:3},{value:"getColor",id:"getcolor",level:3},{value:"getLabelText",id:"getlabeltext",level:3},{value:"getLazy",id:"getlazy",level:3},{value:"getTestID",id:"gettestid",level:3},{value:"onTabPress",id:"ontabpress",level:3},{value:"onTabLongPress",id:"ontablongpress",level:3},{value:"activeColor",id:"activecolor",level:3},{value:"inactiveColor",id:"inactivecolor",level:3},{value:"sceneAnimationEnabled",id:"sceneanimationenabled",level:3},{value:"sceneAnimationType",id:"sceneanimationtype",level:3},{value:"sceneAnimationEasing",id:"sceneanimationeasing",level:3},{value:"keyboardHidesNavigationBar",id:"keyboardhidesnavigationbar",level:3},{value:"safeAreaInsets",id:"safeareainsets",level:3},{value:"barStyle",id:"barstyle",level:3},{value:"labelMaxFontSizeMultiplier",id:"labelmaxfontsizemultiplier",level:3},{value:"style",id:"style",level:3},{value:"theme",id:"theme",level:3},{value:"testID",id:"testid",level:3}],v={toc:s};function c(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},v,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"BottomNavigation provides quick navigation between top-level views of an app with a bottom navigation bar.\nIt is primarily designed for use on mobile. If you want to use the navigation bar only see ",(0,i.kt)("a",{parentName:"p",href:"BottomNavigationBar"},(0,i.kt)("inlineCode",{parentName:"a"},"BottomNavigation.Bar")),"."),(0,i.kt)("p",null,"By default BottomNavigation uses primary color as a background, in dark theme with ",(0,i.kt)("inlineCode",{parentName:"p"},"adaptive")," mode it will use surface colour instead.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme"},"Dark Theme")," for more information."),(0,i.kt)(l.Z,{screenshotData:"screenshots/bottom-navigation.gif",baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { BottomNavigation, Text } from 'react-native-paper';\n\nconst MusicRoute = () => <Text>Music</Text>;\n\nconst AlbumsRoute = () => <Text>Albums</Text>;\n\nconst RecentsRoute = () => <Text>Recents</Text>;\n\nconst NotificationsRoute = () => <Text>Notifications</Text>;\n\nconst MyComponent = () => {\n  const [index, setIndex] = React.useState(0);\n  const [routes] = React.useState([\n    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},\n    { key: 'albums', title: 'Albums', focusedIcon: 'album' },\n    { key: 'recents', title: 'Recents', focusedIcon: 'history' },\n    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },\n  ]);\n\n  const renderScene = BottomNavigation.SceneMap({\n    music: MusicRoute,\n    albums: AlbumsRoute,\n    recents: RecentsRoute,\n    notifications: NotificationsRoute,\n  });\n\n  return (\n    <BottomNavigation\n      navigationState={{ index, routes }}\n      onIndexChange={setIndex}\n      renderScene={renderScene}\n    />\n  );\n};\n\nexport default MyComponent;\n")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"shifting"},"shifting")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"shifting",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"labeled"},"labeled")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"labeled",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"compact"},"compact")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"compact",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"navigationstate-required"},"navigationState (required)")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"navigationState",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"onindexchange-required"},"onIndexChange (required)")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"onIndexChange",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"renderscene-required"},"renderScene (required)")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"renderScene",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"rendericon"},"renderIcon")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"renderIcon",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"renderlabel"},"renderLabel")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"renderLabel",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"rendertouchable"},"renderTouchable")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"renderTouchable",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"getaccessibilitylabel"},"getAccessibilityLabel")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"getAccessibilityLabel",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"getbadge"},"getBadge")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"getBadge",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"getcolor"},"getColor")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"getColor",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"getlabeltext"},"getLabelText")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"getLabelText",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"getlazy"},"getLazy")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"getLazy",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"gettestid"},"getTestID")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"getTestID",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"ontabpress"},"onTabPress")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"onTabPress",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"ontablongpress"},"onTabLongPress")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"onTabLongPress",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"activecolor"},"activeColor")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"activeColor",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"inactivecolor"},"inactiveColor")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"inactiveColor",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"sceneanimationenabled"},"sceneAnimationEnabled")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"sceneAnimationEnabled",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"sceneanimationtype"},"sceneAnimationType")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"sceneAnimationType",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"sceneanimationeasing"},"sceneAnimationEasing")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"sceneAnimationEasing",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"keyboardhidesnavigationbar"},"keyboardHidesNavigationBar")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"keyboardHidesNavigationBar",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"safeareainsets"},"safeAreaInsets")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"safeAreaInsets",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"barstyle"},"barStyle")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"barStyle",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"labelmaxfontsizemultiplier"},"labelMaxFontSizeMultiplier")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"labelMaxFontSizeMultiplier",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"style"},"style")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"style",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"theme"},"theme")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"theme",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"testid"},"testID")),(0,i.kt)(a.Z,{componentLink:"BottomNavigation/BottomNavigation",prop:"testID",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("span",null),(0,i.kt)("span",null),(0,i.kt)("span",null))}c.isMDXComponent=!0}}]);