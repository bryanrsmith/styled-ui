webpackJsonp([52],{1846:function(t,n,e){var o=e(0),r=e(87),a=e(414).PageRenderer;a.__esModule&&(a=a.default);var i=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(1941)}},componentWillMount:function(){},render:function(){return o.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},1941:function(t,n){t.exports='Buttons allow users to command the computer to take some action. Buttons, like all standard form components, usually have 16 px space between them.\n\n## Component Variations\n\n### Scale Factor\n\n```react\nshowSource: true\n---\n<ButtonDemo>\n\t<Button primary small>\n\t\tSmall\n\t</Button>\n\t<Button primary medium>\n\t\tMedium\n\t</Button>\n\t<Button primary large>\n\t\tLarge\n\t</Button>\n</ButtonDemo>\n```\n\n### With Icon\n\n```react\nshowSource: true\n---\n<ButtonDemo>\n\t<Button primary large icon={<GearIcon />}>\n\t\tSettings\n\t</Button>\n\t<Button primary small icon={<GearIcon />}>\n\t\tSettings\n\t</Button>\n\t<Button primary condensed small icon={<GearIcon />} />\n\t<Button minorTransparent condensed small icon={<GearIcon />} />\n</ButtonDemo>\n```\n\n### With Attached Ref\n\n```react\nshowSource: true\n---\n<ButtonDemo>\n\t<Button primary small onClick={() => buttonRef.current.focus()}>\n\t\tFocus\n\t</Button>\n\t<Button primaryOutline small ref={buttonRef}>\n\t\tTarget Button\n\t</Button>\n</ButtonDemo>\n```\n\n### Supported style customizations\n\nDo not use the `style` prop to style this component (it will be ignored). Instead, if there is missing customization that you need for this component, ask to have it added. The `theme` prop can be used to control color variations while the `styleOverrides` prop can be used for other styles.\n\n```react\nshowSource: true\n---\n<ButtonDemo>\n\t<Button primary large theme={{ defaultColor: \'plum\', hoverColor: \'darkslateblue\' }}>\n\t\tPlum\n\t</Button>\n\t<Button primary large styleOverrides={{ width: \'200px\' }}>\n\t\t200px Wide\n\t</Button>\n\t<Button primary styleOverrides={{ fontSize: \'12px\', padding: \'8px\' }}>\n\t\t12px Font, 8px Padding\n\t</Button>\n</ButtonDemo>\n```\n\n- `small` -- this is the default size for web applications.\n- `medium` -- this is the default size for marketing web pages.\n- `large` -- for extra-special calls to action, used sparingly.\n\n### Relative Emphasis\n\n```react\nshowSource: true\n---\n<div>\n\t<ButtonDemo>\n\t\t<Button primary medium>\n\t\t\tPrimary\n\t\t</Button>\n\t\t<Button primaryOutline medium>\n\t\t\tPrimary Outline\n\t\t</Button>\n\t\t<Button minor medium>\n\t\t\tMinor\n\t\t</Button>\n\t\t<Button primaryTransparent medium condensed>\n\t\t\tPrimary Transparent\n\t\t</Button>\n\t\t<Button minorTransparent medium condensed>\n\t\t\tMinor Transparent\n\t\t</Button>\n\t</ButtonDemo>\n\t<div>\n\t\tHere is some text with an inline <Button primaryTransparent>primary</Button> and <Button minorTransparent>minor</Button>.\n\t</div>\n</div>\n```\n\n- `primary` -- for the most important or most common action for a user to take in a given context/scope. This button variant grabs the user\'s attention. In marketing pages, this style is for the "call to action" on a page.\n- `primaryOutline` -- for actions related to, or nearby the primary button in terms of visual hieararchy that are less common or less critical. Use this button when you want the user\'s casual attention.\n- `minor` -- for apps, not marketing pages. When there are a lot of common actions that are all of equal weight, consider using minor buttons.\n- `link` -- for situations where a hyperlink is indicated, but must be aligned with a row of buttons. Is very lightweight in terms of visual attention.\n\n## Disabled states\n\n```react\nshowSource: true\n---\n<ButtonDemo>\n\t<Button primary medium disabled>\n\t\tPrimary\n\t</Button>\n\t<Button primaryOutline medium disabled>\n\t\tPrimary Outline\n\t</Button>\n\t<Button minor medium disabled>\n\t\tMinor\n\t</Button>\n\t<Button primaryTransparent medium disabled>\n\t\tPrimary Transparent\n\t</Button>\n\t<Button minorTransparent medium disabled>\n\t\tMinor Transparent\n\t</Button>\n</ButtonDemo>\n```\n\n### Stretched buttons\n\n```react\nshowSource: true\n---\n<ButtonGrid>\n\t<Button primary small icon={<GearIcon />}>\n\t\tSettings\n\t</Button>\n\t<Button primary small>\n\t\tSettings\n\t</Button>\n\t<Button primary small icon={<GearIcon />} styleOverrides={{ justifyContent: \'left\' }}>\n\t\tSettings\n\t</Button>\n\t<Button primary small styleOverrides={{ justifyContent: \'left\' }}>\n\t\tSettings\n\t</Button>\n\t<Button primary small icon={<GearIcon />} styleOverrides={{ justifyContent: \'right\' }}>\n\t\tSettings\n\t</Button>\n\t<Button primary small styleOverrides={{ justifyContent: \'right\' }}>\n\t\tSettings\n\t</Button>\n\t<Button primary condensed small icon={<GearIcon />} />\n\t<Button minorTransparent condensed small icon={<GearIcon />} />\n</ButtonGrid>\n```\n\n## Button Text\n\n- Button text should be as concise as possible, but as long as necessary (for clarity).\n- Buttons are usually verbs (or short phrases that begin with a verb).\n\nButtons are generally interpreted as imperatives, with the computer as agent ("hey computer, do the thing"), the text of the thing to be done as a verb ("frob"), and a direct object to take the action on if needed ("frob widgets"). Thus a button that reads "frob widgets" will normally be interpreted by the user as them issuing the command: "Hey computer, frob the widgets!"\n\nThere are some exceptions, such as "Buy Now" buttons, which are generally interpreted as: "Hey computer, I want to buy [something] now!"\n\nSome buttons are noun phrases, but there should always be an implied verb. For example: a "Settings" button that launches a settings dialog in the current context has an implied verb of "Show" or "Launch" (if the user is thinking of what the computer will do) or "Edit" or "Change" (if they\'re thinking of what they want to do).\n\nButton text should never wrap, and should generally never need ellipses. If you do need them, you will need to supply the styles yourself:\n\n```react\nshowSource: true\n---\n<ButtonDemo>\n\t<Button primary small>\n\t\t<div style={{ overflow:\'hidden\', textOverflow:\'ellipsis\', maxWidth: 230 }}>\n\t\t\tReally long button text for demonstration purposes\n\t\t</div>\n\t</Button>\n</ButtonDemo>\n```\n\n## Examples\n\nA product sales page enables three possible user actions: Buy the product, rent the product, or learn more about the product. Appropriate button styles and text would be: "Buy now" (primary), "Rent" (primaryOutline), and "Learn more" (minor). If they are all in a row, they would come in the order: "Learn more", "Rent", and "Buy now" on the right.\n\n```react\nshowSource: true\n---\n<ButtonDemo>\n\t<Button primary medium>\n\t\tBuy now\n\t</Button>\n\t<Button primaryOutline medium>\n\t\tRent\n\t</Button>\n\t<Button minor medium>\n\t\tLearn more\n\t</Button>\n</ButtonDemo>\n```\n'}});
//# sourceMappingURL=52.e694ff52.chunk.js.map