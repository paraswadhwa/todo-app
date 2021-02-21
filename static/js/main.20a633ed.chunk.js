(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{42:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(13),r=n.n(s),u=n(23),o=n(3),i=n(8),d=n(17),b=n(15),l=n(16),j=n(19),m=n(18),k=n(1),x=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){t.preventDefault();var n=e.refs.itemName.value;n&&((0,e.props.onValueChange)(n),e.refs.form.reset())},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.refs.itemName.focus()}},{key:"render",value:function(){var e=this.props.buttonText;return Object(k.jsxs)("form",{ref:"form",className:"input-form input-form-inline",onSubmit:this.onSubmit,children:[Object(k.jsx)("input",{type:"text",placeholder:"Enter Name",ref:"itemName",className:"form-control text"}),Object(k.jsx)("button",{type:"submit",className:"btn btn-default submit",children:e})]})}}]),n}(a.a.Component);function p(e){var t=e.items,n=e.bucketIndex,c=e.markTodoDone,a=e.removeItem,s=t.map((function(e,t){var s=e.done?"done":"undone";return Object(k.jsx)("li",{className:"list-group-item m10",children:Object(k.jsxs)("div",{className:s,children:[Object(k.jsx)("span",{className:"glyphicon glyphicon-ok icon","aria-hidden":"true",onClick:function(){c(t,n)}}),e.value,Object(k.jsx)("div",{className:"taskDeleteParent",children:Object(k.jsx)("span",{class:"glyphicon glyphicon-remove",onClick:function(){a(t,n)}})})]})},t)}));return Object(k.jsxs)("ul",{className:"list-group",children:[" ",s," "]})}function h(e){var t=e.bucket,n=e.addItem,c=e.removeItem,a=e.markTodoDone,s=e.bucketIndex;return Object(k.jsxs)("div",{id:"todo-bucket",children:[Object(k.jsx)(x,{buttonText:"Create Task",onValueChange:n}),Object(k.jsx)(p,{items:t.items,removeItem:c,markTodoDone:a,bucketIndex:s})]})}var O=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).addBucket=function(e){e&&(c.props.addBucketDispatch({name:e}),c.setState({selectedBucketIndex:0}))},c.addItem=function(e,t){c.props.addTaskDispatch({value:e,bucketIndex:t})},c.removeItem=function(e,t){c.props.removeTaskDispatch({taskIndex:e,bucketIndex:t})},c.markTodoDone=function(e,t){c.props.doneTaskDispatch({taskIndex:e,bucketIndex:t})},c.bucketSelection=function(e){c.setState({selectedBucketIndex:e})},c.bucketElements=function(){return Object(k.jsx)("ul",{className:"list-group",children:c.props.buckets.map((function(e,t){return Object(k.jsxs)("li",{onClick:function(){return c.bucketSelection(t)},className:"list-group-item bucket-items ".concat(c.state.selectedBucketIndex==t?"selected":""),children:[" ",e.name]},t)}))})},c.todoListElement=function(){var e=c.props.buckets[c.state.selectedBucketIndex];return e?Object(k.jsx)(h,{bucket:e,addItem:function(e){c.addItem(e,c.state.selectedBucketIndex)},removeItem:c.removeItem,markTodoDone:c.markTodoDone,bucketIndex:c.state.selectedBucketIndex},e.name+c.state.selectedBucketIndex):null},c.state={selectedBucketIndex:0},c}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"main",children:[Object(k.jsxs)("div",{className:"left",children:[Object(k.jsx)("center",{children:Object(k.jsx)("h1",{children:" Buckets "})}),Object(k.jsx)("div",{className:"input-form-inline",children:Object(k.jsx)(x,{buttonText:"Create Bucket",onValueChange:this.addBucket})}),Object(k.jsx)("div",{children:this.bucketElements()})]}),Object(k.jsxs)("div",{className:"right",children:[Object(k.jsx)("center",{children:Object(k.jsx)("h1",{children:" Tasks "})}),this.todoListElement()]})]})}}]),n}(c.Component),f="ADD_BUCKET",v="ADD_TASK",I="REMOVE_TASK",D="DONE_TASK",T=function(e){var t=e.name;return{type:f,name:t}},y=function(e){var t=e.value,n=e.bucketIndex;return{type:v,value:t,bucketIndex:n}},N=function(e){var t=e.taskIndex,n=e.bucketIndex;return{type:D,taskIndex:t,bucketIndex:n}},g=function(e){var t=e.taskIndex,n=e.bucketIndex;return{type:I,taskIndex:t,bucketIndex:n}},B=Object(o.f)(Object(d.b)((function(e){return{buckets:e.todoReducer.buckets}}),(function(e){return{addBucketDispatch:function(t){e(T(t))},addTaskDispatch:function(t){e(y(t))},doneTaskDispatch:function(t){e(N(t))},removeTaskDispatch:function(t){e(g(t))}}}))((function(e){return Object(k.jsx)(O,Object(i.a)({},e))}))),C=(n(42),function(){return Object(k.jsx)(u.a,{children:Object(k.jsx)(o.c,{children:Object(k.jsx)(o.a,{path:"/",exact:!0,children:Object(k.jsx)(B,{})})})})}),S=n(30),E=n(9),A=n(31),w=n(12),K={buckets:[]},R=n(24),V=n.n(R),_=Object(E.c)({todoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{buckets:[{name:t.name,items:[]}].concat(Object(w.a)(e.buckets))});case v:var n=e.buckets,c={done:!1,value:t.value},a=Object(i.a)({},n[t.bucketIndex]);return a.items.push(c),n[t.bucketIndex]=a,Object(i.a)(Object(i.a)({},e),{},{buckets:Object(w.a)(n)});case I:var s=e.buckets,r=s[t.bucketIndex];return r.items.splice(t.taskIndex,1),s[t.bucketIndex]=r,Object(i.a)(Object(i.a)({},e),{},{buckets:Object(w.a)(s)});case D:var u=e.buckets,o=u[t.bucketIndex],d=o.items[t.taskIndex];return d.done=!d.done,Object(i.a)(Object(i.a)({},e),{},{buckets:Object(w.a)(u)});default:return e}}}),J=n(28),L=(n(45),[]);L.push(A.a);var M={key:"root",storage:V.a,whitelist:["todoReducer"]},P=Object(J.a)(M,_),U=Object(E.d)(P,E.a.apply(void 0,L)),q=Object(J.b)(U),z=function(e){var t=e.children,n=e.isServer;return Object(k.jsx)(d.a,{store:U,children:Object(k.jsx)(S.a,{loading:n?t:null,persistor:q,children:t})})};r.a.render(Object(k.jsx)(z,{children:Object(k.jsx)(C,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.20a633ed.chunk.js.map