"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2063],{76374:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var n=i(87462),o=(i(67294),i(3905)),l=i(50214),s=(i(47582),i(58764),i(29518));const r={title:"List.Accordion"},p=void 0,d={unversionedId:"components/List/ListAccordion",id:"components/List/ListAccordion",title:"List.Accordion",description:"A component used to display an expandable list item.",source:"@site/docs/components/List/ListAccordion.mdx",sourceDirName:"components/List",slug:"/components/List/ListAccordion",permalink:"/react-native-paper/docs/components/List/ListAccordion",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/List/ListAccordion.tsx",tags:[],version:"current",frontMatter:{title:"List.Accordion"},sidebar:"components",previous:{title:"IconButton",permalink:"/react-native-paper/docs/components/IconButton/"},next:{title:"List.AccordionGroup",permalink:"/react-native-paper/docs/components/List/ListAccordionGroup"}},c={},a=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"title (required)",id:"title-required",level:3},{value:"description",id:"description",level:3},{value:"left",id:"left",level:3},{value:"right",id:"right",level:3},{value:"expanded",id:"expanded",level:3},{value:"onPress",id:"onpress",level:3},{value:"onLongPress",id:"onlongpress",level:3},{value:"delayLongPress",id:"delaylongpress",level:3},{value:"children (required)",id:"children-required",level:3},{value:"theme",id:"theme",level:3},{value:"background",id:"background",level:3},{value:"style",id:"style",level:3},{value:"titleStyle",id:"titlestyle",level:3},{value:"descriptionStyle",id:"descriptionstyle",level:3},{value:"rippleColor",id:"ripplecolor",level:3},{value:"titleNumberOfLines",id:"titlenumberoflines",level:3},{value:"descriptionNumberOfLines",id:"descriptionnumberoflines",level:3},{value:"titleMaxFontSizeMultiplier",id:"titlemaxfontsizemultiplier",level:3},{value:"descriptionMaxFontSizeMultiplier",id:"descriptionmaxfontsizemultiplier",level:3},{value:"id",id:"id",level:3},{value:"testID",id:"testid",level:3},{value:"accessibilityLabel",id:"accessibilitylabel",level:3},{value:"pointerEvents",id:"pointerevents",level:3}],L={toc:a};function k(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},L,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A component used to display an expandable list item."),(0,o.kt)(s.Z,{screenshotData:{"with left icon":"screenshots/list-accordion-1.png","with description":"screenshots/list-accordion-2.png","items with icon":"screenshots/list-accordion-3.png"},baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import * as React from \'react\';\nimport { List } from \'react-native-paper\';\n\nconst MyComponent = () => {\n  const [expanded, setExpanded] = React.useState(true);\n\n  const handlePress = () => setExpanded(!expanded);\n\n  return (\n    <List.Section title="Accordions">\n      <List.Accordion\n        title="Uncontrolled Accordion"\n        left={props => <List.Icon {...props} icon="folder" />}>\n        <List.Item title="First item" />\n        <List.Item title="Second item" />\n      </List.Accordion>\n\n      <List.Accordion\n        title="Controlled Accordion"\n        left={props => <List.Icon {...props} icon="folder" />}\n        expanded={expanded}\n        onPress={handlePress}>\n        <List.Item title="First item" />\n        <List.Item title="Second item" />\n      </List.Accordion>\n    </List.Section>\n  );\n};\n\nexport default MyComponent;\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("span",null),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"title-required"},"title (required)")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"title",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"description"},"description")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"description",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"left"},"left")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"left",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"right"},"right")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"right",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"expanded"},"expanded")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"expanded",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"onpress"},"onPress")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"onPress",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"onlongpress"},"onLongPress")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"onLongPress",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"delaylongpress"},"delayLongPress")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"delayLongPress",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"children-required"},"children (required)")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"children",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"theme"},"theme")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"theme",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"background"},"background")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"background",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"style"},"style")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"style",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"titlestyle"},"titleStyle")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"titleStyle",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"descriptionstyle"},"descriptionStyle")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"descriptionStyle",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"ripplecolor"},"rippleColor")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"rippleColor",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"titlenumberoflines"},"titleNumberOfLines")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"titleNumberOfLines",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"descriptionnumberoflines"},"descriptionNumberOfLines")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"descriptionNumberOfLines",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"titlemaxfontsizemultiplier"},"titleMaxFontSizeMultiplier")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"titleMaxFontSizeMultiplier",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"descriptionmaxfontsizemultiplier"},"descriptionMaxFontSizeMultiplier")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"descriptionMaxFontSizeMultiplier",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"id"},"id")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"id",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"testid"},"testID")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"testID",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"accessibilitylabel"},"accessibilityLabel")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"accessibilityLabel",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"pointerevents"},"pointerEvents")),(0,o.kt)(l.Z,{componentLink:"List/ListAccordion",prop:"pointerEvents",mdxType:"PropTable"}),(0,o.kt)("span",null),(0,o.kt)("span",null),(0,o.kt)("span",null))}k.isMDXComponent=!0}}]);