(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{49:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},50:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},51:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},52:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},53:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},55:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(21),m=c(19),r=c(20),j=c(14),i=c(49),d=c.n(i),l=c(50),u=c.n(l),b=c(0),x=function(e){return Object(b.jsx)("li",{className:u.a.item,children:Object(b.jsx)("p",{children:e.text})})},O=c(51),h=c.n(O),f=function(e){return Object(b.jsx)("ul",{className:h.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(x,{text:e.text},e.id)}))})},p=c(52),_=c.n(p),N=function(e){var t=Object(n.useRef)(),c=Object(m.a)(r.a),s=c.sendRequest,o=c.status,a=c.error,i=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||i()}),[o,a,i]);var d=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:_.a.form,onSubmit:d,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})}),Object(b.jsxs)("div",{className:_.a.control,onSubmit:d,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],i=Object(s.j)().quoteId,l=Object(m.a)(r.c),u=l.sendRequest,x=l.status,O=l.data;Object(n.useEffect)((function(){u(i)}),[i,u]);var h,p=Object(n.useCallback)((function(){u(i)}),[u,i]);return"pending"===x&&(h=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})})),"completed"===x&&O&&O.length>0&&(h=Object(b.jsx)(f,{comments:O})),"completed"!==x||O&&0!==O.length||(h=Object(b.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(b.jsxs)("section",{className:d.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(N,{quoteId:i,onAddedComment:p}),h]})},C=c(53),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(m.a)(r.e,!0),t=e.sendRequest,c=e.status,a=e.data,i=e.error,d=Object(s.k)(),l=Object(s.j)().quoteId;return Object(n.useEffect)((function(){t(l)}),[t,l]),"pending"===c?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})}):i?Object(b.jsx)("p",{className:"centered",children:i}):a.text?Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(q,{text:a.text,author:a.author}),Object(b.jsx)(s.c,{path:d.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(d.url,"/comments"),children:"Load Comments"})})}),Object(b.jsx)(s.c,{path:"".concat(d.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"No quote found"})}}}]);
//# sourceMappingURL=3.3ff01fd4.chunk.js.map