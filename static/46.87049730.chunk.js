webpackJsonp([46],{1879:function(e,t,n){var a=n(0),s=n(87),d=n(414).PageRenderer;d.__esModule&&(d=d.default);var r=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1974)}},componentWillMount:function(){},render:function(){return a.createElement(d,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,e.exports=r},1974:function(e,t){e.exports="## Default Date Picker\n\n```react\nshowSource: true\nstate: { selectedDate: null }\n---\n<div>\n<span>The selected date is {dateFunctions.format(state.selectedDate, 'MM-dd-yyyy')}</span>\n<DatePickerInput\n\tdefaultSelectedDate={state.selectedDate || new Date()}\n\tonChange={(date) => setState({ selectedDate: date })}\n\tdateFunctions={dateFunctions}\n\tparseUserDateString={parseUserDateString}\n\tvalidate={() => true}\n/>\n</div>\n```\n\n## Customized placement of Date Picker\n\n```react\nshowSource: true\nstate: { selectedDate: null }\n---\n<div>\n<span>The selected date is {dateFunctions.format(state.selectedDate, 'MM-dd-yyyy')}</span>\n<DatePickerInput\n\tdefaultSelectedDate={state.selectedDate || new Date()}\n\tonChange={(date) => setState({ selectedDate: date })}\n\tdateFunctions={dateFunctions}\n\tparseUserDateString={parseUserDateString}\n\tvalidate={() => true}\n\tplacement={\"left-start\"}\n/>\n</div>\n```\n"}});
//# sourceMappingURL=46.87049730.chunk.js.map