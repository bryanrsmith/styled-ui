webpackJsonp([2],{1841:function(t,e,n){var a=n(0),o=n(87),i=n(414).PageRenderer;i.__esModule&&(i=i.default);var l=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1936)}},componentWillMount:function(){},render:function(){return a.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});l.__catalog_loader__=!0,t.exports=l},1936:function(t,e){t.exports='A typeahead control with keyboard navigation based on react-select.\n\n[Component documentation](https://github.com/JedWatson/react-select)\n\n### Migration guide from V1 to v2:\n\n- Change the import to `text-input-v2` (see below)\n- The dedicated CSS import is not required for v2. Delete the typeahead and boostrap CSS imports when upgrading.\n- `options` now requires an array of objects instead of strings\n- `multiple` should be changed to `isMulti` enable the tags input\n\n```\nimport { Select } from \'@faithlife/styled-ui/dist/text-input-v2\';\n```\n\n### Single select\n\n```react\nshowSource: true\nstate: { selection: \'\' }\n---\n<div>\n\t<div>Current selection: {state.selection}</div>\n\t<Select\n\t\tonChange={({ value }) => {\n\t\t\tsetState({ selection: value });\n\t\t}}\n\t\toptions={[\n\t\t\t{ value: "washington", label: "Washington" },\n\t\t\t{ value: "california", label: "California" },\n\t\t\t{ value: "Texas", label: "Texas" }\n\t\t]}\n\t\tplaceholder="Choose a state..."\n\t/>\n</div>\n```\n\n### Multi select\n\n```react\nshowSource: true\nstate: { tags: [] }\n---\n<div>\n\t<div>Current selection: {state.selection}</div>\n\t<Select\n\t\tonChange={({ value }) => {\n\t\t\tsetState({ selection: value });\n\t\t}}\n\t\tisMulti\n\t\toptions={[\n\t\t\t{ value: "washington", label: "Washington" },\n\t\t\t{ value: "california", label: "California" },\n\t\t\t{ value: "Texas", label: "Texas" }\n\t\t]}\n\t\tplaceholder="Choose a state..."\n\t/>\n</div>\n```\n\n### Multi select with custom entries\n\n```react\nshowSource: true\nstate: { tags: [] }\n---\n<div>\n\t<div>Current selection: {state.selection}</div>\n\t<CreatableSelect\n\t\tonChange={({ value }) => {\n\t\t\tsetState({ selection: value });\n\t\t}}\n\t\tisMulti\n\t\toptions={[\n\t\t\t{ value: "washington", label: "Washington" },\n\t\t\t{ value: "california", label: "California" },\n\t\t\t{ value: "Texas", label: "Texas" }\n\t\t]}\n\t\tplaceholder="Choose a state..."\n\t/>\n</div>\n```\n\n### Async select\n\n```react\nshowSource: true\nstate: { tags: [] }\n---\n<AsyncSelectDemo />\n```\n'}});
//# sourceMappingURL=2.adcd0a78.chunk.js.map