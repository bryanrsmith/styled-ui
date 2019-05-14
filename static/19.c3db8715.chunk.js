webpackJsonp([19],{1875:function(e,t,o){var n=o(0),r=o(87),p=o(414).PageRenderer;p.__esModule&&(p=p.default);var a=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(1970)}},componentWillMount:function(){},render:function(){return n.createElement(p,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,e.exports=a},1970:function(e,t){e.exports='## Popover\n\n```react\nshowSource: true\nstate: { isOpen: false }\n---\n<PopoverDemo>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top">Hello!</Popover>\n\t</PopoverManager>\n</PopoverDemo>\n```\n\n## Placement\n\n```react\nshowSource: true\nstate: { isOpen: false }\n---\n<PopoverDemo>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top">Hello!</Popover>\n\t</PopoverManager>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="bottom">Hello!</Popover>\n\t</PopoverManager>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="left">Hello!</Popover>\n\t</PopoverManager>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="right">Hello!</Popover>\n\t</PopoverManager>\n</PopoverDemo>\n```\n\n## Options\n\n```react\nshowSource: true\nstate: { isOpen: false }\n---\n<PopoverDemo>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top" theme={{ backgroundColor: \'#ebf7ff\' }}>Hello!</Popover>\n\t</PopoverManager>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover with zIndex!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top" styleOverrides={{ padding: \'18px\', hideShadow: true, width: \'200px\', border: \'black solid 1px\', zIndex: 10 }}>Hello!</Popover>\n\t</PopoverManager>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top" hideArrow>Hello!</Popover>\n\t</PopoverManager>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover w/ a delay!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top" delay={{ show: 1000, hide: 1000 }}>Hello!</Popover>\n\t</PopoverManager>\n</PopoverDemo>\n```\n\n## Using container prop\n\n```react\nshowSource: true\nstate: { isOpen: false }\n---\n// overflow: hidden\n<PopoverOverflowDemo>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top">I\'m inline</Popover>\n\t</PopoverManager>\n\t<PopoverManager>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top" container="body">I\'m thinking with portals!</Popover>\n\t</PopoverManager>\n</PopoverOverflowDemo>\n```\n\n## With focus handling\n\nWorks with container prop as well.\n\n```react\nshowSource: true\nstate: { isOpen: false }\n---\n<PopoverDemo>\n\t<PopoverManager onFocusAway={() => setState({ isOpen: false })}>\n\t\t<PopoverReference>\n\t\t\t<Button primary disableAutoBlur medium onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top">Click or tab to make me go away</Popover>\n\t</PopoverManager>\n\t<PopoverManager onFocusAway={() => setState({ isOpen: false })}>\n\t\t<PopoverReference>\n\t\t\t<Button primary medium disableAutoBlur onClick={() => setState({ isOpen: !state.isOpen })}>Show a Popover!</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement="top" container="body">I\'m thinking with portals!</Popover>\n\t</PopoverManager>\n</PopoverDemo>\n```\n\n## Tooltip\n\nAll props for normal popovers are available to tooltips.\n\n```react\nshowSource: true\nstate: { isOpen: false }\n---\n<PopoverDemo>\n\t<Tooltip text="Hello!">\n\t\t<Button primary medium>Uncontrolled Tooltip</Button>\n\t</Tooltip>\n\n\t<Tooltip text="Hello!" isOpen={state.isOpen}>\n\t\t<Button primary medium onClick={() => setState({ isOpen: !state.isOpen })}>Controlled Tooltip</Button>\n\t</Tooltip>\n\n\t<Tooltip text={<StyledDiv>Hello!</StyledDiv>}>\n\t\t<Button primary medium>Tooltip with jsx</Button>\n\t</Tooltip>\n</PopoverDemo>\n```\n'}});
//# sourceMappingURL=19.c3db8715.chunk.js.map