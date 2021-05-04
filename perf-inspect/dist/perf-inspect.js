/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];};return extendStatics(d,b);};function __extends(d,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());}var __assign=function(){__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};function __rest(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;}function __decorate(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;}function __param(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex);};}function __metadata(metadataKey,metadataValue){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(metadataKey,metadataValue);}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});}function __generator(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return {value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return {value:op[0]?op[1]:void 0,done:true};}}var __createBinding=Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];};function __exportStar(m,o){for(var p in m)if(p!=="default"&&!Object.prototype.hasOwnProperty.call(o,p))__createBinding(o,m,p);}function __values(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return {next:function(){if(o&&i>=o.length)o=void 0;return {value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");}function __read(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done)ar.push(r.value);}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;}/** @deprecated */function __spread(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar;}/** @deprecated */function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r;}function __spreadArray(to,from){for(var i=0,il=from.length,j=to.length;i<il;i++,j++)to[j]=from[i];return to;}function __await(v){return this instanceof __await?(this.v=v,this):new __await(v);}function __asyncGenerator(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this;},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){q.push([n,v,a,b])>1||resume(n,v);});};}function resume(n,v){try{step(g[n](v));}catch(e){settle(q[0][3],e);}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r);}function fulfill(value){resume("next",value);}function reject(value){resume("throw",value);}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1]);}}function __asyncDelegator(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e;}),verb("return"),i[Symbol.iterator]=function(){return this;},i;function verb(n,f){i[n]=o[n]?function(v){return (p=!p)?{value:__await(o[n](v)),done:n==="return"}:f?f(v):v;}:f;}}function __asyncValues(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o=typeof __values==="function"?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this;},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value);});};}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d});},reject);}}function __makeTemplateObject(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw});}else {cooked.raw=raw;}return cooked;};var __setModuleDefault=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;};function __importStar(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;}function __importDefault(mod){return mod&&mod.__esModule?mod:{default:mod};}function __classPrivateFieldGet(receiver,privateMap){if(!privateMap.has(receiver)){throw new TypeError("attempted to get private field on non-instance");}return privateMap.get(receiver);}function __classPrivateFieldSet(receiver,privateMap,value){if(!privateMap.has(receiver)){throw new TypeError("attempted to set private field on non-instance");}privateMap.set(receiver,value);return value;}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * True if the custom elements polyfill is in use.
 */const isCEPolyfill=typeof window!=='undefined'&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==undefined;/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */const reparentNodes=(container,start,end=null,before=null)=>{while(start!==end){const n=start.nextSibling;container.insertBefore(start,before);start=n;}};/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */const removeNodes=(container,start,end=null)=>{while(start!==end){const n=start.nextSibling;container.removeChild(start);start=n;}};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */const marker=`{{lit-${String(Math.random()).slice(2)}}}`;/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */const nodeMarker=`<!--${marker}-->`;const markerRegex=new RegExp(`${marker}|${nodeMarker}`);/**
 * Suffix appended to all bound attribute names.
 */const boundAttributeSuffix='$lit$';/**
 * An updatable Template that tracks the location of dynamic parts.
 */class Template{constructor(result,element){this.parts=[];this.element=element;const nodesToRemove=[];const stack=[];// Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
const walker=document.createTreeWalker(element.content,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,false);// Keeps track of the last index associated with a part. We try to delete
// unnecessary nodes, but we never want to associate two different parts
// to the same index. They must have a constant node between.
let lastPartIndex=0;let index=-1;let partIndex=0;const{strings,values:{length}}=result;while(partIndex<length){const node=walker.nextNode();if(node===null){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();continue;}index++;if(node.nodeType===1/* Node.ELEMENT_NODE */){if(node.hasAttributes()){const attributes=node.attributes;const{length}=attributes;// Per
// https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
// attributes are not guaranteed to be returned in document order.
// In particular, Edge/IE can return them out of order, so we cannot
// assume a correspondence between part index and attribute index.
let count=0;for(let i=0;i<length;i++){if(endsWith(attributes[i].name,boundAttributeSuffix)){count++;}}while(count-->0){// Get the template literal section leading up to the first
// expression in this attribute
const stringForPart=strings[partIndex];// Find the attribute name
const name=lastAttributeNameRegex.exec(stringForPart)[2];// Find the corresponding attribute
// All bound attributes have had a suffix added in
// TemplateResult#getHTML to opt out of special attribute
// handling. To look up the attribute value we also need to add
// the suffix.
const attributeLookupName=name.toLowerCase()+boundAttributeSuffix;const attributeValue=node.getAttribute(attributeLookupName);node.removeAttribute(attributeLookupName);const statics=attributeValue.split(markerRegex);this.parts.push({type:'attribute',index,name,strings:statics});partIndex+=statics.length-1;}}if(node.tagName==='TEMPLATE'){stack.push(node);walker.currentNode=node.content;}}else if(node.nodeType===3/* Node.TEXT_NODE */){const data=node.data;if(data.indexOf(marker)>=0){const parent=node.parentNode;const strings=data.split(markerRegex);const lastIndex=strings.length-1;// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(let i=0;i<lastIndex;i++){let insert;let s=strings[i];if(s===''){insert=createMarker();}else {const match=lastAttributeNameRegex.exec(s);if(match!==null&&endsWith(match[2],boundAttributeSuffix)){s=s.slice(0,match.index)+match[1]+match[2].slice(0,-boundAttributeSuffix.length)+match[3];}insert=document.createTextNode(s);}parent.insertBefore(insert,node);this.parts.push({type:'node',index:++index});}// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
if(strings[lastIndex]===''){parent.insertBefore(createMarker(),node);nodesToRemove.push(node);}else {node.data=strings[lastIndex];}// We have a part for each match found
partIndex+=lastIndex;}}else if(node.nodeType===8/* Node.COMMENT_NODE */){if(node.data===marker){const parent=node.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
if(node.previousSibling===null||index===lastPartIndex){index++;parent.insertBefore(createMarker(),node);}lastPartIndex=index;this.parts.push({type:'node',index});// If we don't have a nextSibling, keep this node so we have an end.
// Else, we can remove it to save future costs.
if(node.nextSibling===null){node.data='';}else {nodesToRemove.push(node);index--;}partIndex++;}else {let i=-1;while((i=node.data.indexOf(marker,i+1))!==-1){// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
this.parts.push({type:'node',index:-1});partIndex++;}}}}// Remove text binding nodes after the walk to not disturb the TreeWalker
for(const n of nodesToRemove){n.parentNode.removeChild(n);}}}const endsWith=(str,suffix)=>{const index=str.length-suffix.length;return index>=0&&str.slice(index)===suffix;};const isTemplatePartActive=part=>part.index!==-1;// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker=()=>document.createComment('');/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */const lastAttributeNameRegex=// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

const walkerNodeFilter=133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template;const walker=document.createTreeWalker(content,walkerNodeFilter,null,false);let partIndex=nextActiveIndexInTemplateParts(parts);let part=parts[partIndex];let nodeIndex=-1;let removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;// End removal if stepped past the removing node
if(node.previousSibling===currentRemovingNode){currentRemovingNode=null;}// A node to remove was found in the template
if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);// Track node we're removing
if(currentRemovingNode===null){currentRemovingNode=node;}}// When removing, increment count by which to adjust subsequent part indices
if(currentRemovingNode!==null){removeCount++;}while(part!==undefined&&part.index===nodeIndex){// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
part.index=currentRemovingNode!==null?-1:part.index-removeCount;// go to the next active part.
partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex];}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n));}const countNodes=node=>{let count=node.nodeType===11/* Node.DOCUMENT_FRAGMENT_NODE */?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,false);while(walker.nextNode()){count++;}return count;};const nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i;}}return -1;};/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(refNode===null||refNode===undefined){content.appendChild(node);return;}const walker=document.createTreeWalker(content,walkerNodeFilter,null,false);let partIndex=nextActiveIndexInTemplateParts(parts);let insertCount=0;let walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode);}while(partIndex!==-1&&parts[partIndex].index===walkerIndex){// If we've inserted the node, simply adjust all subsequent parts
if(insertCount>0){while(partIndex!==-1){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex);}return;}partIndex=nextActiveIndexInTemplateParts(parts,partIndex);}}}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const directives=new WeakMap();/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */const directive=f=>(...args)=>{const d=f(...args);directives.set(d,true);return d;};const isDirective=o=>{return typeof o==='function'&&directives.has(o);};

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */const noChange={};/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */const nothing={};

/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */class TemplateInstance{constructor(template,processor,options){this.__parts=[];this.template=template;this.processor=processor;this.options=options;}update(values){let i=0;for(const part of this.__parts){if(part!==undefined){part.setValue(values[i]);}i++;}for(const part of this.__parts){if(part!==undefined){part.commit();}}}_clone(){// There are a number of steps in the lifecycle of a template instance's
// DOM fragment:
//  1. Clone - create the instance fragment
//  2. Adopt - adopt into the main document
//  3. Process - find part markers and create parts
//  4. Upgrade - upgrade custom elements
//  5. Update - set node, attribute, property, etc., values
//  6. Connect - connect to the document. Optional and outside of this
//     method.
//
// We have a few constraints on the ordering of these steps:
//  * We need to upgrade before updating, so that property values will pass
//    through any property setters.
//  * We would like to process before upgrading so that we're sure that the
//    cloned fragment is inert and not disturbed by self-modifying DOM.
//  * We want custom elements to upgrade even in disconnected fragments.
//
// Given these constraints, with full custom elements support we would
// prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
//
// But Safari does not implement CustomElementRegistry#upgrade, so we
// can not implement that order and still have upgrade-before-update and
// upgrade disconnected fragments. So we instead sacrifice the
// process-before-upgrade constraint, since in Custom Elements v1 elements
// must not modify their light DOM in the constructor. We still have issues
// when co-existing with CEv0 elements like Polymer 1, and with polyfills
// that don't strictly adhere to the no-modification rule because shadow
// DOM, which may be created in the constructor, is emulated by being placed
// in the light DOM.
//
// The resulting order is on native is: Clone, Adopt, Upgrade, Process,
// Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
// in one step.
//
// The Custom Elements v1 polyfill supports upgrade(), so the order when
// polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
// Connect.
const fragment=isCEPolyfill?this.template.element.content.cloneNode(true):document.importNode(this.template.element.content,true);const stack=[];const parts=this.template.parts;// Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
const walker=document.createTreeWalker(fragment,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,false);let partIndex=0;let nodeIndex=0;let part;let node=walker.nextNode();// Loop through all the nodes and parts of a template
while(partIndex<parts.length){part=parts[partIndex];if(!isTemplatePartActive(part)){this.__parts.push(undefined);partIndex++;continue;}// Progress the tree walker until we find our next part's node.
// Note that multiple parts may share the same node (attribute parts
// on a single element), so this loop may not run at all.
while(nodeIndex<part.index){nodeIndex++;if(node.nodeName==='TEMPLATE'){stack.push(node);walker.currentNode=node.content;}if((node=walker.nextNode())===null){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();node=walker.nextNode();}}// We've arrived at our part's node.
if(part.type==='node'){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node.previousSibling);this.__parts.push(part);}else {this.__parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options));}partIndex++;}if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment);}return fragment;}}

/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */const policy=window.trustedTypes&&trustedTypes.createPolicy('lit-html',{createHTML:s=>s});const commentMarker=` ${marker} `;/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */class TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor;}/**
     * Returns a string of HTML used to create a `<template>` element.
     */getHTML(){const l=this.strings.length-1;let html='';let isCommentBinding=false;for(let i=0;i<l;i++){const s=this.strings[i];// For each binding we want to determine the kind of marker to insert
// into the template source before it's parsed by the browser's HTML
// parser. The marker type is based on whether the expression is in an
// attribute, text, or comment position.
//   * For node-position bindings we insert a comment with the marker
//     sentinel as its text content, like <!--{{lit-guid}}-->.
//   * For attribute bindings we insert just the marker sentinel for the
//     first binding, so that we support unquoted attribute bindings.
//     Subsequent bindings can use a comment marker because multi-binding
//     attributes must be quoted.
//   * For comment bindings we insert just the marker sentinel so we don't
//     close the comment.
//
// The following code scans the template source, but is *not* an HTML
// parser. We don't need to track the tree structure of the HTML, only
// whether a binding is inside a comment, and if not, if it appears to be
// the first binding in an attribute.
const commentOpen=s.lastIndexOf('<!--');// We're in comment position if we have a comment open with no following
// comment close. Because <-- can appear in an attribute value there can
// be false positives.
isCommentBinding=(commentOpen>-1||isCommentBinding)&&s.indexOf('-->',commentOpen+1)===-1;// Check to see if we have an attribute-like sequence preceding the
// expression. This can match "name=value" like structures in text,
// comments, and attribute values, so there can be false-positives.
const attributeMatch=lastAttributeNameRegex.exec(s);if(attributeMatch===null){// We're only in this branch if we don't have a attribute-like
// preceding sequence. For comments, this guards against unusual
// attribute values like <div foo="<!--${'bar'}">. Cases like
// <!-- foo=${'bar'}--> are handled correctly in the attribute branch
// below.
html+=s+(isCommentBinding?commentMarker:nodeMarker);}else {// For attributes we use just a marker sentinel, and also append a
// $lit$ suffix to the name to opt-out of attribute-specific parsing
// that IE and Edge do for style and certain SVG attributes.
html+=s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+boundAttributeSuffix+attributeMatch[3]+marker;}}html+=this.strings[l];return html;}getTemplateElement(){const template=document.createElement('template');let value=this.getHTML();if(policy!==undefined){// this is secure because `this.strings` is a TemplateStringsArray.
// TODO: validate this when
// https://github.com/tc39/proposal-array-is-template-object is
// implemented.
value=policy.createHTML(value);}template.innerHTML=value;return template;}}/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */class SVGTemplateResult extends TemplateResult{getHTML(){return `<svg>${super.getHTML()}</svg>`;}getTemplateElement(){const template=super.getTemplateElement();const content=template.content;const svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template;}}

const isPrimitive=value=>{return value===null||!(typeof value==='object'||typeof value==='function');};const isIterable=value=>{return Array.isArray(value)||// eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(value&&value[Symbol.iterator]);};/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */class AttributeCommitter{constructor(element,name,strings){this.dirty=true;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart();}}/**
     * Creates a single part. Override this to create a differnt type of part.
     */_createPart(){return new AttributePart(this);}_getValue(){const strings=this.strings;const l=strings.length-1;const parts=this.parts;// If we're assigning an attribute via syntax like:
//    attr="${foo}"  or  attr=${foo}
// but not
//    attr="${foo} ${bar}" or attr="${foo} baz"
// then we don't want to coerce the attribute value into one long
// string. Instead we want to just return the value itself directly,
// so that sanitizeDOMValue can get the actual value rather than
// String(value)
// The exception is if v is an array, in which case we do want to smash
// it together into a string without calling String() on the array.
//
// This also allows trusted values (when using TrustedTypes) being
// assigned to DOM sinks without being stringified in the process.
if(l===1&&strings[0]===''&&strings[1]===''){const v=parts[0].value;if(typeof v==='symbol'){return String(v);}if(typeof v==='string'||!isIterable(v)){return v;}}let text='';for(let i=0;i<l;i++){text+=strings[i];const part=parts[i];if(part!==undefined){const v=part.value;if(isPrimitive(v)||!isIterable(v)){text+=typeof v==='string'?v:String(v);}else {for(const t of v){text+=typeof t==='string'?t:String(t);}}}}text+=strings[l];return text;}commit(){if(this.dirty){this.dirty=false;this.element.setAttribute(this.name,this._getValue());}}}/**
 * A Part that controls all or part of an attribute value.
 */class AttributePart{constructor(committer){this.value=undefined;this.committer=committer;}setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;// If the value is a not a directive, dirty the committer so that it'll
// call setAttribute. If the value is a directive, it'll dirty the
// committer if it calls setValue().
if(!isDirective(value)){this.committer.dirty=true;}}}commit(){while(isDirective(this.value)){const directive=this.value;this.value=noChange;directive(this);}if(this.value===noChange){return;}this.committer.commit();}}/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */class NodePart{constructor(options){this.value=undefined;this.__pendingValue=undefined;this.options=options;}/**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker());}/**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling;}/**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendIntoPart(part){part.__insert(this.startNode=createMarker());part.__insert(this.endNode=createMarker());}/**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterPart(ref){ref.__insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode;}setValue(value){this.__pendingValue=value;}commit(){if(this.startNode.parentNode===null){return;}while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this);}const value=this.__pendingValue;if(value===noChange){return;}if(isPrimitive(value)){if(value!==this.value){this.__commitText(value);}}else if(value instanceof TemplateResult){this.__commitTemplateResult(value);}else if(value instanceof Node){this.__commitNode(value);}else if(isIterable(value)){this.__commitIterable(value);}else if(value===nothing){this.value=nothing;this.clear();}else {// Fallback, will render the string representation
this.__commitText(value);}}__insert(node){this.endNode.parentNode.insertBefore(node,this.endNode);}__commitNode(value){if(this.value===value){return;}this.clear();this.__insert(value);this.value=value;}__commitText(value){const node=this.startNode.nextSibling;value=value==null?'':value;// If `value` isn't already a string, we explicitly convert it here in case
// it can't be implicitly converted - i.e. it's a symbol.
const valueAsString=typeof value==='string'?value:String(value);if(node===this.endNode.previousSibling&&node.nodeType===3/* Node.TEXT_NODE */){// If we only have a single text node between the markers, we can just
// set its value, rather than replacing it.
// TODO(justinfagnani): Can we just check if this.value is primitive?
node.data=valueAsString;}else {this.__commitNode(document.createTextNode(valueAsString));}this.value=value;}__commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value instanceof TemplateInstance&&this.value.template===template){this.value.update(value.values);}else {// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
const instance=new TemplateInstance(template,value.processor,this.options);const fragment=instance._clone();instance.update(value.values);this.__commitNode(fragment);this.value=instance;}}__commitIterable(value){// For an Iterable, we create a new InstancePart per item, then set its
// value to the item. This is a little bit of overhead for every item in
// an Iterable, but it lets us recurse easily and efficiently update Arrays
// of TemplateResults that will be commonly returned from expressions like:
// array.map((i) => html`${i}`), by reusing existing TemplateInstances.
// If _value is an array, then the previous render was of an
// iterable and _value will contain the NodeParts from the previous
// render. If _value is not an array, clear this part and make a new
// array for NodeParts.
if(!Array.isArray(this.value)){this.value=[];this.clear();}// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
const itemParts=this.value;let partIndex=0;let itemPart;for(const item of value){// Try to reuse an existing part
itemPart=itemParts[partIndex];// If no existing part, create a new one
if(itemPart===undefined){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(partIndex===0){itemPart.appendIntoPart(this);}else {itemPart.insertAfterPart(itemParts[partIndex-1]);}}itemPart.setValue(item);itemPart.commit();partIndex++;}if(partIndex<itemParts.length){// Truncate the parts array so _value reflects the current state
itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode);}}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode);}}/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */class BooleanAttributePart{constructor(element,name,strings){this.value=undefined;this.__pendingValue=undefined;if(strings.length!==2||strings[0]!==''||strings[1]!==''){throw new Error('Boolean attributes can only contain a single expression');}this.element=element;this.name=name;this.strings=strings;}setValue(value){this.__pendingValue=value;}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this);}if(this.__pendingValue===noChange){return;}const value=!!this.__pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,'');}else {this.element.removeAttribute(this.name);}this.value=value;}this.__pendingValue=noChange;}}/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=strings.length===2&&strings[0]===''&&strings[1]==='';}_createPart(){return new PropertyPart(this);}_getValue(){if(this.single){return this.parts[0].value;}return super._getValue();}commit(){if(this.dirty){this.dirty=false;// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.element[this.name]=this._getValue();}}}class PropertyPart extends AttributePart{}// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported=false;// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(()=>{try{const options={get capture(){eventOptionsSupported=true;return false;}};// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.addEventListener('test',options,options);// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.removeEventListener('test',options,options);}catch(_e){// event options not supported
}})();class EventPart{constructor(element,eventName,eventContext){this.value=undefined;this.__pendingValue=undefined;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this.__boundHandleEvent=e=>this.handleEvent(e);}setValue(value){this.__pendingValue=value;}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this);}if(this.__pendingValue===noChange){return;}const newListener=this.__pendingValue;const oldListener=this.value;const shouldRemoveListener=newListener==null||oldListener!=null&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive);const shouldAddListener=newListener!=null&&(oldListener==null||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options);}if(shouldAddListener){this.__options=getOptions(newListener);this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options);}this.value=newListener;this.__pendingValue=noChange;}handleEvent(event){if(typeof this.value==='function'){this.value.call(this.eventContext||this.element,event);}else {this.value.handleEvent(event);}}}// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===undefined){templateCache={stringsArray:new WeakMap(),keyString:new Map()};templateCaches.set(result.type,templateCache);}let template=templateCache.stringsArray.get(result.strings);if(template!==undefined){return template;}// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
const key=result.strings.join(marker);// Check if we already have a Template for this key
template=templateCache.keyString.get(key);if(template===undefined){// If we have not seen this key before, create a new Template
template=new Template(result,result.getTemplateElement());// Cache the Template for this key
templateCache.keyString.set(key,template);}// Cache all future queries for this TemplateStringsArray
templateCache.stringsArray.set(result.strings,template);return template;}const templateCaches=new Map();

const parts=new WeakMap();/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */const render=(result,container,options)=>{let part=parts.get(container);if(part===undefined){removeNodes(container,container.firstChild);parts.set(container,part=new NodePart(Object.assign({templateFactory},options)));part.appendInto(container);}part.setValue(result);part.commit();};

/**
 * Creates Parts when a template is instantiated.
 */class DefaultTemplateProcessor{/**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if(prefix==='.'){const committer=new PropertyCommitter(element,name.slice(1),strings);return committer.parts;}if(prefix==='@'){return [new EventPart(element,name.slice(1),options.eventContext)];}if(prefix==='?'){return [new BooleanAttributePart(element,name.slice(1),strings)];}const committer=new AttributeCommitter(element,name,strings);return committer.parts;}/**
     * Create parts for a text-position binding.
     * @param templateFactory
     */handleTextExpression(options){return new NodePart(options);}}const defaultTemplateProcessor=new DefaultTemplateProcessor();

// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if(typeof window!=='undefined'){(window['litHtmlVersions']||(window['litHtmlVersions']=[])).push('1.3.0');}/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */const html=(strings,...values)=>new TemplateResult(strings,values,'html',defaultTemplateProcessor);/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */const svg=(strings,...values)=>new SVGTemplateResult(strings,values,'svg',defaultTemplateProcessor);

const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=true;if(typeof window.ShadyCSS==='undefined'){compatibleShadyCSSVersion=false;}else if(typeof window.ShadyCSS.prepareTemplateDom==='undefined'){console.warn(`Incompatible ShadyCSS version detected. `+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and `+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=false;}/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===undefined){templateCache={stringsArray:new WeakMap(),keyString:new Map()};templateCaches.set(cacheKey,templateCache);}let template=templateCache.stringsArray.get(result.strings);if(template!==undefined){return template;}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===undefined){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName);}template=new Template(result,element);templateCache.keyString.set(key,template);}templateCache.stringsArray.set(result.strings,template);return template;};const TEMPLATE_TYPES=['html','svg'];/**
 * Removes all style elements from Templates for the given scopeName.
 */const removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==undefined){templates.keyString.forEach(template=>{const{element:{content}}=template;// IE 11 doesn't support the iterable param Set constructor
const styles=new Set();Array.from(content.querySelectorAll('style')).forEach(s=>{styles.add(s);});removeNodesFromTemplate(template,styles);});}});};const shadyRenderSet=new Set();/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */const prepareTemplateStyles=(scopeName,renderedDOM,template)=>{shadyRenderSet.add(scopeName);// If `renderedDOM` is stamped from a Template, then we need to edit that
// Template's underlying template element. Otherwise, we create one here
// to give to ShadyCSS, which still requires one while scoping.
const templateElement=!!template?template.element:document.createElement('template');// Move styles out of rendered DOM and store.
const styles=renderedDOM.querySelectorAll('style');const{length}=styles;// If there are no styles, skip unnecessary work
if(length===0){// Ensure prepareTemplateStyles is called to support adding
// styles via `prepareAdoptedCssText` since that requires that
// `prepareTemplateStyles` is called.
//
// ShadyCSS will only update styles containing @apply in the template
// given to `prepareTemplateStyles`. If no lit Template was given,
// ShadyCSS will not be able to update uses of @apply in any relevant
// template. However, this is not a problem because we only create the
// template for the purpose of supporting `prepareAdoptedCssText`,
// which doesn't support @apply at all.
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);return;}const condensedStyle=document.createElement('style');// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(let i=0;i<length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent;}// Remove styles from nested templates in this scope.
removeStylesFromLitTemplates(scopeName);// And then put the condensed style into the "root" template passed in as
// `template`.
const content=templateElement.content;if(!!template){insertNodeIntoTemplate(template,condensedStyle,content.firstChild);}else {content.insertBefore(condensedStyle,content.firstChild);}// Note, it's important that ShadyCSS gets the template that `lit-html`
// will actually render so that it can update the style inside when
// needed (e.g. @apply native Shadow DOM case).
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const style=content.querySelector('style');if(window.ShadyCSS.nativeShadow&&style!==null){// When in native Shadow DOM, ensure the style created by ShadyCSS is
// included in initially rendered output (`renderedDOM`).
renderedDOM.insertBefore(style.cloneNode(true),renderedDOM.firstChild);}else if(!!template){// When no style is left in the template, parts will be broken as a
// result. To fix this, we put back the style node ShadyCSS removed
// and then tell lit to remove that node from the template.
// There can be no style in the template in 2 cases (1) when Shady DOM
// is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
// is in use ShadyCSS removes the style if it contains no content.
// NOTE, ShadyCSS creates its own style so we can safely add/remove
// `condensedStyle` here.
content.insertBefore(condensedStyle,content.firstChild);const removes=new Set();removes.add(condensedStyle);removeNodesFromTemplate(template,removes);}};/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */const render$1=(result,container,options)=>{if(!options||typeof options!=='object'||!options.scopeName){throw new Error('The `scopeName` option is required.');}const scopeName=options.scopeName;const hasRendered=parts.has(container);const needsScoping=compatibleShadyCSSVersion&&container.nodeType===11/* Node.DOCUMENT_FRAGMENT_NODE */&&!!container.host;// Handle first render to a scope specially...
const firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName);// On first scope render, render into a fragment; this cannot be a single
// fragment that is reused since nested renders can occur synchronously.
const renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(firstScopeRender){const part=parts.get(renderContainer);parts.delete(renderContainer);// ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
// that should apply to `renderContainer` even if the rendered value is
// not a TemplateInstance. However, it will only insert scoped styles
// into the document if `prepareTemplateStyles` has already been called
// for the given scope name.
const template=part.value instanceof TemplateInstance?part.value.template:undefined;prepareTemplateStyles(scopeName,renderContainer,template);removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts.set(container,part);}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSS.styleElement`
// for dynamic changes.
if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host);}};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var _a;/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */ /*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */window.JSCompiler_renameProperty=(prop,_obj)=>prop;const defaultConverter={toAttribute(value,type){switch(type){case Boolean:return value?'':null;case Object:case Array:// if the value is `null` or `undefined` pass this through
// to allow removing/no change behavior.
return value==null?value:JSON.stringify(value);}return value;},fromAttribute(value,type){switch(type){case Boolean:return value!==null;case Number:return value===null?null:Number(value);case Object:case Array:return JSON.parse(value);}return value;}};/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */const notEqual=(value,old)=>{// This ensures (old==NaN, value==NaN) always returns false
return old!==value&&(old===old||value===value);};const defaultPropertyDeclaration={attribute:true,type:String,converter:defaultConverter,reflect:false,hasChanged:notEqual};const STATE_HAS_UPDATED=1;const STATE_UPDATE_REQUESTED=1<<2;const STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3;const STATE_IS_REFLECTING_TO_PROPERTY=1<<4;/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */const finalized='finalized';/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */class UpdatingElement extends HTMLElement{constructor(){super();this.initialize();}/**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */static get observedAttributes(){// note: piggy backing on this to ensure we're finalized.
this.finalize();const attributes=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this._classProperties.forEach((v,p)=>{const attr=this._attributeNameForProperty(p,v);if(attr!==undefined){this._attributeToPropertyMap.set(attr,p);attributes.push(attr);}});return attributes;}/**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */static _ensureClassProperties(){// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties',this))){this._classProperties=new Map();// NOTE: Workaround IE11 not supporting Map constructor argument.
const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==undefined){superProperties.forEach((v,k)=>this._classProperties.set(k,v));}}}/**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */static createProperty(name,options=defaultPropertyDeclaration){// Note, since this can be called by the `@property` decorator which
// is called before `finalize`, we ensure storage exists for property
// metadata.
this._ensureClassProperties();this._classProperties.set(name,options);// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(options.noAccessor||this.prototype.hasOwnProperty(name)){return;}const key=typeof name==='symbol'?Symbol():`__${name}`;const descriptor=this.getPropertyDescriptor(name,key,options);if(descriptor!==undefined){Object.defineProperty(this.prototype,name,descriptor);}}/**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */static getPropertyDescriptor(name,key,options){return {// tslint:disable-next-line:no-any no symbol in index
get(){return this[key];},set(value){const oldValue=this[name];this[key]=value;this.requestUpdateInternal(name,oldValue,options);},configurable:true,enumerable:true};}/**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */static getPropertyOptions(name){return this._classProperties&&this._classProperties.get(name)||defaultPropertyDeclaration;}/**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */static finalize(){// finalize any superclasses
const superCtor=Object.getPrototypeOf(this);if(!superCtor.hasOwnProperty(finalized)){superCtor.finalize();}this[finalized]=true;this._ensureClassProperties();// initialize Map populated in observedAttributes
this._attributeToPropertyMap=new Map();// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if(this.hasOwnProperty(JSCompiler_renameProperty('properties',this))){const props=this.properties;// support symbols in properties (IE11 does not support this)
const propKeys=[...Object.getOwnPropertyNames(props),...(typeof Object.getOwnPropertySymbols==='function'?Object.getOwnPropertySymbols(props):[])];// This for/of is ok because propKeys is an array
for(const p of propKeys){// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
this.createProperty(p,props[p]);}}}/**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */static _attributeNameForProperty(name,options){const attribute=options.attribute;return attribute===false?undefined:typeof attribute==='string'?attribute:typeof name==='string'?name.toLowerCase():undefined;}/**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old);}/**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */static _propertyValueFromAttribute(value,options){const type=options.type;const converter=options.converter||defaultConverter;const fromAttribute=typeof converter==='function'?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value;}/**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */static _propertyValueToAttribute(value,options){if(options.reflect===undefined){return;}const type=options.type;const converter=options.converter;const toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type);}/**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */initialize(){this._updateState=0;this._updatePromise=new Promise(res=>this._enableUpdatingResolver=res);this._changedProperties=new Map();this._saveInstanceProperties();// ensures first update will be caught by an early access of
// `updateComplete`
this.requestUpdateInternal();}/**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */_saveInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this.constructor._classProperties.forEach((_v,p)=>{if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map();}this._instanceProperties.set(p,value);}});}/**
     * Applies previously saved instance properties.
     */_applyInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
// tslint:disable-next-line:no-any
this._instanceProperties.forEach((v,p)=>this[p]=v);this._instanceProperties=undefined;}connectedCallback(){// Ensure first connection completes an update. Updates cannot complete
// before connection.
this.enableUpdating();}enableUpdating(){if(this._enableUpdatingResolver!==undefined){this._enableUpdatingResolver();this._enableUpdatingResolver=undefined;}}/**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */disconnectedCallback(){}/**
     * Synchronizes property values when attributes change.
     */attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value);}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor;const attr=ctor._attributeNameForProperty(name,options);if(attr!==undefined){const attrValue=ctor._propertyValueToAttribute(value,options);// an undefined value does not change the attribute.
if(attrValue===undefined){return;}// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(attrValue==null){this.removeAttribute(attr);}else {this.setAttribute(attr,attrValue);}// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE;}}_attributeToProperty(name,value){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return;}const ctor=this.constructor;// Note, hint this as an `AttributeMap` so closure clearly understands
// the type; it has issues with tracking types through statics
// tslint:disable-next-line:no-unnecessary-type-assertion
const propName=ctor._attributeToPropertyMap.get(name);if(propName!==undefined){const options=ctor.getPropertyOptions(propName);// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=// tslint:disable-next-line:no-any
ctor._propertyValueFromAttribute(value,options);// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY;}}/**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */requestUpdateInternal(name,oldValue,options){let shouldRequestUpdate=true;// If we have a property key, perform property update steps.
if(name!==undefined){const ctor=this.constructor;options=options||ctor.getPropertyOptions(name);if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue);}// Add to reflecting properties set.
// Note, it's important that every change has a chance to add the
// property to `_reflectingProperties`. This ensures setting
// attribute + property reflects correctly.
if(options.reflect===true&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===undefined){this._reflectingProperties=new Map();}this._reflectingProperties.set(name,options);}}else {// Abort the request if the property should not be considered changed.
shouldRequestUpdate=false;}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._updatePromise=this._enqueueUpdate();}}/**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */requestUpdate(name,oldValue){this.requestUpdateInternal(name,oldValue);return this.updateComplete;}/**
     * Sets up the element to asynchronously update.
     */async _enqueueUpdate(){this._updateState=this._updateState|STATE_UPDATE_REQUESTED;try{// Ensure any previous update has resolved before updating.
// This `await` also ensures that property changes are batched.
await this._updatePromise;}catch(e){// Ignore any previous errors. We only care that the previous cycle is
// done. Any error should have been handled in the previous update.
}const result=this.performUpdate();// If `performUpdate` returns a Promise, we await it. This is done to
// enable coordinating updates with a scheduler. Note, the result is
// checked to avoid delaying an additional microtask unless we need to.
if(result!=null){await result;}return !this._hasRequestedUpdate;}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED;}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED;}/**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */performUpdate(){// Abort any update if one is not pending when this is called.
// This can happen if `performUpdate` is called early to "flush"
// the update.
if(!this._hasRequestedUpdate){return;}// Mixin instance properties once, if they exist.
if(this._instanceProperties){this._applyInstanceProperties();}let shouldUpdate=false;const changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties);if(shouldUpdate){this.update(changedProperties);}else {this._markUpdated();}}catch(e){// Prevent `firstUpdated` and `updated` from running when there's an
// update exception.
shouldUpdate=false;// Ensure element can accept additional updates after an exception.
this._markUpdated();throw e;}if(shouldUpdate){if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties);}this.updated(changedProperties);}}_markUpdated(){this._changedProperties=new Map();this._updateState=this._updateState&~STATE_UPDATE_REQUESTED;}/**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */get updateComplete(){return this._getUpdateComplete();}/**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */_getUpdateComplete(){return this._updatePromise;}/**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */shouldUpdate(_changedProperties){return true;}/**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */update(_changedProperties){if(this._reflectingProperties!==undefined&&this._reflectingProperties.size>0){// Use forEach so this works even if for/of loops are compiled to for
// loops expecting arrays
this._reflectingProperties.forEach((v,k)=>this._propertyToAttribute(k,this[k],v));this._reflectingProperties=undefined;}this._markUpdated();}/**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */updated(_changedProperties){}/**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */firstUpdated(_changedProperties){}}_a=finalized;/**
 * Marks class as having finished creating properties.
 */UpdatingElement[_a]=true;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const legacyCustomElement=(tagName,clazz)=>{window.customElements.define(tagName,clazz);// Cast as any because TS doesn't recognize the return type as being a
// subtype of the decorated class when clazz is typed as
// `Constructor<HTMLElement>` for some reason.
// `Constructor<HTMLElement>` is helpful to make sure the decorator is
// applied to elements however.
// tslint:disable-next-line:no-any
return clazz;};const standardCustomElement=(tagName,descriptor)=>{const{kind,elements}=descriptor;return {kind,elements,// This callback is called once the class is otherwise fully defined
finisher(clazz){window.customElements.define(tagName,clazz);}};};/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @customElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The name of the custom element to define.
 */const customElement=tagName=>classOrDescriptor=>typeof classOrDescriptor==='function'?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor);const standardProperty=(options,element)=>{// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
if(element.kind==='method'&&element.descriptor&&!('value'in element.descriptor)){return Object.assign(Object.assign({},element),{finisher(clazz){clazz.createProperty(element.key,options);}});}else {// createProperty() takes care of defining the property, but we still
// must return some kind of descriptor, so return a descriptor for an
// unused prototype field. The finisher calls createProperty().
return {kind:'field',key:Symbol(),placement:'own',descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
initializer(){if(typeof element.initializer==='function'){this[element.key]=element.initializer.call(this);}},finisher(clazz){clazz.createProperty(element.key,options);}};}};const legacyProperty=(options,proto,name)=>{proto.constructor.createProperty(name,options);};/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */function property(options){// tslint:disable-next-line:no-any decorator
return (protoOrDescriptor,name)=>name!==undefined?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor);}/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */function internalProperty(options){return property({attribute:false,hasChanged:options===null||options===void 0?void 0:options.hasChanged});}/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */function query(selector,cache){return (protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelector(selector);},enumerable:true,configurable:true};if(cache){const key=typeof name==='symbol'?Symbol():`__${name}`;descriptor.get=function(){if(this[key]===undefined){this[key]=this.renderRoot.querySelector(selector);}return this[key];};}return name!==undefined?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor);};}// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */function queryAsync(selector){return (protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={async get(){await this.updateComplete;return this.renderRoot.querySelector(selector);},enumerable:true,configurable:true};return name!==undefined?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor);};}/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */function queryAll(selector){return (protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelectorAll(selector);},enumerable:true,configurable:true};return name!==undefined?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor);};}const legacyQuery=(descriptor,proto,name)=>{Object.defineProperty(proto,name,descriptor);};const standardQuery=(descriptor,element)=>({kind:'method',placement:'prototype',key:element.key,descriptor});const standardEventOptions=(options,element)=>{return Object.assign(Object.assign({},element),{finisher(clazz){Object.assign(clazz.prototype[element.key],options);}});};const legacyEventOptions=// tslint:disable-next-line:no-any legacy decorator
(options,proto,name)=>{Object.assign(proto[name],options);};/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}`>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */function eventOptions(options){// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
return (protoOrDescriptor,name)=>name!==undefined?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor);}// x-browser support for matches
// tslint:disable-next-line:no-any
const ElementProto=Element.prototype;const legacyMatches=ElementProto.msMatchesSelector||ElementProto.webkitMatchesSelector;/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given named `slot`. Note, the type of
 * this property should be annotated as `NodeListOf<HTMLElement>`.
 *
 * @param slotName A string name of the slot.
 * @param flatten A boolean which when true flattens the assigned nodes,
 * meaning any assigned nodes that are slot elements are replaced with their
 * assigned nodes.
 * @param selector A string which filters the results to elements that match
 * the given css selector.
 *
 * * @example
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes('list', true, '.item')
 *   listItems;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */function queryAssignedNodes(slotName='',flatten=false,selector=''){return (protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){const slotSelector=`slot${slotName?`[name=${slotName}]`:':not([name])'}`;const slot=this.renderRoot.querySelector(slotSelector);let nodes=slot&&slot.assignedNodes({flatten});if(nodes&&selector){nodes=nodes.filter(node=>node.nodeType===Node.ELEMENT_NODE&&node.matches?node.matches(selector):legacyMatches.call(node,selector));}return nodes;},enumerable:true,configurable:true};return name!==undefined?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor);};}

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ /**
 * Whether the current browser supports `adoptedStyleSheets`.
 */const supportsAdoptingStyleSheets=window.ShadowRoot&&(window.ShadyCSS===undefined||window.ShadyCSS.nativeShadow)&&'adoptedStyleSheets'in Document.prototype&&'replace'in CSSStyleSheet.prototype;const constructionToken=Symbol();class CSSResult{constructor(cssText,safeToken){if(safeToken!==constructionToken){throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');}this.cssText=cssText;}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
get styleSheet(){if(this._styleSheet===undefined){// Note, if `supportsAdoptingStyleSheets` is true then we assume
// CSSStyleSheet is constructable.
if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet();this._styleSheet.replaceSync(this.cssText);}else {this._styleSheet=null;}}return this._styleSheet;}toString(){return this.cssText;}}/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */const unsafeCSS=value=>{return new CSSResult(String(value),constructionToken);};const textFromCSSResult=value=>{if(value instanceof CSSResult){return value.cssText;}else if(typeof value==='number'){return value;}else {throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);}};/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */const css=(strings,...values)=>{const cssText=values.reduce((acc,v,idx)=>acc+textFromCSSResult(v)+strings[idx+1],strings[0]);return new CSSResult(cssText,constructionToken);};

// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions']||(window['litElementVersions']=[])).push('2.4.0');/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */const renderNotImplemented={};/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */class LitElement extends UpdatingElement{/**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */static getStyles(){return this.styles;}/** @nocollapse */static _getUniqueStyles(){// Only gather styles once per class
if(this.hasOwnProperty(JSCompiler_renameProperty('_styles',this))){return;}// Take care not to call `this.getStyles()` multiple times since this
// generates new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
const userStyles=this.getStyles();if(Array.isArray(userStyles)){// De-duplicate styles preserving the _last_ instance in the set.
// This is a performance optimization to avoid duplicated styles that can
// occur especially when composing via subclassing.
// The last item is kept to try to preserve the cascade order with the
// assumption that it's most important that last added styles override
// previous styles.
const addStyles=(styles,set)=>styles.reduceRight((set,s)=>// Note: On IE set.add() does not return the set
Array.isArray(s)?addStyles(s,set):(set.add(s),set),set);// Array.from does not work on Set in IE, otherwise return
// Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
const set=addStyles(userStyles,new Set());const styles=[];set.forEach(v=>styles.unshift(v));this._styles=styles;}else {this._styles=userStyles===undefined?[]:[userStyles];}// Ensure that there are no invalid CSSStyleSheet instances here. They are
// invalid in two conditions.
// (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
//     this is impossible to check except via .replaceSync or use
// (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
//     false)
this._styles=this._styles.map(s=>{if(s instanceof CSSStyleSheet&&!supportsAdoptingStyleSheets){// Flatten the cssText from the passed constructible stylesheet (or
// undetectable non-constructible stylesheet). The user might have
// expected to update their stylesheets over time, but the alternative
// is a crash.
const cssText=Array.prototype.slice.call(s.cssRules).reduce((css,rule)=>css+rule.cssText,'');return unsafeCSS(cssText);}return s;});}/**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */initialize(){super.initialize();this.constructor._getUniqueStyles();this.renderRoot=this.createRenderRoot();// Note, if renderRoot is not a shadowRoot, styles would/could apply to the
// element's getRootNode(). While this could be done, we're choosing not to
// support this now since it would require different logic around de-duping.
if(window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot){this.adoptStyles();}}/**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */createRenderRoot(){return this.attachShadow({mode:'open'});}/**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */adoptStyles(){const styles=this.constructor._styles;if(styles.length===0){return;}// There are three separate cases here based on Shadow DOM support.
// (1) shadowRoot polyfilled: use ShadyCSS
// (2) shadowRoot.adoptedStyleSheets available: use it
// (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
// rendering
if(window.ShadyCSS!==undefined&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s=>s.cssText),this.localName);}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);}else {// This must be done after rendering so the actual style insertion is done
// in `update`.
this._needsShimAdoptedStyleSheets=true;}}connectedCallback(){super.connectedCallback();// Note, first update/render handles styleElement so we only call this if
// connected after first update.
if(this.hasUpdated&&window.ShadyCSS!==undefined){window.ShadyCSS.styleElement(this);}}/**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */update(changedProperties){// Setting properties in `render` should not trigger an update. Since
// updates are allowed after super.update, it's important to call `render`
// before that.
const templateResult=this.render();super.update(changedProperties);// If render is not implemented by the component, don't call lit-html render
if(templateResult!==renderNotImplemented){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this});}// When native Shadow DOM is used but adoptedStyles are not supported,
// insert styling after rendering to ensure adoptedStyles have highest
// priority.
if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=false;this.constructor._styles.forEach(s=>{const style=document.createElement('style');style.textContent=s.cssText;this.renderRoot.appendChild(style);});}}/**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */render(){return renderNotImplemented;}}/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */LitElement['finalized']=true;/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */LitElement.render=render$1;

const observedForElements=new Set();const updateRTL=()=>{const dir=document.documentElement.dir==='rtl'?document.documentElement.dir:'ltr';observedForElements.forEach(el=>{el.setAttribute('dir',dir);});};const rtlObserver=new MutationObserver(updateRTL);rtlObserver.observe(document.documentElement,{attributes:true,attributeFilter:['dir']});const canManageContentDirection=el=>typeof el.startManagingContentDirection!=='undefined'||el.tagName==='SP-THEME';function SpectrumMixin(constructor){class SlotTextObservingElement extends constructor{constructor(){super(...arguments);/**
             * @private
             */this.dir='ltr';}/**
         * @private
         */get isLTR(){return this.dir==='ltr';}connectedCallback(){if(!this.hasAttribute('dir')){let dirParent=this.assignedSlot||this.parentNode;while(dirParent!==document.documentElement&&!canManageContentDirection(dirParent)){dirParent=dirParent.assignedSlot||// step into the shadow DOM of the parent of a slotted node
dirParent.parentNode||// DOM Element detected
dirParent.host;}this.dir=dirParent.dir==='rtl'?dirParent.dir:this.dir||'ltr';if(dirParent===document.documentElement){observedForElements.add(this);}else {dirParent.startManagingContentDirection(this);}this._dirParent=dirParent;}super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();if(this._dirParent){if(this._dirParent===document.documentElement){observedForElements.delete(this);}else {this._dirParent.stopManagingContentDirection(this);}this.removeAttribute('dir');}}}__decorate([property({reflect:true})],SlotTextObservingElement.prototype,"dir",void 0);return SlotTextObservingElement;}class SpectrumElement extends SpectrumMixin(LitElement){}

function SizedMixin(constructor,{validSizes=['s','m','l','xl'],noDefaultSize}={}){class SizedElement extends constructor{constructor(){super(...arguments);this._size='m';}get size(){return this._size||'m';}set size(value){const defaultSize=noDefaultSize?null:'m';const size=value?value.toLocaleLowerCase():value;const validSize=validSizes.includes(size)?size:defaultSize;if(validSize){this.setAttribute('size',validSize);}if(this._size===validSize){return;}const oldSize=this._size;this._size=validSize;this.requestUpdate('size',oldSize);}firstUpdated(changes){super.firstUpdated(changes);if(!this.hasAttribute('size')&&!noDefaultSize){this.setAttribute('size',this.size);}}}__decorate([property({type:String,reflect:true})],SizedElement.prototype,"size",null);return SizedElement;}

const previousValues=new WeakMap();/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */const ifDefined=directive(value=>part=>{const previousValue=previousValues.get(part);if(value===undefined&&part instanceof AttributePart){// If the value is undefined, remove the attribute, but only if the value
// was previously defined.
if(previousValue!==undefined||!previousValues.has(part)){const name=part.committer.name;part.committer.element.removeAttribute(name);}}else if(value!==previousValue){part.setValue(value);}previousValues.set(part,value);});

// TODO(kschaaf): Refactor into Part API?
const createAndInsertPart=(containerPart,beforePart)=>{const container=containerPart.startNode.parentNode;const beforeNode=beforePart===undefined?containerPart.endNode:beforePart.startNode;const startNode=container.insertBefore(createMarker(),beforeNode);container.insertBefore(createMarker(),beforeNode);const newPart=new NodePart(containerPart.options);newPart.insertAfterNode(startNode);return newPart;};const updatePart=(part,value)=>{part.setValue(value);part.commit();return part;};const insertPartBefore=(containerPart,part,ref)=>{const container=containerPart.startNode.parentNode;const beforeNode=ref?ref.startNode:containerPart.endNode;const endNode=part.endNode.nextSibling;if(endNode!==beforeNode){reparentNodes(container,part.startNode,endNode,beforeNode);}};const removePart=part=>{removeNodes(part.startNode.parentNode,part.startNode,part.endNode.nextSibling);};// Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)
const generateMap=(list,start,end)=>{const map=new Map();for(let i=start;i<=end;i++){map.set(list[i],i);}return map;};// Stores previous ordered list of parts and map of key to index
const partListCache=new WeakMap();const keyListCache=new WeakMap();/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * and removals.
 *
 * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */const repeat=directive((items,keyFnOrTemplate,template)=>{let keyFn;if(template===undefined){template=keyFnOrTemplate;}else if(keyFnOrTemplate!==undefined){keyFn=keyFnOrTemplate;}return containerPart=>{if(!(containerPart instanceof NodePart)){throw new Error('repeat can only be used in text bindings');}// Old part & key lists are retrieved from the last update
// (associated with the part for this instance of the directive)
const oldParts=partListCache.get(containerPart)||[];const oldKeys=keyListCache.get(containerPart)||[];// New part list will be built up as we go (either reused from
// old parts or created for new keys in this update). This is
// saved in the above cache at the end of the update.
const newParts=[];// New value list is eagerly generated from items along with a
// parallel array indicating its key.
const newValues=[];const newKeys=[];let index=0;for(const item of items){newKeys[index]=keyFn?keyFn(item,index):index;newValues[index]=template(item,index);index++;}// Maps from key to index for current and previous update; these
// are generated lazily only when needed as a performance
// optimization, since they are only required for multiple
// non-contiguous changes in the list, which are less common.
let newKeyToIndexMap;let oldKeyToIndexMap;// Head and tail pointers to old parts and new values
let oldHead=0;let oldTail=oldParts.length-1;let newHead=0;let newTail=newValues.length-1;// Overview of O(n) reconciliation algorithm (general approach
// based on ideas found in ivi, vue, snabbdom, etc.):
//
// * We start with the list of old parts and new values (and
//   arrays of their respective keys), head/tail pointers into
//   each, and we build up the new list of parts by updating
//   (and when needed, moving) old parts or creating new ones.
//   The initial scenario might look like this (for brevity of
//   the diagrams, the numbers in the array reflect keys
//   associated with the old parts or new values, although keys
//   and parts/values are actually stored in parallel arrays
//   indexed using the same head/tail pointers):
//
//      oldHead v                 v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [ ,  ,  ,  ,  ,  ,  ]
//   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
//                                      item order
//      newHead ^                 ^ newTail
//
// * Iterate old & new lists from both sides, updating,
//   swapping, or removing parts at the head/tail locations
//   until neither head nor tail can move.
//
// * Example below: keys at head pointers match, so update old
//   part 0 in-place (no need to move it) and record part 0 in
//   the `newParts` list. The last thing we do is advance the
//   `oldHead` and `newHead` pointers (will be reflected in the
//   next diagram).
//
//      oldHead v                 v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
//                                      & newHead
//      newHead ^                 ^ newTail
//
// * Example below: head pointers don't match, but tail
//   pointers do, so update part 6 in place (no need to move
//   it), and record part 6 in the `newParts` list. Last,
//   advance the `oldTail` and `oldHead` pointers.
//
//         oldHead v              v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
//                                      & newTail
//         newHead ^              ^ newTail
//
// * If neither head nor tail match; next check if one of the
//   old head/tail items was removed. We first need to generate
//   the reverse map of new keys to index (`newKeyToIndexMap`),
//   which is done once lazily as a performance optimization,
//   since we only hit this case if multiple non-contiguous
//   changes were made. Note that for contiguous removal
//   anywhere in the list, the head and tails would advance
//   from either end and pass each other before we get to this
//   case and removals would be handled in the final while loop
//   without needing to generate the map.
//
// * Example below: The key at `oldTail` was removed (no longer
//   in the `newKeyToIndexMap`), so remove that part from the
//   DOM and advance just the `oldTail` pointer.
//
//         oldHead v           v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
//         newHead ^           ^ newTail
//
// * Once head and tail cannot move, any mismatches are due to
//   either new or moved items; if a new key is in the previous
//   "old key to old index" map, move the old part to the new
//   location, otherwise create and insert a new part. Note
//   that when moving an old part we null its position in the
//   oldParts array if it lies between the head and tail so we
//   know to skip it when the pointers get there.
//
// * Example below: neither head nor tail match, and neither
//   were removed; so find the `newHead` key in the
//   `oldKeyToIndexMap`, and move that old part's DOM into the
//   next head position (before `oldParts[oldHead]`). Last,
//   null the part in the `oldPart` array since it was
//   somewhere in the remaining oldParts still to be scanned
//   (between the head and tail pointers) so that we know to
//   skip that old part on future iterations.
//
//         oldHead v        v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
//                                      newHead
//         newHead ^           ^ newTail
//
// * Note that for moves/insertions like the one above, a part
//   inserted at the head pointer is inserted before the
//   current `oldParts[oldHead]`, and a part inserted at the
//   tail pointer is inserted before `newParts[newTail+1]`. The
//   seeming asymmetry lies in the fact that new parts are
//   moved into place outside in, so to the right of the head
//   pointer are old parts, and to the right of the tail
//   pointer are new parts.
//
// * We always restart back from the top of the algorithm,
//   allowing matching and simple updates in place to
//   continue...
//
// * Example below: the head pointers once again match, so
//   simply update part 1 and record it in the `newParts`
//   array.  Last, advance both head pointers.
//
//         oldHead v        v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
//                                      & newHead
//            newHead ^        ^ newTail
//
// * As mentioned above, items that were moved as a result of
//   being stuck (the final else clause in the code below) are
//   marked with null, so we always advance old pointers over
//   these so we're comparing the next actual old value on
//   either end.
//
// * Example below: `oldHead` is null (already placed in
//   newParts), so advance `oldHead`.
//
//            oldHead v     v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
//   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]
//               newHead ^     ^ newTail
//
// * Note it's not critical to mark old parts as null when they
//   are moved from head to tail or tail to head, since they
//   will be outside the pointer range and never visited again.
//
// * Example below: Here the old tail key matches the new head
//   key, so the part at the `oldTail` position and move its
//   DOM to the new head position (before `oldParts[oldHead]`).
//   Last, advance `oldTail` and `newHead` pointers.
//
//               oldHead v  v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
//                                     advance oldTail & newHead
//               newHead ^     ^ newTail
//
// * Example below: Old and new head keys match, so update the
//   old head part in place, and advance the `oldHead` and
//   `newHead` pointers.
//
//               oldHead v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
//                                      newHead
//                  newHead ^  ^ newTail
//
// * Once the new or old pointers move past each other then all
//   we have left is additions (if old list exhausted) or
//   removals (if new list exhausted). Those are handled in the
//   final while loops at the end.
//
// * Example below: `oldHead` exceeded `oldTail`, so we're done
//   with the main loop.  Create the remaining part and insert
//   it at the new head position, and the update is complete.
//
//                   (oldHead > oldTail)
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]
//                     newHead ^ newTail
//
// * Note that the order of the if/else clauses is not
//   important to the algorithm, as long as the null checks
//   come first (to ensure we're always working on valid old
//   parts) and that the final else clause comes last (since
//   that's where the expensive moves occur). The order of
//   remaining clauses is is just a simple guess at which cases
//   will be most common.
//
// * TODO(kschaaf) Note, we could calculate the longest
//   increasing subsequence (LIS) of old items in new position,
//   and only move those not in the LIS set. However that costs
//   O(nlogn) time and adds a bit more code, and only helps
//   make rare types of mutations require fewer moves. The
//   above handles removes, adds, reversal, swaps, and single
//   moves of contiguous items in linear time, in the minimum
//   number of moves. As the number of multiple moves where LIS
//   might help approaches a random shuffle, the LIS
//   optimization becomes less helpful, so it seems not worth
//   the code at this point. Could reconsider if a compelling
//   case arises.
while(oldHead<=oldTail&&newHead<=newTail){if(oldParts[oldHead]===null){// `null` means old part at head has already been used
// below; skip
oldHead++;}else if(oldParts[oldTail]===null){// `null` means old part at tail has already been used
// below; skip
oldTail--;}else if(oldKeys[oldHead]===newKeys[newHead]){// Old head matches new head; update in place
newParts[newHead]=updatePart(oldParts[oldHead],newValues[newHead]);oldHead++;newHead++;}else if(oldKeys[oldTail]===newKeys[newTail]){// Old tail matches new tail; update in place
newParts[newTail]=updatePart(oldParts[oldTail],newValues[newTail]);oldTail--;newTail--;}else if(oldKeys[oldHead]===newKeys[newTail]){// Old head matches new tail; update and move to new tail
newParts[newTail]=updatePart(oldParts[oldHead],newValues[newTail]);insertPartBefore(containerPart,oldParts[oldHead],newParts[newTail+1]);oldHead++;newTail--;}else if(oldKeys[oldTail]===newKeys[newHead]){// Old tail matches new head; update and move to new head
newParts[newHead]=updatePart(oldParts[oldTail],newValues[newHead]);insertPartBefore(containerPart,oldParts[oldTail],oldParts[oldHead]);oldTail--;newHead++;}else {if(newKeyToIndexMap===undefined){// Lazily generate key-to-index maps, used for removals &
// moves below
newKeyToIndexMap=generateMap(newKeys,newHead,newTail);oldKeyToIndexMap=generateMap(oldKeys,oldHead,oldTail);}if(!newKeyToIndexMap.has(oldKeys[oldHead])){// Old head is no longer in new list; remove
removePart(oldParts[oldHead]);oldHead++;}else if(!newKeyToIndexMap.has(oldKeys[oldTail])){// Old tail is no longer in new list; remove
removePart(oldParts[oldTail]);oldTail--;}else {// Any mismatches at this point are due to additions or
// moves; see if we have an old part we can reuse and move
// into place
const oldIndex=oldKeyToIndexMap.get(newKeys[newHead]);const oldPart=oldIndex!==undefined?oldParts[oldIndex]:null;if(oldPart===null){// No old part for this value; create a new one and
// insert it
const newPart=createAndInsertPart(containerPart,oldParts[oldHead]);updatePart(newPart,newValues[newHead]);newParts[newHead]=newPart;}else {// Reuse old part
newParts[newHead]=updatePart(oldPart,newValues[newHead]);insertPartBefore(containerPart,oldPart,oldParts[oldHead]);// This marks the old part as having been used, so that
// it will be skipped in the first two checks above
oldParts[oldIndex]=null;}newHead++;}}}// Add parts for any remaining new values
while(newHead<=newTail){// For all remaining additions, we insert before last new
// tail, since old pointers are no longer valid
const newPart=createAndInsertPart(containerPart,newParts[newTail+1]);updatePart(newPart,newValues[newHead]);newParts[newHead++]=newPart;}// Remove any remaining unused old parts
while(oldHead<=oldTail){const oldPart=oldParts[oldHead++];if(oldPart!==null){removePart(oldPart);}}// Save order of new parts for next round
partListCache.set(containerPart,newParts);keyListCache.set(containerPart,newKeys);};});

class ClassList{constructor(element){this.classes=new Set();this.changed=false;this.element=element;const classList=(element.getAttribute('class')||'').split(/\s+/);for(const cls of classList){this.classes.add(cls);}}add(cls){this.classes.add(cls);this.changed=true;}remove(cls){this.classes.delete(cls);this.changed=true;}commit(){if(this.changed){let classString='';this.classes.forEach(cls=>classString+=cls+' ');this.element.setAttribute('class',classString);}}}/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */const previousClassesCache=new WeakMap();/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `class` if the property value is truthy; if the property value is
 * falsey, the property name is removed from the element's `class`. For example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */const classMap=directive(classInfo=>part=>{if(!(part instanceof AttributePart)||part instanceof PropertyPart||part.committer.name!=='class'||part.committer.parts.length>1){throw new Error('The `classMap` directive must be used in the `class` attribute '+'and must be the only part in the attribute.');}const{committer}=part;const{element}=committer;let previousClasses=previousClassesCache.get(part);if(previousClasses===undefined){// Write static classes once
// Use setAttribute() because className isn't a string on SVG elements
element.setAttribute('class',committer.strings.join(' '));previousClassesCache.set(part,previousClasses=new Set());}const classList=element.classList||new ClassList(element);// Remove old classes that no longer apply
// We use forEach() instead of for-of so that re don't require down-level
// iteration.
previousClasses.forEach(name=>{if(!(name in classInfo)){classList.remove(name);previousClasses.delete(name);}});// Add or remove classes based on their classMap value
for(const name in classInfo){const value=classInfo[name];if(value!=previousClasses.has(name)){// We explicitly want a loose truthy check of `value` because it seems
// more convenient that '' and 0 are skipped.
if(value){classList.add(name);previousClasses.add(name);}else {classList.remove(name);previousClasses.delete(name);}}}if(typeof classList.commit==='function'){classList.commit();}});

/**
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */const previousStylePropertyCache=new WeakMap();/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS properties. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */const styleMap=directive(styleInfo=>part=>{if(!(part instanceof AttributePart)||part instanceof PropertyPart||part.committer.name!=='style'||part.committer.parts.length>1){throw new Error('The `styleMap` directive must be used in the style attribute '+'and must be the only part in the attribute.');}const{committer}=part;const{style}=committer.element;let previousStyleProperties=previousStylePropertyCache.get(part);if(previousStyleProperties===undefined){// Write static styles once
style.cssText=committer.strings.join(' ');previousStylePropertyCache.set(part,previousStyleProperties=new Set());}// Remove old properties that no longer exist in styleInfo
// We use forEach() instead of for-of so that re don't require down-level
// iteration.
previousStyleProperties.forEach(name=>{if(!(name in styleInfo)){previousStyleProperties.delete(name);if(name.indexOf('-')===-1){// eslint-disable-next-line @typescript-eslint/no-explicit-any
style[name]=null;}else {style.removeProperty(name);}}});// Add or update properties
for(const name in styleInfo){previousStyleProperties.add(name);if(name.indexOf('-')===-1){// eslint-disable-next-line @typescript-eslint/no-explicit-any
style[name]=styleInfo[name];}else {style.setProperty(name,styleInfo[name]);}}});

const _state=new WeakMap();// Effectively infinity, but a SMI.
const _infinity=0x7fffffff;/**
 * Renders one of a series of values, including Promises, to a Part.
 *
 * Values are rendered in priority order, with the first argument having the
 * highest priority and the last argument having the lowest priority. If a
 * value is a Promise, low-priority values will be rendered until it resolves.
 *
 * The priority of values can be used to create placeholder content for async
 * data. For example, a Promise with pending content can be the first,
 * highest-priority, argument, and a non_promise loading indicator template can
 * be used as the second, lower-priority, argument. The loading indicator will
 * render immediately, and the primary content will render when the Promise
 * resolves.
 *
 * Example:
 *
 *     const content = fetch('./content.txt').then(r => r.text());
 *     html`${until(content, html`<span>Loading...</span>`)}`
 */const until=directive((...args)=>part=>{let state=_state.get(part);if(state===undefined){state={lastRenderedIndex:_infinity,values:[]};_state.set(part,state);}const previousValues=state.values;let previousLength=previousValues.length;state.values=args;for(let i=0;i<args.length;i++){// If we've rendered a higher-priority value already, stop.
if(i>state.lastRenderedIndex){break;}const value=args[i];// Render non-Promise values immediately
if(isPrimitive(value)||typeof value.then!=='function'){part.setValue(value);state.lastRenderedIndex=i;// Since a lower-priority value will never overwrite a higher-priority
// synchronous value, we can stop processing now.
break;}// If this is a Promise we've already handled, skip it.
if(i<previousLength&&value===previousValues[i]){continue;}// We have a Promise that we haven't seen before, so priorities may have
// changed. Forget what we rendered before.
state.lastRenderedIndex=_infinity;previousLength=0;Promise.resolve(value).then(resolvedValue=>{const index=state.values.indexOf(value);// If state.values doesn't contain the value, we've re-rendered without
// the value, so don't render it. Then, only render if the value is
// higher-priority than what's already been rendered.
if(index>-1&&index<state.lastRenderedIndex){state.lastRenderedIndex=index;part.setValue(resolvedValue);part.commit();}});}});

/**
 * Checks binding values against live DOM values, instead of previously bound
 * values, when determining whether to update the value.
 *
 * This is useful for cases where the DOM value may change from outside of
 * lit-html, such as with a binding to an `<input>` element's `value` property,
 * a content editable elements text, or to a custom element that changes it's
 * own properties or attributes.
 *
 * In these cases if the DOM value changes, but the value set through lit-html
 * bindings hasn't, lit-html won't know to update the DOM value and will leave
 * it alone. If this is not what you want—if you want to overwrite the DOM
 * value with the bound value no matter what—use the `live()` directive:
 *
 *     html`<input .value=${live(x)}>`
 *
 * `live()` performs a strict equality check agains the live DOM value, and if
 * the new value is equal to the live value, does nothing. This means that
 * `live()` should not be used when the binding will cause a type conversion. If
 * you use `live()` with an attribute binding, make sure that only strings are
 * passed in, or the binding will update every render.
 */const live=directive(value=>part=>{let previousValue;if(part instanceof EventPart||part instanceof NodePart){throw new Error('The `live` directive is not allowed on text or event bindings');}if(part instanceof BooleanAttributePart){checkStrings(part.strings);previousValue=part.element.hasAttribute(part.name);// This is a hack needed because BooleanAttributePart doesn't have a
// committer and does its own dirty checking after directives
part.value=previousValue;}else {const{element,name,strings}=part.committer;checkStrings(strings);if(part instanceof PropertyPart){// eslint-disable-next-line @typescript-eslint/no-explicit-any
previousValue=element[name];if(previousValue===value){return;}}else if(part instanceof AttributePart){previousValue=element.getAttribute(name);}if(previousValue===String(value)){return;}}part.setValue(value);});const checkStrings=strings=>{if(strings.length!==2||strings[0]!==''||strings[1]!==''){throw new Error('`live` bindings can only contain a single expression');}};

let _=t=>t,_t;const styles=css(_t||(_t=_`
:host{--spectrum-splitview-vertical-width:100%;--spectrum-splitview-vertical-gripper-width:50%;--spectrum-splitview-vertical-gripper-outer-width:100%;--spectrum-splitview-vertical-gripper-reset:0;display:flex;overflow:hidden}::slotted(*){height:100%}:host([dir=ltr]) #gripper{left:calc((var(--spectrum-dragbar-gripper-width,
var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal, 3px) - var(--spectrum-dragbar-handle-width,
var(--spectrum-global-dimension-static-size-25)))/2*-1)}:host([dir=rtl]) #gripper{right:calc((var(--spectrum-dragbar-gripper-width,
var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal, 3px) - var(--spectrum-dragbar-handle-width,
var(--spectrum-global-dimension-static-size-25)))/2*-1)}#gripper{content:"";display:block;position:absolute;border-style:solid;border-radius:var(--spectrum-dragbar-gripper-border-radius,var(--spectrum-alias-border-radius-small));top:50%;transform:translateY(-50%);width:var(--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50));height:var(--spectrum-dragbar-gripper-height,var(--spectrum-global-dimension-static-size-200));border-width:var(--spectrum-dragbar-gripper-border-width-vertical,4px) var(--spectrum-dragbar-gripper-border-width-horizontal,3px)}#splitter{position:relative;-webkit-user-select:none;user-select:none;width:var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25));height:100%;z-index:1}:host([dir=ltr]) #splitter.is-collapsed-end #gripper:before,:host([dir=ltr]) #splitter.is-collapsed-start #gripper:before{left:calc(50% - var(--spectrum-dragbar-handle-width,
var(--spectrum-global-dimension-static-size-25))/2)}:host([dir=rtl]) #splitter.is-collapsed-end #gripper:before,:host([dir=rtl]) #splitter.is-collapsed-start #gripper:before{right:calc(50% - var(--spectrum-dragbar-handle-width,
var(--spectrum-global-dimension-static-size-25))/2)}#splitter.is-collapsed-end #gripper:before,#splitter.is-collapsed-start #gripper:before{content:"";position:absolute;top:0;width:var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25));height:100%}:host([dir=ltr]) #splitter.is-collapsed-start #gripper{left:0}:host([dir=ltr]) #splitter.is-collapsed-end #gripper,:host([dir=rtl]) #splitter.is-collapsed-start #gripper{right:0}:host([dir=rtl]) #splitter.is-collapsed-end #gripper{left:0}:host([dir=ltr]) #splitter.is-collapsed-end #gripper{left:auto}:host([dir=rtl]) #splitter.is-collapsed-end #gripper{right:auto}:host([vertical]){flex-direction:column}:host([vertical]) ::slotted(*){height:auto;width:var(--spectrum-splitview-vertical-width)}:host([dir=ltr][vertical]) #gripper{left:var(--spectrum-splitview-vertical-gripper-width)}:host([dir=rtl][vertical]) #gripper{right:var(--spectrum-splitview-vertical-gripper-width)}:host([vertical]) #gripper{top:calc((var(--spectrum-dragbar-gripper-width,
var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal, 3px) - var(--spectrum-dragbar-handle-width,
var(--spectrum-global-dimension-static-size-25)))/2*-1);transform:translate(calc(-1*var(--spectrum-splitview-vertical-gripper-width)));width:var(--spectrum-dragbar-gripper-height,var(--spectrum-global-dimension-static-size-200));height:var(--spectrum-dragbar-gripper-width,var(--spectrum-global-dimension-static-size-50));border-width:var(--spectrum-dragbar-gripper-border-width-horizontal,3px) var(--spectrum-dragbar-gripper-border-width-vertical,4px)}:host([vertical]) #splitter{width:var(--spectrum-splitview-vertical-width);height:var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25))}:host([dir=ltr][vertical]) #splitter.is-collapsed-end #gripper,:host([dir=ltr][vertical]) #splitter.is-collapsed-start #gripper{left:var(--spectrum-splitview-vertical-gripper-width)}:host([dir=rtl][vertical]) #splitter.is-collapsed-end #gripper,:host([dir=rtl][vertical]) #splitter.is-collapsed-start #gripper{right:var(--spectrum-splitview-vertical-gripper-width)}:host([dir=ltr][vertical]) #splitter.is-collapsed-end #gripper:before,:host([dir=ltr][vertical]) #splitter.is-collapsed-start #gripper:before{left:var(--spectrum-splitview-vertical-gripper-reset)}:host([dir=rtl][vertical]) #splitter.is-collapsed-end #gripper:before,:host([dir=rtl][vertical]) #splitter.is-collapsed-start #gripper:before{right:var(--spectrum-splitview-vertical-gripper-reset)}:host([vertical]) #splitter.is-collapsed-end #gripper:before,:host([vertical]) #splitter.is-collapsed-start #gripper:before{top:calc(var(--spectrum-splitview-vertical-gripper-width) - var(--spectrum-dragbar-handle-width,
var(--spectrum-global-dimension-static-size-25))/2);width:var(--spectrum-splitview-vertical-gripper-outer-width);height:var(--spectrum-dragbar-handle-width,var(--spectrum-global-dimension-static-size-25))}:host([vertical]) #splitter.is-collapsed-start #gripper{top:var(--spectrum-splitview-vertical-gripper-reset)}:host([vertical]) #splitter.is-collapsed-end #gripper{top:auto;bottom:var(--spectrum-splitview-vertical-gripper-reset)}::slotted(*){background-color:var(--spectrum-panel-background-color,var(--spectrum-global-color-gray-100))}#splitter{background-color:var(--spectrum-dragbar-handle-background-color,var(--spectrum-global-color-gray-300))}#gripper{border-color:var(--spectrum-dragbar-handle-background-color,var(--spectrum-global-color-gray-300))}#gripper:before{background-color:var(--spectrum-dragbar-handle-background-color,var(--spectrum-global-color-gray-300))}:host([resizable]) #splitter.is-hovered,:host([resizable]) #splitter:hover{background-color:var(--spectrum-dragbar-handle-background-color-hover,var(--spectrum-global-color-gray-400))}:host([resizable]) #splitter.is-hovered #gripper,:host([resizable]) #splitter:hover #gripper{border-color:var(--spectrum-dragbar-handle-background-color-hover,var(--spectrum-global-color-gray-400))}:host([resizable]) #splitter.is-hovered #gripper:before,:host([resizable]) #splitter:hover #gripper:before{background-color:var(--spectrum-dragbar-handle-background-color-hover,var(--spectrum-global-color-gray-400))}:host([resizable]) #splitter.is-active,:host([resizable]) #splitter:active{background-color:var(--spectrum-dragbar-handle-background-color-down,var(--spectrum-global-color-gray-800))}:host([resizable]) #splitter.is-active #gripper,:host([resizable]) #splitter:active #gripper{border-color:var(--spectrum-dragbar-handle-background-color-down,var(--spectrum-global-color-gray-800))}:host([resizable]) #splitter.is-active #gripper:before,:host([resizable]) #splitter:active #gripper:before{background-color:var(--spectrum-dragbar-handle-background-color-down,var(--spectrum-global-color-gray-800))}:host([resizable]) #splitter:focus{outline:none}:host([resizable]) #splitter.focus-visible,:host([resizable]) #splitter.focus-visible{background-color:var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400))}:host([resizable]) #splitter.focus-visible,:host([resizable]) #splitter:focus-visible{background-color:var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400))}:host([resizable]) #splitter.focus-visible #gripper,:host([resizable]) #splitter.focus-visible #gripper{border-color:var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400));box-shadow:0 0 0 1px var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400))}:host([resizable]) #splitter.focus-visible #gripper,:host([resizable]) #splitter:focus-visible #gripper{border-color:var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400));box-shadow:0 0 0 1px var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400))}:host([resizable]) #splitter.focus-visible #gripper:before,:host([resizable]) #splitter.focus-visible #gripper:before{background-color:var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400))}:host([resizable]) #splitter.focus-visible #gripper:before,:host([resizable]) #splitter:focus-visible #gripper:before{background-color:var(--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400))}:host{--spectrum-split-view-first-pane-size:50%}::slotted(*){overflow:auto}::slotted(:first-child){order:1}:host(:not([vertical])) ::slotted(:first-child:not(:last-child)){width:var(--spectrum-split-view-first-pane-size)}:host([vertical]) ::slotted(:first-child:not(:last-child)){height:var(--spectrum-split-view-first-pane-size)}::slotted(:nth-child(2)){order:3;flex:1}::slotted(:nth-child(n+3)){display:none}#splitter{order:2;height:auto}:host([resizable]) #splitter{padding:0 var(--spectrum-global-dimension-static-size-125);margin:0 calc(-1*var(--spectrum-global-dimension-static-size-125));background-clip:content-box;cursor:ew-resize}:host([vertical][resizable]) #splitter{padding:var(--spectrum-global-dimension-static-size-125) 0;margin:calc(-1*var(--spectrum-global-dimension-static-size-125)) 0;background-clip:content-box;cursor:ns-resize}:host([resizable][dir=ltr]) #splitter.is-resized-start,:host([resizable][dir=rtl]) #splitter.is-resized-end{cursor:e-resize}:host([resizable][dir=ltr]) #splitter.is-resized-end,:host([resizable][dir=rtl]) #splitter.is-resized-start{cursor:w-resize}:host([vertical][resizable]) #splitter.is-resized-start{cursor:s-resize}:host([vertical][resizable]) #splitter.is-resized-end{cursor:n-resize}:host([resizable][collapsible]) #splitter.is-resized-end,:host([resizable][collapsible]) #splitter.is-resized-start{cursor:ew-resize}:host([resizable][dir=ltr][collapsible]) #splitter.is-collapsed-start,:host([resizable][dir=rtl][collapsible]) #splitter.is-collapsed-end{cursor:e-resize}:host([resizable][dir=ltr][collapsible]) #splitter.is-collapsed-end,:host([resizable][dir=rtl][collapsible]) #splitter.is-collapsed-start{cursor:w-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-start{cursor:s-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-end{cursor:n-resize}:host([vertical][resizable][collapsible]) #splitter.is-resized-end,:host([vertical][resizable][collapsible]) #splitter.is-resized-start{cursor:ns-resize}:host([dir=ltr][resizable]) #gripper{left:calc(var(--spectrum-global-dimension-static-size-125) + (var(--spectrum-dragbar-gripper-width,
var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal, 3px) - var(--spectrum-dragbar-handle-width,
var(--spectrum-global-dimension-static-size-25)))/2*-1)}:host([dir=rtl][resizable]) #gripper{right:calc(var(--spectrum-global-dimension-static-size-125) + (var(--spectrum-dragbar-gripper-width,
var(--spectrum-global-dimension-static-size-50)) + 2*var(--spectrum-dragbar-gripper-border-width-horizontal, 3px) - var(--spectrum-dragbar-handle-width,
var(--spectrum-global-dimension-static-size-25)))/2*-1)}:host([vertical][resizable]) #gripper{margin-top:var(--spectrum-global-dimension-static-size-125);left:50%;right:50%}:host([dir=ltr][resizable]) #splitter.is-collapsed-start #gripper{left:var(--spectrum-global-dimension-static-size-125)}:host([dir=rtl][resizable]) #splitter.is-collapsed-start #gripper{right:var(--spectrum-global-dimension-static-size-125)}:host([vertical][resizable]) #splitter.is-collapsed-start #gripper{left:50%;right:50%}:host([dir=ltr][resizable]) #splitter.is-collapsed-end #gripper{left:var(--spectrum-global-dimension-static-size-25)}:host([dir=rtl][resizable]) #splitter.is-collapsed-end #gripper{right:var(--spectrum-global-dimension-static-size-25)}:host([vertical][resizable]) #splitter.is-collapsed-end #gripper{margin-top:0;top:var(--spectrum-global-dimension-static-size-25);left:50%;right:50%}
`));

let _$1=t=>t,_t$1,_t2,_t3,_t4;const DEFAULT_MAX_SIZE=3840;const SPLITTERSIZE=2;const ARROW_KEY_CHANGE_VALUE=10;const PAGEUPDOWN_KEY_CHANGE_VALUE=50;const COLLAPSE_THREASHOLD=50;/**
 * @element sp-split-view
 * @slot Two sibling elements to be sized by the element attritubes
 */class SplitView extends SpectrumElement{constructor(){super();this.vertical=false;this.resizable=false;this.collapsible=false;/** The minimum size of the primary pane */this.primaryMin=0;/** The maximum size of the primary pane */this.primaryMax=DEFAULT_MAX_SIZE;/** The minimum size of the secondary pane */this.secondaryMin=0;/** The maximum size of the secondary pane */this.secondaryMax=DEFAULT_MAX_SIZE;/** The current size of first pane of split-view */this.firstPaneSize='auto';this.enoughChildren=false;this.viewSize=0;this.offset=0;this.minPos=0;this.maxPos=DEFAULT_MAX_SIZE;const RO=window.ResizeObserver;if(RO){this.observer=new RO(()=>{this.rect=undefined;this.updateMinMax();});}}static get styles(){return [styles];}connectedCallback(){var _a;super.connectedCallback();(_a=this.observer)===null||_a===void 0?void 0:_a.observe(this);}disconnectedCallback(){var _a;(_a=this.observer)===null||_a===void 0?void 0:_a.unobserve(this);super.disconnectedCallback();}/**
     * @private
     **/get splitterSize(){if(!this._splitterSize){this._splitterSize=this.splitter&&Math.round(parseFloat(window.getComputedStyle(this.splitter).getPropertyValue(this.vertical?'height':'width')))||SPLITTERSIZE;}return this._splitterSize;}render(){const splitterClasses={'is-resized-start':this.splitterPos===this.minPos,'is-resized-end':this.splitterPos&&this.splitterPos>this.splitterSize&&this.splitterPos===this.maxPos,'is-collapsed-start':this.splitterPos===0,'is-collapsed-end':this.splitterPos&&this.splitterPos>=Math.max(this.splitterSize,this.viewSize-this.splitterSize)};return html(_t$1||(_t$1=_$1`
            <slot
                @slotchange=${0}
                style="--spectrum-split-view-first-pane-size: ${0}"
            ></slot>
            ${0}
        `),this.onContentSlotChange,this.firstPaneSize,this.enoughChildren?html(_t2||(_t2=_$1`
                      <div
                          id="splitter"
                          class=${0}
                          role="separator"
                          aria-label=${0}
                          tabindex=${0}
                          @keydown=${0}
                          @pointerdown=${0}
                          @pointerup=${0}
                      >
                          ${0}
                      </div>
                  `),classMap(splitterClasses),ifDefined(this.label||undefined),ifDefined(this.resizable?'0':undefined),this.onKeydown,this.onPointerdown,this.onPointerup,this.resizable?html(_t3||(_t3=_$1`
                                    <div id="gripper"></div>
                                `)):html(_t4||(_t4=_$1``))):nothing);}onContentSlotChange(){this.enoughChildren=this.children.length>1;this.checkResize();}onPointerdown(event){if(!this.resizable||event.button&&event.button!==0){return;}this.splitter.setPointerCapture(event.pointerId);this.onpointermove=this.onPointermove;this.offset=this.getOffset();}onPointermove(event){event.preventDefault();let pos=this.vertical||this.isLTR?this.getPosition(event)-this.offset:this.offset-this.getPosition(event);if(this.collapsible&&pos<this.minPos-COLLAPSE_THREASHOLD){pos=0;}if(this.collapsible&&pos>this.maxPos+COLLAPSE_THREASHOLD){pos=this.viewSize-this.splitterSize;}this.updatePosition(pos);}onPointerup(event){this.splitter.releasePointerCapture(event.pointerId);this.onpointermove=null;}getOffset(){if(!this.rect){this.rect=this.getBoundingClientRect();}const offsetX=this.isLTR?this.rect.left:this.rect.right;return this.vertical?this.rect.top:offsetX;}getPosition(event){return this.vertical?event.clientY:event.clientX;}movePosition(event,offset){event.preventDefault();if(this.splitterPos!==undefined){this.updatePosition(this.splitterPos+offset);}}onKeydown(event){if(!this.resizable){return;}let direction=0;const isLTRorVertical=this.isLTR||this.vertical;switch(event.key){case'Home':event.preventDefault();this.updatePosition(this.collapsible?0:this.minPos);return;case'End':event.preventDefault();this.updatePosition(this.collapsible?this.viewSize-this.splitterSize:this.maxPos);return;case'ArrowLeft':direction=isLTRorVertical?-1:1;break;case'ArrowRight':direction=isLTRorVertical?1:-1;break;case'ArrowUp':direction=this.vertical?-1:1;break;case'ArrowDown':direction=this.vertical?1:-1;break;case'PageUp':direction=this.vertical?-1:1;break;case'PageDown':direction=this.vertical?1:-1;break;}if(direction!==0){const moveBy=event.key.startsWith('Page')?PAGEUPDOWN_KEY_CHANGE_VALUE:ARROW_KEY_CHANGE_VALUE;this.movePosition(event,moveBy*direction);}}async checkResize(){if(!this.enoughChildren){return;}this.updateMinMax();if(this.splitterPos===undefined){const startPos=await this.calcStartPos();this.updatePosition(startPos);}}updateMinMax(){this.viewSize=this.vertical?this.offsetHeight:this.offsetWidth;this.minPos=Math.max(this.primaryMin,this.viewSize-this.secondaryMax);this.maxPos=Math.min(this.primaryMax,this.viewSize-Math.max(this.secondaryMin,this.splitterSize));}updatePosition(x){let pos=this.getLimitedPosition(x);if(this.collapsible&&x<=0){pos=0;}if(this.collapsible&&x>this.maxPos&&x>=this.viewSize-this.splitterSize){pos=this.viewSize-this.splitterSize;}if(pos!==this.splitterPos){this.splitterPos=pos;this.dispatchChangeEvent();}}getLimitedPosition(input){if(input<=this.minPos){return this.minPos;}if(input>=this.maxPos){return this.maxPos;}return Math.max(this.minPos,Math.min(this.maxPos,input));}async calcStartPos(){if(this.primarySize!==undefined&&/^\d+(px)?$/.test(this.primarySize)){return parseInt(this.primarySize,10);}if(this.primarySize!==undefined&&/^\d+%$/.test(this.primarySize)){return parseInt(this.primarySize,10)*this.viewSize/100;}if(this.primarySize==='auto'){this.firstPaneSize='auto';const nodes=this.paneSlot.assignedNodes({flatten:true});const firstEl=nodes.find(node=>node instanceof HTMLElement);if(typeof firstEl.updateComplete!=='undefined'){await firstEl.updateComplete;}if(firstEl){const size=window.getComputedStyle(firstEl).getPropertyValue(this.vertical?'height':'width');const size_i=parseFloat(size);if(!isNaN(size_i)){return this.getLimitedPosition(Math.ceil(size_i));}}}return this.viewSize/2;}dispatchChangeEvent(){const changeEvent=new Event('change',{bubbles:true,composed:true});this.dispatchEvent(changeEvent);}firstUpdated(changed){super.firstUpdated(changed);this.checkResize();}updated(changed){super.updated(changed);if(changed.has('splitterPos')&&this.splitterPos!==undefined&&this.enoughChildren){this.firstPaneSize=`${Math.round(this.splitterPos)}px`;}}}__decorate([property({type:Boolean,reflect:true})],SplitView.prototype,"vertical",void 0);__decorate([property({type:Boolean,reflect:true})],SplitView.prototype,"resizable",void 0);__decorate([property({type:Boolean,reflect:true})],SplitView.prototype,"collapsible",void 0);__decorate([property({type:Number,attribute:'primary-min'})],SplitView.prototype,"primaryMin",void 0);__decorate([property({type:Number,attribute:'primary-max'})],SplitView.prototype,"primaryMax",void 0);__decorate([property({type:String,attribute:'primary-size'})],SplitView.prototype,"primarySize",void 0);__decorate([property({type:Number,attribute:'secondary-min'})],SplitView.prototype,"secondaryMin",void 0);__decorate([property({type:Number,attribute:'secondary-max'})],SplitView.prototype,"secondaryMax",void 0);__decorate([property({type:Number,reflect:true,attribute:'splitter-pos'})],SplitView.prototype,"splitterPos",void 0);__decorate([property({type:String,attribute:false})],SplitView.prototype,"firstPaneSize",void 0);__decorate([property()],SplitView.prototype,"label",void 0);__decorate([property({type:Boolean,attribute:false})],SplitView.prototype,"enoughChildren",void 0);__decorate([property({type:Number})],SplitView.prototype,"viewSize",void 0);__decorate([query('slot')],SplitView.prototype,"paneSlot",void 0);__decorate([query('#splitter')],SplitView.prototype,"splitter",void 0);

customElements.define('sp-split-view',SplitView);

const observedForElements$1=new Set();const updateRTL$1=()=>{const dir=document.documentElement.dir==='rtl'?document.documentElement.dir:'ltr';observedForElements$1.forEach(el=>{el.setAttribute('dir',dir);});};const rtlObserver$1=new MutationObserver(updateRTL$1);rtlObserver$1.observe(document.documentElement,{attributes:true,attributeFilter:['dir']});const canManageContentDirection$1=el=>typeof el.startManagingContentDirection!=='undefined'||el.tagName==='SP-THEME';function SpectrumMixin$1(constructor){class SlotTextObservingElement extends constructor{constructor(){super(...arguments);/**
             * @private
             */this.dir='ltr';}/**
         * @private
         */get isLTR(){return this.dir==='ltr';}connectedCallback(){if(!this.hasAttribute('dir')){let dirParent=this.assignedSlot||this.parentNode;while(dirParent!==document.documentElement&&!canManageContentDirection$1(dirParent)){dirParent=dirParent.assignedSlot||// step into the shadow DOM of the parent of a slotted node
dirParent.parentNode||// DOM Element detected
dirParent.host;}this.dir=dirParent.dir==='rtl'?dirParent.dir:this.dir||'ltr';if(dirParent===document.documentElement){observedForElements$1.add(this);}else {dirParent.startManagingContentDirection(this);}this._dirParent=dirParent;}super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();if(this._dirParent){if(this._dirParent===document.documentElement){observedForElements$1.delete(this);}else {this._dirParent.stopManagingContentDirection(this);}this.removeAttribute('dir');}}}__decorate([property({reflect:true})],SlotTextObservingElement.prototype,"dir",void 0);return SlotTextObservingElement;}class SpectrumElement$1 extends SpectrumMixin$1(LitElement){}

function SizedMixin$1(constructor,{validSizes=['s','m','l','xl'],noDefaultSize}={}){class SizedElement extends constructor{constructor(){super(...arguments);this._size='m';}get size(){return this._size||'m';}set size(value){const defaultSize=noDefaultSize?null:'m';const size=value?value.toLocaleLowerCase():value;const validSize=validSizes.includes(size)?size:defaultSize;if(validSize){this.setAttribute('size',validSize);}if(this._size===validSize){return;}const oldSize=this._size;this._size=validSize;this.requestUpdate('size',oldSize);}firstUpdated(changes){super.firstUpdated(changes);if(!this.hasAttribute('size')&&!noDefaultSize){this.setAttribute('size',this.size);}}}__decorate([property({type:String,reflect:true})],SizedElement.prototype,"size",null);return SizedElement;}

(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory():typeof define==='function'&&define.amd?define(factory):factory();})(undefined,function(){'use strict';/**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */function applyFocusVisiblePolyfill(scope){var hadKeyboardEvent=true;var hadFocusVisibleRecently=false;var hadFocusVisibleRecentlyTimeout=null;var inputTypesAllowlist={text:true,search:true,url:true,tel:true,email:true,password:true,number:true,date:true,month:true,week:true,time:true,datetime:true,'datetime-local':true};/**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */function isValidFocusTarget(el){if(el&&el!==document&&el.nodeName!=='HTML'&&el.nodeName!=='BODY'&&'classList'in el&&'contains'in el.classList){return true;}return false;}/**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */function focusTriggersKeyboardModality(el){var type=el.type;var tagName=el.tagName;if(tagName==='INPUT'&&inputTypesAllowlist[type]&&!el.readOnly){return true;}if(tagName==='TEXTAREA'&&!el.readOnly){return true;}if(el.isContentEditable){return true;}return false;}/**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */function addFocusVisibleClass(el){if(el.classList.contains('focus-visible')){return;}el.classList.add('focus-visible');el.setAttribute('data-focus-visible-added','');}/**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */function removeFocusVisibleClass(el){if(!el.hasAttribute('data-focus-visible-added')){return;}el.classList.remove('focus-visible');el.removeAttribute('data-focus-visible-added');}/**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */function onKeyDown(e){if(e.metaKey||e.altKey||e.ctrlKey){return;}if(isValidFocusTarget(scope.activeElement)){addFocusVisibleClass(scope.activeElement);}hadKeyboardEvent=true;}/**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */function onPointerDown(e){hadKeyboardEvent=false;}/**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */function onFocus(e){// Prevent IE from focusing the document or HTML element.
if(!isValidFocusTarget(e.target)){return;}if(hadKeyboardEvent||focusTriggersKeyboardModality(e.target)){addFocusVisibleClass(e.target);}}/**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */function onBlur(e){if(!isValidFocusTarget(e.target)){return;}if(e.target.classList.contains('focus-visible')||e.target.hasAttribute('data-focus-visible-added')){// To detect a tab/window switch, we look for a blur event followed
// rapidly by a visibility change.
// If we don't see a visibility change within 100ms, it's probably a
// regular focus change.
hadFocusVisibleRecently=true;window.clearTimeout(hadFocusVisibleRecentlyTimeout);hadFocusVisibleRecentlyTimeout=window.setTimeout(function(){hadFocusVisibleRecently=false;},100);removeFocusVisibleClass(e.target);}}/**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */function onVisibilityChange(e){if(document.visibilityState==='hidden'){// If the tab becomes active again, the browser will handle calling focus
// on the element (Safari actually calls it twice).
// If this tab change caused a blur on an element with focus-visible,
// re-apply the class when the user switches back to the tab.
if(hadFocusVisibleRecently){hadKeyboardEvent=true;}addInitialPointerMoveListeners();}}/**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */function addInitialPointerMoveListeners(){document.addEventListener('mousemove',onInitialPointerMove);document.addEventListener('mousedown',onInitialPointerMove);document.addEventListener('mouseup',onInitialPointerMove);document.addEventListener('pointermove',onInitialPointerMove);document.addEventListener('pointerdown',onInitialPointerMove);document.addEventListener('pointerup',onInitialPointerMove);document.addEventListener('touchmove',onInitialPointerMove);document.addEventListener('touchstart',onInitialPointerMove);document.addEventListener('touchend',onInitialPointerMove);}function removeInitialPointerMoveListeners(){document.removeEventListener('mousemove',onInitialPointerMove);document.removeEventListener('mousedown',onInitialPointerMove);document.removeEventListener('mouseup',onInitialPointerMove);document.removeEventListener('pointermove',onInitialPointerMove);document.removeEventListener('pointerdown',onInitialPointerMove);document.removeEventListener('pointerup',onInitialPointerMove);document.removeEventListener('touchmove',onInitialPointerMove);document.removeEventListener('touchstart',onInitialPointerMove);document.removeEventListener('touchend',onInitialPointerMove);}/**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */function onInitialPointerMove(e){// Work around a Safari quirk that fires a mousemove on <html> whenever the
// window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
if(e.target.nodeName&&e.target.nodeName.toLowerCase()==='html'){return;}hadKeyboardEvent=false;removeInitialPointerMoveListeners();}// For some kinds of state, we are interested in changes at the global scope
// only. For example, global pointer input, global key presses and global
// visibility change should affect the state at every scope:
document.addEventListener('keydown',onKeyDown,true);document.addEventListener('mousedown',onPointerDown,true);document.addEventListener('pointerdown',onPointerDown,true);document.addEventListener('touchstart',onPointerDown,true);document.addEventListener('visibilitychange',onVisibilityChange,true);addInitialPointerMoveListeners();// For focus and blur, we specifically care about state changes in the local
// scope. This is because focus / blur events that originate from within a
// shadow root are not re-dispatched from the host element if it was already
// the active element in its own scope:
scope.addEventListener('focus',onFocus,true);scope.addEventListener('blur',onBlur,true);// We detect that a node is a ShadowRoot by ensuring that it is a
// DocumentFragment and also has a host property. This check covers native
// implementation and polyfill implementation transparently. If we only cared
// about the native implementation, we could just check if the scope was
// an instance of a ShadowRoot.
if(scope.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&scope.host){// Since a ShadowRoot is a special kind of DocumentFragment, it does not
// have a root element to add a class to. So, we add this attribute to the
// host element instead:
scope.host.setAttribute('data-js-focus-visible','');}else if(scope.nodeType===Node.DOCUMENT_NODE){document.documentElement.classList.add('js-focus-visible');document.documentElement.setAttribute('data-js-focus-visible','');}}// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if(typeof window!=='undefined'&&typeof document!=='undefined'){// Make the polyfill helper globally available. This can be used as a signal
// to interested libraries that wish to coordinate with the polyfill for e.g.,
// applying the polyfill to a shadow root:
window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;// Notify interested libraries of the polyfill's presence, in case the
// polyfill was loaded lazily:
var event;try{event=new CustomEvent('focus-visible-polyfill-ready');}catch(error){// IE11 does not support using CustomEvent as a constructor directly:
event=document.createEvent('CustomEvent');event.initCustomEvent('focus-visible-polyfill-ready',false,false,{});}window.dispatchEvent(event);}if(typeof document!=='undefined'){// Apply the polyfill to the global document, so that no JavaScript
// coordination is required to use the polyfill in the top-level document:
applyFocusVisiblePolyfill(document);}});

let hasFocusVisible=true;try{document.body.querySelector(':focus-visible');}catch(error){hasFocusVisible=false;}/**
 * This mixin function is designed to be applied to a class that inherits
 * from HTMLElement. It makes it easy for a custom element to coordinate with
 * the :focus-visible polyfill.
 *
 * NOTE(cdata): The code here was adapted from an example proposed with the
 * introduction of ShadowDOM support in the :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196
 * @param {Function} SuperClass The base class implementation to decorate with
 * implementation that coordinates with the :focus-visible polyfill
 */const FocusVisiblePolyfillMixin=SuperClass=>{var _a;const coordinateWithPolyfill=instance=>{// If there is no shadow root, there is no need to coordinate with
// the polyfill. If we already coordinated with the polyfill, we can
// skip subsequent invokcations:
if(instance.shadowRoot==null||instance.hasAttribute('data-js-focus-visible')){// eslint-disable-next-line @typescript-eslint/no-empty-function
return ()=>{};}// The polyfill might already be loaded. If so, we can apply it to
// the shadow root immediately:
if(self.applyFocusVisiblePolyfill){self.applyFocusVisiblePolyfill(instance.shadowRoot);if(instance.manageAutoFocus){instance.manageAutoFocus();}}else {const coordinationHandler=()=>{if(self.applyFocusVisiblePolyfill&&instance.shadowRoot){self.applyFocusVisiblePolyfill(instance.shadowRoot);}if(instance.manageAutoFocus){instance.manageAutoFocus();}};// Otherwise, wait for the polyfill to be loaded lazily. It might
// never be loaded, but if it is then we can apply it to the
// shadow root at the appropriate time by waiting for the ready
// event:
self.addEventListener('focus-visible-polyfill-ready',coordinationHandler,{once:true});return ()=>{self.removeEventListener('focus-visible-polyfill-ready',coordinationHandler);};}// eslint-disable-next-line @typescript-eslint/no-empty-function
return ()=>{};};const $endPolyfillCoordination=Symbol('endPolyfillCoordination');// IE11 doesn't natively support custom elements or JavaScript class
// syntax The mixin implementation assumes that the user will take the
// appropriate steps to support both:
class FocusVisibleCoordinator extends SuperClass{constructor(){super(...arguments);this[_a]=null;}// Attempt to coordinate with the polyfill when connected to the
// document:
connectedCallback(){super.connectedCallback&&super.connectedCallback();if(!hasFocusVisible){requestAnimationFrame(()=>{if(this[$endPolyfillCoordination]==null){this[$endPolyfillCoordination]=coordinateWithPolyfill(this);}});}}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback();// It's important to remove the polyfill event listener when we
// disconnect, otherwise we will leak the whole element via window:
if(!hasFocusVisible){requestAnimationFrame(()=>{if(this[$endPolyfillCoordination]!=null){// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
this[$endPolyfillCoordination]();this[$endPolyfillCoordination]=null;}});}}}_a=$endPolyfillCoordination;return FocusVisibleCoordinator;};

/**
 * Focusable base class handles tabindex setting into shadowed elements automatically.
 *
 * This implementation is based heavily on the aybolit delegate-focus-mixin at
 * https://github.com/web-padawan/aybolit/blob/master/packages/core/src/mixins/delegate-focus-mixin.js
 */class Focusable extends FocusVisiblePolyfillMixin(SpectrumElement$1){constructor(){super(...arguments);/**
         * Disable this control. It will not receive focus or events
         */this.disabled=false;/**
         * When this control is rendered, focus it automatically
         * @private
         */this.autofocus=false;this._tabIndex=0;this.manipulatingTabindex=false;}/**
     * The tab index to apply to this control. See general documentation about
     * the tabindex HTML property
     *
     * @private
     */get tabIndex(){if(this.focusElement===this){const tabindex=this.hasAttribute('tabindex')?Number(this.getAttribute('tabindex')):NaN;return !isNaN(tabindex)?tabindex:-1;}const tabIndexAttribute=parseFloat(this.hasAttribute('tabindex')?this.getAttribute('tabindex')||'0':'0');// When `disabled` tabindex is -1.
// When host tabindex -1, use that as the cache.
if(this.disabled||tabIndexAttribute<0){return -1;}// When `focusElement` isn't available yet,
// use host tabindex as the cache.
if(!this.focusElement){return tabIndexAttribute;}// All other times, use the tabindex of `focusElement`
// as the cache for this value.
return this.focusElement.tabIndex;}set tabIndex(tabIndex){// Flipping `manipulatingTabindex` to true before a change
// allows for that change NOT to effect the cached value of tabindex
if(this.manipulatingTabindex){this.manipulatingTabindex=false;return;}if(this.focusElement===this){if(tabIndex!==this.tabIndex){this._tabIndex=tabIndex;const tabindex=this.disabled?'-1':''+tabIndex;this.setAttribute('tabindex',tabindex);}return;}// All code paths are about to address the host tabindex without side effect.
this.manipulatingTabindex=true;if(tabIndex===-1||this.disabled){// Do not cange the tabindex of `focusElement` as it is the "old" value cache.
// Make element NOT focusable.
this.setAttribute('tabindex','-1');this.removeAttribute('focusable');if(tabIndex!==-1){// Cache all NON-`-1` values on the `focusElement`.
this.manageFocusElementTabindex(tabIndex);}return;}this.setAttribute('focusable','');if(this.hasAttribute('tabindex')){this.removeAttribute('tabindex');}else {// You can't remove an attribute that isn't there,
// manually end the `manipulatingTabindex` guard.
this.manipulatingTabindex=false;}this.manageFocusElementTabindex(tabIndex);}async manageFocusElementTabindex(tabIndex){if(!this.focusElement){// allow setting these values to be async when needed.
await this.updateComplete;}if(tabIndex===null){this.focusElement.removeAttribute('tabindex');}else {this.focusElement.tabIndex=tabIndex;}}/**
     * @private
     */get focusElement(){throw new Error('Must implement focusElement getter!');}focus(){if(this.disabled||!this.focusElement){return;}if(this.focusElement!==this){this.focusElement.focus();}else {HTMLElement.prototype.focus.apply(this);}}blur(){if(this.focusElement!==this){this.focusElement.blur();}else {HTMLElement.prototype.blur.apply(this);}}click(){if(this.disabled){return;}if(this.focusElement!==this){this.focusElement.click();}else {HTMLElement.prototype.click.apply(this);}}manageAutoFocus(){if(this.autofocus){/**
             * Trick :focus-visible polyfill into thinking keyboard based focus
             *
             * @private
             **/this.dispatchEvent(new KeyboardEvent('keydown',{code:'Tab'}));this.focusElement.focus();}}firstUpdated(changes){super.firstUpdated(changes);this.manageAutoFocus();if(!this.hasAttribute('tabindex')||this.getAttribute('tabindex')!=='-1'){this.setAttribute('focusable','');}}update(changedProperties){if(changedProperties.has('disabled')){this.handleDisabledChanged(this.disabled,changedProperties.get('disabled'));}super.update(changedProperties);}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has('disabled')&&this.disabled){this.blur();}}async handleDisabledChanged(disabled,oldDisabled){const canSetDisabled=()=>this.focusElement!==this&&typeof this.focusElement.disabled!=='undefined';if(disabled){this.manipulatingTabindex=true;this.setAttribute('tabindex','-1');await this.updateComplete;if(canSetDisabled()){this.focusElement.disabled=true;}else {this.setAttribute('aria-disabled','true');}}else if(oldDisabled){this.manipulatingTabindex=true;if(this.focusElement===this){this.setAttribute('tabindex',''+this._tabIndex);}else {this.removeAttribute('tabindex');}await this.updateComplete;if(canSetDisabled()){this.focusElement.disabled=false;}else {this.removeAttribute('aria-disabled');}}}}__decorate([property({type:Boolean,reflect:true})],Focusable.prototype,"disabled",void 0);__decorate([property({type:Boolean})],Focusable.prototype,"autofocus",void 0);__decorate([property({type:Number})],Focusable.prototype,"tabIndex",null);

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/const getActiveElement=el=>{return el.getRootNode().activeElement;};

let _$2=t=>t,_t$2,_t2$1;function LikeAnchor(constructor){class LikeAnchorElement extends constructor{renderAnchor({id,className,// prettier-ignore
anchorContent=html(_t$2||(_t$2=_$2`<slot></slot>`))}){// prettier-ignore
return html(_t2$1||(_t2$1=_$2`<a
                    id=${0}
                    class=${0}
                    href=${0}
                    download=${0}
                    target=${0}
                    aria-label=${0}
                    rel=${0}
                >${0}</a>`),id,ifDefined(className),ifDefined(this.href),ifDefined(this.download),ifDefined(this.target),ifDefined(this.label),ifDefined(this.rel),anchorContent);}}__decorate([property({reflect:true})],LikeAnchorElement.prototype,"download",void 0);__decorate([property()],LikeAnchorElement.prototype,"label",void 0);__decorate([property({reflect:true})],LikeAnchorElement.prototype,"href",void 0);__decorate([property({reflect:true})],LikeAnchorElement.prototype,"target",void 0);__decorate([property({reflect:true})],LikeAnchorElement.prototype,"rel",void 0);return LikeAnchorElement;}

const slotElementObserver=Symbol('slotElementObserver');const startObserving=Symbol('startObserving');const slotContentIsPresent=Symbol('slotContentIsPresent');function ObserveSlotPresence(constructor,lightDomSelector){var _a;const lightDomSelectors=Array.isArray(lightDomSelector)?lightDomSelector:[lightDomSelector];class SlotPresenceObservingElement extends constructor{constructor(){super(...arguments);this[_a]=new Map();this.managePresenceObservedSlot=()=>{lightDomSelectors.forEach(selector=>{this[slotContentIsPresent].set(selector,!!this.querySelector(selector));});this.requestUpdate();};}/**
         *  @private
         */get slotContentIsPresent(){if(lightDomSelectors.length===1){return this[slotContentIsPresent].get(lightDomSelectors[0])||false;}else {throw new Error('Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.');}}getSlotContentPresence(selector){if(this[slotContentIsPresent].has(selector)){return this[slotContentIsPresent].get(selector)||false;}throw new Error(`The provided selector \`\` is not being observed.`);}[(_a=slotContentIsPresent,startObserving)](){const config={childList:true,subtree:true};if(!this[slotElementObserver]){this[slotElementObserver]=new MutationObserver(this.managePresenceObservedSlot);}this[slotElementObserver].observe(this,config);this.managePresenceObservedSlot();}connectedCallback(){super.connectedCallback();this[startObserving]();}disconnectedCallback(){this[slotElementObserver].disconnect();super.disconnectedCallback();}}return SlotPresenceObservingElement;}

const slotElementObserver$1=Symbol('slotElementObserver');const assignedNodesList=Symbol('assignedNodes');const startObserving$1=Symbol('startObserving');function ObserveSlotText(constructor,slotSelector){var _a;class SlotTextObservingElement extends constructor{constructor(){super(...arguments);this.slotHasContent=false;}manageTextObservedSlot(){if(!this[assignedNodesList])return;const assignedNodes=[...this[assignedNodesList]].filter(node=>{if(node.tagName){return true;}return node.textContent?node.textContent.trim():false;});this.slotHasContent=assignedNodes.length>0;}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.manageTextObservedSlot();}[(_a=assignedNodesList,startObserving$1)](){const config={characterData:true,subtree:true};if(!this[slotElementObserver$1]){const callback=mutationsList=>{for(const mutation of mutationsList){if(mutation.type==='characterData'){this.manageTextObservedSlot();}}};this[slotElementObserver$1]=new MutationObserver(callback);}this[slotElementObserver$1].observe(this,config);}connectedCallback(){super.connectedCallback();this[startObserving$1]();}disconnectedCallback(){if(this[slotElementObserver$1]){this[slotElementObserver$1].disconnect();}super.disconnectedCallback();}}__decorate([property({type:Boolean,attribute:false})],SlotTextObservingElement.prototype,"slotHasContent",void 0);__decorate([queryAssignedNodes(slotSelector,true)],SlotTextObservingElement.prototype,_a,void 0);return SlotTextObservingElement;}

function restoreChildren(placeholderItems,srcElements){for(let index=0;index<srcElements.length;++index){const srcElement=srcElements[index];const placeholderItem=placeholderItems[index];const parentElement=placeholderItem.parentElement||placeholderItem.getRootNode();parentElement.replaceChild(srcElement,placeholderItem);delete placeholderItems[index];}}const reparentChildren=(srcElements,newParent)=>{let placeholderItems=[];for(let index=0;index<srcElements.length;++index){const placeholderItem=document.createComment('placeholder for reparented element');placeholderItems.push(placeholderItem);const srcElement=srcElements[index];const parentElement=srcElement.parentElement||srcElement.getRootNode();parentElement.replaceChild(placeholderItem,srcElement);newParent.append(srcElement);}return function(){restoreChildren(placeholderItems,srcElements);};};

let _$3=t=>t,_t$3;const styles$1=css(_t$3||(_t$3=_$3`
:host{--spectrum-tabs-focus-ring-border-radius:var(--spectrum-tabs-m-focus-ring-border-radius);--spectrum-tabs-compact-item-height:var(--spectrum-tabs-m-compact-item-height,var(--spectrum-alias-item-height-m));--spectrum-tabs-compact-vertical-item-height:var(--spectrum-tabs-m-compact-vertical-item-height,var(--spectrum-global-dimension-size-400));--spectrum-tabs-compact-vertical-item-gap:var(--spectrum-tabs-m-compact-vertical-item-gap,var(--spectrum-global-dimension-size-50));--spectrum-tabs-text-font-weight:var(--spectrum-tabs-m-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-tabs-rule-border-radius:var(--spectrum-tabs-m-rule-border-radius,var(--spectrum-global-dimension-static-size-10));--spectrum-tabs-rule-size:var(--spectrum-tabs-m-rule-size,var(--spectrum-alias-border-size-thick));--spectrum-tabs-focus-ring-size:var(--spectrum-tabs-m-focus-ring-size,var(--spectrum-alias-border-size-thick));--spectrum-tabs-text-size:var(--spectrum-tabs-m-text-size,var(--spectrum-alias-item-text-size-m));--spectrum-tabs-height:var(--spectrum-tabs-m-height,var(--spectrum-global-dimension-size-600));--spectrum-tabs-item-height:var(--spectrum-tabs-m-item-height,var(--spectrum-alias-item-height-m));--spectrum-tabs-icon-gap:var(--spectrum-tabs-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m));--spectrum-tabs-focus-ring-height:var(--spectrum-tabs-m-focus-ring-height,var(--spectrum-alias-item-height-m));--spectrum-tabs-focus-ring-padding-x:var(--spectrum-tabs-m-focus-ring-padding-x,var(--spectrum-alias-item-padding-m));--spectrum-tabs-item-gap:var(--spectrum-tabs-m-item-gap,var(--spectrum-global-dimension-size-300));--spectrum-tabs-selection-indicator-animation-duration:var(--spectrum-tabs-m-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100));--spectrum-tabs-vertical-rule-size:var(--spectrum-tabs-m-vertical-rule-size,var(--spectrum-alias-border-size-thick));--spectrum-tabs-vertical-item-height:var(--spectrum-tabs-m-vertical-item-height,var(--spectrum-global-dimension-size-550));--spectrum-tabs-vertical-item-gap:var(--spectrum-tabs-m-vertical-item-gap,var(--spectrum-global-dimension-size-50));--spectrum-tabs-vertical-item-margin-left:var(--spectrum-tabs-m-vertical-item-margin-left,var(--spectrum-global-dimension-size-150));--spectrum-tabs-quiet-compact-height:var(--spectrum-tabs-quiet-m-compact-height,var(--spectrum-alias-item-height-m));--spectrum-tabs-item-height:calc(var(--spectrum-tabs-height) - var(--spectrum-tabs-rule-size));--spectrum-tabs-compact-item-height:calc(var(--spectrum-tabs-quiet-compact-height) - var(--spectrum-tabs-rule-size));--spectrum-tabs-text-size:var(--spectrum-alias-font-size-default,var(--spectrum-global-dimension-font-size-100));display:flex;position:relative;z-index:0;margin:0;padding-top:0;padding-bottom:0;padding-left:var(--spectrum-tabs-focus-ring-padding-x);padding-right:var(--spectrum-tabs-focus-ring-padding-x);vertical-align:top}:host([dir=ltr]) ::slotted(*):before{left:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=ltr]) ::slotted(*):before,:host([dir=rtl]) ::slotted(*):before{right:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=rtl]) ::slotted(*):before{left:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=ltr]) #selectionIndicator{left:0}:host([dir=rtl]) #selectionIndicator{right:0}#selectionIndicator{position:absolute;z-index:0;transition:transform var(--spectrum-tabs-selection-indicator-animation-duration) ease-in-out;transform-origin:top left;border-radius:var(--spectrum-tabs-rule-border-radius)}:host([compact]) ::slotted(*){line-height:var(--spectrum-tabs-compact-item-height);height:var(--spectrum-tabs-compact-item-height)}:host([direction=horizontal]){align-items:center;border-bottom:var(--spectrum-tabs-rule-size) solid}:host([direction=horizontal]) ::slotted(*){vertical-align:top}:host([dir=ltr][direction=horizontal]) ::slotted(:not(:first-child)){margin-left:var(--spectrum-tabs-item-gap)}:host([dir=rtl][direction=horizontal]) ::slotted(:not(:first-child)){margin-right:var(--spectrum-tabs-item-gap)}:host([direction=horizontal]) #selectionIndicator{position:absolute;bottom:0;height:var(--spectrum-tabs-rule-size);bottom:calc(-1*var(--spectrum-tabs-rule-size))}:host([direction=horizontal][compact]){box-sizing:initial;height:var(--spectrum-tabs-compact-item-height);align-items:end}:host([quiet]){display:inline-flex}:host([dir=ltr][direction=vertical]){border-left:var(--spectrum-tabs-vertical-rule-size) solid}:host([dir=rtl][direction=vertical]){border-right:var(--spectrum-tabs-vertical-rule-size) solid}:host([direction=vertical]){display:inline-flex;flex-direction:column;padding:0}:host([dir=ltr][direction=vertical]) ::slotted(*){margin-left:calc(var(--spectrum-tabs-vertical-item-margin-left) - var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=rtl][direction=vertical]) ::slotted(*){margin-right:calc(var(--spectrum-tabs-vertical-item-margin-left) - var(--spectrum-tabs-focus-ring-padding-x))}:host([direction=vertical]) ::slotted(*){height:var(--spectrum-tabs-vertical-item-height);padding-top:0;padding-bottom:0;padding-left:var(--spectrum-tabs-focus-ring-padding-x);padding-right:var(--spectrum-tabs-focus-ring-padding-x);margin-bottom:var(--spectrum-tabs-vertical-item-gap)}:host([dir=ltr][direction=vertical]) ::slotted(*):before{left:calc(-1*var(--spectrum-tabs-focus-ring-size))}:host([dir=ltr][direction=vertical]) ::slotted(*):before,:host([dir=rtl][direction=vertical]) ::slotted(*):before{right:calc(-1*var(--spectrum-tabs-focus-ring-size))}:host([dir=rtl][direction=vertical]) ::slotted(*):before{left:calc(-1*var(--spectrum-tabs-focus-ring-size))}:host([direction=vertical]) ::slotted(*):before{margin-top:calc(var(--spectrum-tabs-focus-ring-height)/-2)}:host([direction=vertical][compact]) ::slotted(*){height:var(--spectrum-tabs-compact-vertical-item-height);line-height:var(--spectrum-tabs-compact-vertical-item-height);margin-bottom:var(--spectrum-tabs-compact-vertical-item-gap)}:host([dir=ltr][direction=vertical]) #selectionIndicator{left:0}:host([dir=rtl][direction=vertical]) #selectionIndicator{right:0}:host([dir=ltr][direction=vertical]) #selectionIndicator{left:calc(-1*var(--spectrum-tabs-vertical-rule-size))}:host([dir=rtl][direction=vertical]) #selectionIndicator{right:calc(-1*var(--spectrum-tabs-vertical-rule-size))}:host([direction=vertical]) #selectionIndicator{position:absolute;width:var(--spectrum-tabs-vertical-rule-size)}:host{border-bottom-color:var(--spectrum-tabs-m-rule-color,var(--spectrum-alias-border-color-light))}:host([dir=ltr][direction=vertical]){border-left-color:var(--spectrum-tabs-m-vertical-rule-color,var(--spectrum-alias-border-color-light))}:host([dir=rtl][direction=vertical]){border-right-color:var(--spectrum-tabs-m-vertical-rule-color,var(--spectrum-alias-border-color-light))}#selectionIndicator{background-color:var(--spectrum-tabs-m-selection-indicator-color,var(--spectrum-global-color-gray-900))}:host([quiet]){border-bottom-color:var(--spectrum-tabs-quiet-m-rule-color,var(--spectrum-alias-border-color-transparent))}:host([quiet]) #selectionIndicator{background-color:var(--spectrum-tabs-quiet-m-selection-indicator-color,var(--spectrum-global-color-gray-900))}:host([dir=ltr][direction=vertical][compact]),:host([dir=ltr][direction=vertical][quiet]){border-left-color:var(--spectrum-tabs-quiet-m-vertical-rule-color,var(--spectrum-alias-border-color-transparent))}:host([dir=rtl][direction=vertical][compact]),:host([dir=rtl][direction=vertical][quiet]){border-right-color:var(--spectrum-tabs-quiet-m-vertical-rule-color,var(--spectrum-alias-border-color-transparent))}:host([direction=vertical][compact]) #selectionIndicator,:host([direction=vertical][quiet]) #selectionIndicator{background-color:var(--spectrum-tabs-quiet-m-selection-indicator-color,var(--spectrum-global-color-gray-900))}:host([direction=vertical-right]) #selectionIndicator,:host([direction=vertical]) #selectionIndicator{top:0;height:1px}:host([compact]){--spectrum-tabs-height:var(--spectrum-tabs-quiet-compact-height)}:host([direction=horizontal]:not([quiet])){border-bottom-color:var(--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200))}:host([dir][direction=horizontal]) #selectionIndicator{width:1px;left:0;right:auto}:host([dir=ltr][direction=vertical-right]){display:inline-flex;flex-direction:column;padding:0;border-right:var(--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)) solid;border-right-color:var(--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200))}:host([dir=rtl][direction=vertical-right]){display:inline-flex;flex-direction:column;padding:0;border-left:var(--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)) solid;border-left-color:var(--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200))}:host([dir=ltr][direction=vertical-right]) ::slotted(*){margin-right:calc(var(--spectrum-tabs-vertical-item-margin-left,
var(--spectrum-global-dimension-size-150)) - var(--spectrum-tabs-focus-ring-padding-x,
var(--spectrum-global-dimension-size-100)))}:host([dir=ltr][direction=vertical-right]) ::slotted(*),:host([dir=rtl][direction=vertical-right]) ::slotted(*){height:var(--spectrum-tabs-vertical-item-height,var(--spectrum-global-dimension-size-550));padding:0 var(--spectrum-tabs-focus-ring-padding-x,var(--spectrum-global-dimension-size-100));margin-bottom:var(--spectrum-tabs-vertical-item-gap,var(--spectrum-global-dimension-size-50))}:host([dir=rtl][direction=vertical-right]) ::slotted(*){margin-left:calc(var(--spectrum-tabs-vertical-item-margin-left,
var(--spectrum-global-dimension-size-150)) - var(--spectrum-tabs-focus-ring-padding-x,
var(--spectrum-global-dimension-size-100)))}:host([direction=vertical-right][compact]) ::slotted(*){line-height:var(--spectrum-tabs-compact-vertical-item-height,var(--spectrum-global-dimension-size-400));margin-bottom:var(--spectrum-tabs-compact-vertical-item-gap,var(--spectrum-global-dimension-size-50));height:var(--spectrum-tabs-compact-vertical-item-height,var(--spectrum-global-dimension-size-400))}:host([dir=ltr][direction=vertical-right]) #selectionIndicator{position:absolute;left:auto;width:var(--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick));right:calc(-1*var(--spectrum-tabs-vertical-rule-width, var(--spectrum-alias-border-size-thick)))}:host([dir=rtl][direction=vertical-right]) #selectionIndicator{position:absolute;right:auto;width:var(--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick));left:calc(-1*var(--spectrum-tabs-vertical-rule-width, var(--spectrum-alias-border-size-thick)))}:host([dir=ltr][direction=vertical-right][compact]),:host([dir=ltr][direction=vertical-right][quiet]){border-right-color:var(--spectrum-tabs-quiet-vertical-rule-color,var(--spectrum-alias-border-color-transparent))}:host([dir=rtl][direction=vertical-right][compact]),:host([dir=rtl][direction=vertical-right][quiet]){border-left-color:var(--spectrum-tabs-quiet-vertical-rule-color,var(--spectrum-alias-border-color-transparent))}:host([direction=vertical-right][compact]) #selectionIndicator,:host([direction=vertical-right][quiet]) #selectionIndicator{background-color:var(--spectrum-tabs-quiet-selection-indicator-color,var(--spectrum-global-color-gray-900))}
`));

let _$4=t=>t,_t$4;const availableArrowsByDirection={vertical:['ArrowUp','ArrowDown'],['vertical-right']:['ArrowUp','ArrowDown'],horizontal:['ArrowLeft','ArrowRight']};/**
 * @slot - Child tab elements
 * @attr {Boolean} quiet - The tabs border is a lot smaller
 * @attr {Boolean} compact - The collection of tabs take up less space
 */class Tabs extends Focusable{constructor(){super();this.direction='horizontal';this.selectionIndicatorStyle='';this._selected='';this.tabs=[];/**
         * This will force apply the focus visible styling.
         * It should always do so when this styling is already applied.
         */this.shouldApplyFocusVisible=false;this.manageFocusinType=()=>{if(this.shouldApplyFocusVisible){return;}const handleFocusin=()=>{this.shouldApplyFocusVisible=false;this.removeEventListener('focusin',handleFocusin);};this.addEventListener('focusin',handleFocusin);};this.startListeningToKeyboard=()=>{this.addEventListener('keydown',this.handleKeydown);this.shouldApplyFocusVisible=true;const selected=this.querySelector('[selected]');if(selected){selected.tabIndex=-1;}const stopListeningToKeyboard=()=>{this.removeEventListener('keydown',this.handleKeydown);this.shouldApplyFocusVisible=false;const selected=this.querySelector('[selected]');if(selected){selected.tabIndex=0;}this.removeEventListener('focusout',stopListeningToKeyboard);};this.addEventListener('focusout',stopListeningToKeyboard);};this.onClick=event=>{const target=event.target;this.selectTarget(target);if(this.shouldApplyFocusVisible&&event.composedPath()[0]!==this){/* Trick :focus-visible polyfill into thinking keyboard based focus */this.dispatchEvent(new KeyboardEvent('keydown',{code:'Tab'}));target.focus();}};this.onKeyDown=event=>{if(event.code==='Enter'||event.code==='Space'){event.preventDefault();const target=event.target;if(target){this.selectTarget(target);}}};this.updateCheckedState=()=>{if(!this.tabs.length){this.tabs=[...this.querySelectorAll('[role="tab"]')];}this.tabs.forEach(element=>{element.removeAttribute('selected');});if(this.selected){const currentChecked=this.tabs.find(el=>el.value===this.selected);if(currentChecked){currentChecked.selected=true;}else {this.selected='';}}else {const firstTab=this.tabs[0];if(firstTab){firstTab.setAttribute('tabindex','0');}}this.updateSelectionIndicator();this.tabChangeResolver();};this.updateSelectionIndicator=async()=>{const selectedElement=this.tabs.find(el=>el.selected);if(!selectedElement){this.selectionIndicatorStyle=`transform: translateX(0px) scaleX(0) scaleY(0);`;return;}await Promise.all([selectedElement.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const tabBoundingClientRect=selectedElement.getBoundingClientRect();const parentBoundingClientRect=this.getBoundingClientRect();if(this.direction==='horizontal'){const width=tabBoundingClientRect.width;const offset=tabBoundingClientRect.left-parentBoundingClientRect.left;this.selectionIndicatorStyle=`transform: translateX(${offset}px) scaleX(${width});`;}else {const height=tabBoundingClientRect.height;const offset=tabBoundingClientRect.top-parentBoundingClientRect.top;this.selectionIndicatorStyle=`transform: translateY(${offset}px) scaleY(${height});`;}};this.tabChangePromise=Promise.resolve();this.tabChangeResolver=function(){return;};// These can be added as @click and @keydown handlers on the
// slot once we no longer need web component polyfills
this.addEventListener('click',this.onClick);this.addEventListener('keydown',this.onKeyDown);}static get styles(){return [styles$1];}get selected(){return this._selected;}set selected(value){const oldValue=this.selected;if(value===oldValue){return;}this._selected=value;this.shouldUpdateCheckedState();this.requestUpdate('selected',oldValue);}get focusElement(){const focusElement=this.tabs.find(tab=>tab.selected||tab.value===this.selected);if(focusElement){return focusElement;}return this.tabs[0];}manageAutoFocus(){const tabs=[...this.children];const tabUpdateCompletes=tabs.map(tab=>{if(typeof tab.updateComplete!=='undefined'){return tab.updateComplete;}return Promise.resolve();});Promise.all(tabUpdateCompletes).then(()=>super.manageAutoFocus());}render(){return html(_t$4||(_t$4=_$4`
            <slot @slotchange=${0}></slot>
            <div
                id="selectionIndicator"
                style=${0}
            ></div>
        `),this.onSlotChange,this.selectionIndicatorStyle);}firstUpdated(changes){super.firstUpdated(changes);this.setAttribute('role','tablist');this.addEventListener('mousedown',this.manageFocusinType);this.addEventListener('focusin',this.startListeningToKeyboard);const selectedChild=this.querySelector('[selected]');if(selectedChild){this.selectTarget(selectedChild);}}updated(changes){super.updated(changes);if(changes.has('direction')){if(this.direction==='horizontal'){this.removeAttribute('aria-orientation');}else {this.setAttribute('aria-orientation','vertical');}}if(changes.has('dir')){this.updateSelectionIndicator();}}handleKeydown(event){const{code}=event;const availableArrows=[...availableArrowsByDirection[this.direction]];if(!availableArrows.includes(code)){return;}if(!this.isLTR&&this.direction==='horizontal'){availableArrows.reverse();}event.preventDefault();const currentFocusedTab=getActiveElement(this);let currentFocusedTabIndex=this.tabs.indexOf(currentFocusedTab);currentFocusedTabIndex+=code===availableArrows[0]?-1:1;this.tabs[(currentFocusedTabIndex+this.tabs.length)%this.tabs.length].focus();}selectTarget(target){const value=target.getAttribute('value');if(value){const selected=this.selected;this.selected=value;const applyDefault=this.dispatchEvent(new Event('change',{cancelable:true}));if(!applyDefault){this.selected=selected;}}}onSlotChange(){this.tabs=[...this.querySelectorAll('[role="tab"]')];this.shouldUpdateCheckedState();}shouldUpdateCheckedState(){this.tabChangeResolver();this.tabChangePromise=new Promise(res=>this.tabChangeResolver=res);setTimeout(this.updateCheckedState);}async _getUpdateComplete(){await super._getUpdateComplete();await this.tabChangePromise;}connectedCallback(){super.connectedCallback();window.addEventListener('resize',this.updateSelectionIndicator);if('fonts'in document){document.fonts.addEventListener('loadingdone',this.updateSelectionIndicator);}}disconnectedCallback(){window.removeEventListener('resize',this.updateSelectionIndicator);if('fonts'in document){document.fonts.removeEventListener('loadingdone',this.updateSelectionIndicator);}super.disconnectedCallback();}}__decorate([property({reflect:true})],Tabs.prototype,"direction",void 0);__decorate([property()],Tabs.prototype,"selectionIndicatorStyle",void 0);__decorate([property({reflect:true})],Tabs.prototype,"selected",null);

customElements.define('sp-tabs',Tabs);

let _$5=t=>t,_t$5;const styles$2=css(_t$5||(_t$5=_$5`
:host{position:relative;box-sizing:border-box;height:var(--spectrum-tabs-item-height);line-height:var(--spectrum-tabs-item-height);z-index:1;text-decoration:none;white-space:nowrap;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;cursor:pointer;outline:none}:host([disabled]),:host([disabled]) #itemLabel{cursor:default}:host(:not([vertical])) ::slotted([slot=icon]){height:var(--spectrum-tabs-item-height)}:host([dir=ltr]) slot[name=icon]+#itemLabel{margin-left:calc(var(--spectrum-tabs-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=rtl]) slot[name=icon]+#itemLabel{margin-right:calc(var(--spectrum-tabs-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=ltr]):before{left:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=ltr]):before,:host([dir=rtl]):before{right:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host([dir=rtl]):before{left:calc(-1*var(--spectrum-tabs-focus-ring-padding-x))}:host:before{content:"";position:absolute;top:50%;box-sizing:border-box;height:var(--spectrum-tabs-focus-ring-height);margin-top:calc(var(--spectrum-tabs-focus-ring-height)/-2 + var(--spectrum-tabs-rule-size)/2);border:var(--spectrum-tabs-focus-ring-size) solid transparent;border-radius:var(--spectrum-tabs-focus-ring-border-radius);pointer-events:none}#itemLabel{cursor:pointer;vertical-align:top;display:inline-block;font-size:var(--spectrum-tabs-text-size);font-weight:var(--spectrum-tabs-text-font-weight);text-decoration:none}#itemLabel:empty{display:none}:host{color:var(--spectrum-tabs-m-text-color,var(--spectrum-alias-label-text-color))}:host(:not([vertical])) ::slotted([slot=icon]){color:var(--spectrum-tabs-m-icon-color,var(--spectrum-alias-icon-color))}:host(:hover){color:var(--spectrum-tabs-m-text-color-hover,var(--spectrum-alias-text-color-hover))}:host(:hover) ::slotted([slot=icon]){color:var(--spectrum-tabs-m-icon-color-hover,var(--spectrum-alias-icon-color-hover))}:host([selected]){color:var(--spectrum-tabs-m-text-color-selected,var(--spectrum-global-color-gray-900))}:host([selected]) ::slotted([slot=icon]){color:var(--spectrum-tabs-m-icon-color-selected,var(--spectrum-global-color-gray-900))}:host(.focus-visible),:host(.focus-visible){color:var(--spectrum-tabs-m-text-color-key-focus,var(--spectrum-alias-text-color-hover))}:host(.focus-visible),:host(:focus-visible){color:var(--spectrum-tabs-m-text-color-key-focus,var(--spectrum-alias-text-color-hover))}:host(.focus-visible):before,:host(.focus-visible):before{border-color:var(--spectrum-tabs-m-focus-ring-color,var(--spectrum-alias-border-color-focus))}:host(.focus-visible):before,:host(:focus-visible):before{border-color:var(--spectrum-tabs-m-focus-ring-color,var(--spectrum-alias-border-color-focus))}:host(.focus-visible) ::slotted([slot=icon]),:host(.focus-visible) ::slotted([slot=icon]){color:var(--spectrum-tabs-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host(.focus-visible) ::slotted([slot=icon]),:host(:focus-visible) ::slotted([slot=icon]){color:var(--spectrum-tabs-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host([disabled]){color:var(--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled))}:host([disabled]) ::slotted([slot=icon]){color:var(--spectrum-tabs-m-icon-color-disabled,var(--spectrum-alias-icon-color-disabled))}:host([vertical]){display:flex;flex-direction:column;justify-content:center;align-items:center;height:auto!important;--sp-tab-vertial-margin-y:calc((var(--spectrum-tabs-vertical-item-height,
var(--spectrum-global-dimension-size-550)) - var(--spectrum-tabs-focus-ring-height,
var(--spectrum-alias-single-line-height)))/2)}:host([vertical]):before{left:calc(-1*var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick)));right:calc(-1*var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick)));height:auto;margin-top:0!important;top:0;bottom:0}:host([vertical]) ::slotted([slot=icon]){margin-top:var(--sp-tab-vertial-margin-y);flex-shrink:0}:host([dir][vertical]) slot[name=icon]+#itemLabel{font-size:var(--spectrum-tabs-text-size,var(--spectrum-alias-font-size-default));font-weight:var(--spectrum-tabs-text-font-weight,var(--spectrum-alias-body-text-font-weight));line-height:1;margin:var(--sp-tab-vertial-margin-y) 0}#itemLabel[hidden]{display:none}
`));

let _$6=t=>t,_t$6,_t2$2,_t3$1,_t4$1,_t5;/**
 * @slot icon - The icon that appears on the left of the label
 */class Tab extends FocusVisiblePolyfillMixin(ObserveSlotText(ObserveSlotPresence(SpectrumElement$1,'[slot="icon"]'),'')){constructor(){super(...arguments);this.label='';this.selected=false;this.vertical=false;this.value='';}static get styles(){return [styles$2];}get hasIcon(){return this.slotContentIsPresent;}get hasLabel(){return !!this.label||this.slotHasContent;}render(){return html(_t$6||(_t$6=_$6`
            ${0}
            <label id="itemLabel" ?hidden=${0}>
                ${0}
            </label>
        `),this.hasIcon?html(_t2$2||(_t2$2=_$6`
                      <slot name="icon"></slot>
                  `)):html(_t3$1||(_t3$1=_$6``)),!this.hasLabel,!this.slotHasContent?html(_t4$1||(_t4$1=_$6`
                          ${0}
                          <slot></slot>
                      `),this.label):html(_t5||(_t5=_$6`
                          <slot>${0}</slot>
                      `),this.label));}firstUpdated(changes){super.firstUpdated(changes);this.setAttribute('role','tab');}updated(changes){super.updated(changes);if(changes.has('selected')){this.setAttribute('aria-selected',this.selected?'true':'false');this.setAttribute('tabindex',this.selected?'0':'-1');}}}__decorate([property({reflect:true})],Tab.prototype,"label",void 0);__decorate([property({type:Boolean,reflect:true})],Tab.prototype,"selected",void 0);__decorate([property({type:Boolean,reflect:true})],Tab.prototype,"vertical",void 0);__decorate([property({type:String,reflect:true})],Tab.prototype,"value",void 0);

customElements.define('sp-tab',Tab);

const observedForElements$2=new Set();const updateRTL$2=()=>{const dir=document.documentElement.dir==='rtl'?document.documentElement.dir:'ltr';observedForElements$2.forEach(el=>{el.setAttribute('dir',dir);});};const rtlObserver$2=new MutationObserver(updateRTL$2);rtlObserver$2.observe(document.documentElement,{attributes:true,attributeFilter:['dir']});const canManageContentDirection$2=el=>typeof el.startManagingContentDirection!=='undefined'||el.tagName==='SP-THEME';function SpectrumMixin$2(constructor){class SlotTextObservingElement extends constructor{constructor(){super(...arguments);/**
             * @private
             */this.dir='ltr';}/**
         * @private
         */get isLTR(){return this.dir==='ltr';}connectedCallback(){if(!this.hasAttribute('dir')){let dirParent=this.assignedSlot||this.parentNode;while(dirParent!==document.documentElement&&!canManageContentDirection$2(dirParent)){dirParent=dirParent.assignedSlot||// step into the shadow DOM of the parent of a slotted node
dirParent.parentNode||// DOM Element detected
dirParent.host;}this.dir=dirParent.dir==='rtl'?dirParent.dir:this.dir||'ltr';if(dirParent===document.documentElement){observedForElements$2.add(this);}else {const{localName}=dirParent;if(localName.search('-')>-1&&!customElements.get(localName)){customElements.whenDefined(localName).then(()=>{dirParent.startManagingContentDirection(this);});}else {dirParent.startManagingContentDirection(this);}}this._dirParent=dirParent;}super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();if(this._dirParent){if(this._dirParent===document.documentElement){observedForElements$2.delete(this);}else {this._dirParent.stopManagingContentDirection(this);}this.removeAttribute('dir');}}}__decorate([property({reflect:true})],SlotTextObservingElement.prototype,"dir",void 0);return SlotTextObservingElement;}class SpectrumElement$2 extends SpectrumMixin$2(LitElement){}

function SizedMixin$2(constructor,{validSizes=['s','m','l','xl'],noDefaultSize}={}){class SizedElement extends constructor{constructor(){super(...arguments);this._size='m';}get size(){return this._size||'m';}set size(value){const defaultSize=noDefaultSize?null:'m';const size=value?value.toLocaleLowerCase():value;const validSize=validSizes.includes(size)?size:defaultSize;if(validSize){this.setAttribute('size',validSize);}if(this._size===validSize){return;}const oldSize=this._size;this._size=validSize;this.requestUpdate('size',oldSize);}firstUpdated(changes){super.firstUpdated(changes);if(!this.hasAttribute('size')&&!noDefaultSize){this.setAttribute('size',this.size);}}}__decorate([property({type:String,reflect:true})],SizedElement.prototype,"size",null);return SizedElement;}

let _$7=t=>t,_t$7;const styles$3=css(_t$7||(_t$7=_$7`
:host{--spectrum-button-line-height:1.3}#button{position:relative;display:inline-flex;box-sizing:border-box;overflow:visible;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;vertical-align:top;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;text-decoration:none;font-family:var(--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base));line-height:var(--spectrum-button-line-height);user-select:none;-webkit-user-select:none;cursor:pointer}#button:focus{outline:none}#button::-moz-focus-inner{border:0;border-style:none;padding:0;margin-top:-2px;margin-bottom:-2px}#button:disabled{cursor:default}:host([dir=ltr]) #button{padding-left:var(--spectrum-picker-textonly-padding-left);padding-right:var(--spectrum-picker-textonly-padding-right)}:host([dir=rtl]) #button{padding-right:var(--spectrum-picker-textonly-padding-left);padding-left:var(--spectrum-picker-textonly-padding-right)}#button{display:flex;justify-content:center;align-items:center;width:var(--spectrum-picker-width);min-width:var(--spectrum-picker-min-width);height:var(--spectrum-picker-height);margin:0;padding-top:0;padding-bottom:0;border-width:var(--spectrum-picker-border-size);border-style:solid;border-radius:var(--spectrum-picker-border-radius);transition:background-color var(--spectrum-global-animation-duration-100,.13s),box-shadow var(--spectrum-global-animation-duration-100,.13s),border-color var(--spectrum-global-animation-duration-100,.13s)}#button:disabled,:host([disabled]) #button{border-width:var(--spectrum-picker-disabled-border-size);cursor:default}:host([dir=ltr]) #button .spectrum-Picker-icon{margin-right:var(--spectrum-picker-icon-gap)}:host([dir=rtl]) #button .spectrum-Picker-icon{margin-left:var(--spectrum-picker-icon-gap)}.spectrum-Picker-icon{flex-shrink:0}:host([dir=ltr]) #button #label+.spectrum-Picker-icon{margin-left:var(--spectrum-picker-icon-gap)}:host([dir=rtl]) #button #label+.spectrum-Picker-icon{margin-right:var(--spectrum-picker-icon-gap)}:host([size=s]){--spectrum-picker-border-size:var(--spectrum-picker-s-border-size,var(--spectrum-alias-border-size-thin));--spectrum-picker-text-size:var(--spectrum-picker-s-text-size,var(--spectrum-alias-item-text-size-s));--spectrum-picker-icon-gap:var(--spectrum-picker-s-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-s));--spectrum-picker-height:var(--spectrum-picker-s-height,var(--spectrum-alias-item-height-s));--spectrum-picker-placeholder-text-font-style:var(--spectrum-picker-s-placeholder-text-font-style,var(--spectrum-global-font-style-italic));--spectrum-picker-placeholder-text-font-weight:var(--spectrum-picker-s-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular));--spectrum-picker-border-radius:var(--spectrum-picker-s-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-picker-width:var(--spectrum-picker-s-width,var(--spectrum-global-dimension-size-2000));--spectrum-picker-min-width:var(--spectrum-picker-s-min-width,var(--spectrum-global-dimension-size-450));--spectrum-picker-popover-max-width:var(--spectrum-picker-s-popover-max-width,var(--spectrum-global-dimension-size-1800));--spectrum-picker-ui-icon-gap:var(--spectrum-picker-s-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-s));--spectrum-picker-error-icon-margin-left:var(--spectrum-picker-s-error-icon-margin-left,var(--spectrum-global-dimension-size-100));--spectrum-picker-textonly-padding-left:var(--spectrum-picker-s-textonly-padding-left,var(--spectrum-alias-item-padding-s));--spectrum-picker-textonly-padding-right:var(--spectrum-picker-s-textonly-padding-right,var(--spectrum-alias-item-padding-s))}:host([size=m]){--spectrum-picker-border-size:var(--spectrum-picker-m-border-size,var(--spectrum-alias-border-size-thin));--spectrum-picker-text-size:var(--spectrum-picker-m-text-size,var(--spectrum-alias-item-text-size-m));--spectrum-picker-height:var(--spectrum-picker-m-height,var(--spectrum-alias-item-height-m));--spectrum-picker-icon-gap:var(--spectrum-picker-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m));--spectrum-picker-placeholder-text-font-style:var(--spectrum-picker-m-placeholder-text-font-style,var(--spectrum-global-font-style-italic));--spectrum-picker-placeholder-text-font-weight:var(--spectrum-picker-m-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular));--spectrum-picker-border-radius:var(--spectrum-picker-m-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-picker-width:var(--spectrum-picker-m-width,var(--spectrum-global-dimension-size-3000));--spectrum-picker-min-width:var(--spectrum-picker-m-min-width,var(--spectrum-global-dimension-size-600));--spectrum-picker-popover-max-width:var(--spectrum-picker-m-popover-max-width,var(--spectrum-global-dimension-size-2400));--spectrum-picker-ui-icon-gap:var(--spectrum-picker-m-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-m));--spectrum-picker-error-icon-margin-left:var(--spectrum-picker-m-error-icon-margin-left,var(--spectrum-global-dimension-size-150));--spectrum-picker-textonly-padding-left:var(--spectrum-picker-m-textonly-padding-left,var(--spectrum-alias-item-padding-m));--spectrum-picker-textonly-padding-right:var(--spectrum-picker-m-textonly-padding-right,var(--spectrum-alias-item-padding-m))}:host([size=l]){--spectrum-picker-border-size:var(--spectrum-picker-l-border-size,var(--spectrum-alias-border-size-thin));--spectrum-picker-text-size:var(--spectrum-picker-l-text-size,var(--spectrum-alias-item-text-size-l));--spectrum-picker-icon-gap:var(--spectrum-picker-l-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l));--spectrum-picker-height:var(--spectrum-picker-l-height,var(--spectrum-alias-item-height-l));--spectrum-picker-placeholder-text-font-style:var(--spectrum-picker-l-placeholder-text-font-style,var(--spectrum-global-font-style-italic));--spectrum-picker-placeholder-text-font-weight:var(--spectrum-picker-l-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular));--spectrum-picker-border-radius:var(--spectrum-picker-l-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-picker-width:var(--spectrum-picker-l-width,var(--spectrum-global-dimension-size-2000));--spectrum-picker-min-width:var(--spectrum-picker-l-min-width,var(--spectrum-global-dimension-size-750));--spectrum-picker-popover-max-width:var(--spectrum-picker-l-popover-max-width,var(--spectrum-global-dimension-size-3000));--spectrum-picker-ui-icon-gap:var(--spectrum-picker-l-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-l));--spectrum-picker-error-icon-margin-left:var(--spectrum-picker-l-error-icon-margin-left,var(--spectrum-global-dimension-size-185));--spectrum-picker-textonly-padding-left:var(--spectrum-picker-l-textonly-padding-left,var(--spectrum-alias-item-padding-l));--spectrum-picker-textonly-padding-right:var(--spectrum-picker-l-textonly-padding-right,var(--spectrum-alias-item-padding-l))}:host([size=xl]){--spectrum-picker-border-size:var(--spectrum-picker-xl-border-size,var(--spectrum-alias-border-size-thin));--spectrum-picker-icon-gap:var(--spectrum-picker-xl-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l));--spectrum-picker-text-size:var(--spectrum-picker-xl-text-size,var(--spectrum-alias-item-text-size-xl));--spectrum-picker-height:var(--spectrum-picker-xl-height,var(--spectrum-alias-item-height-xl));--spectrum-picker-placeholder-text-font-style:var(--spectrum-picker-xl-placeholder-text-font-style,var(--spectrum-global-font-style-italic));--spectrum-picker-placeholder-text-font-weight:var(--spectrum-picker-xl-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular));--spectrum-picker-border-radius:var(--spectrum-picker-xl-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-picker-width:var(--spectrum-picker-xl-width,var(--spectrum-global-dimension-size-3000));--spectrum-picker-min-width:var(--spectrum-picker-xl-min-width,var(--spectrum-global-dimension-size-900));--spectrum-picker-popover-max-width:var(--spectrum-picker-xl-popover-max-width,var(--spectrum-global-dimension-size-3600));--spectrum-picker-ui-icon-gap:var(--spectrum-picker-xl-ui-icon-gap,var(--spectrum-alias-item-ui-icon-gap-xl));--spectrum-picker-error-icon-margin-left:var(--spectrum-picker-xl-error-icon-margin-left,var(--spectrum-global-dimension-size-225));--spectrum-picker-textonly-padding-left:var(--spectrum-picker-xl-textonly-padding-left,var(--spectrum-alias-item-padding-xl));--spectrum-picker-textonly-padding-right:var(--spectrum-picker-xl-textonly-padding-right,var(--spectrum-alias-item-padding-xl))}:host{--spectrum-picker-min-width:var(--spectrum-global-dimension-size-400);--spectrum-picker-disabled-border-size:0;--spectrum-picker-popover-max-width:var(--spectrum-global-dimension-size-3000);--spectrum-picker-width:var(--spectrum-global-dimension-size-2400);--spectrum-picker-border-size-increase-focus:1px}:host([quiet]) #button{--spectrum-picker-border-size:0;--spectrum-picker-border-radius:0;--spectrum-picker-textonly-padding-left:0;--spectrum-picker-textonly-padding-right:0;width:auto;min-width:0}:host([quiet]) #button:disabled.focus-visible,:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible,:host([quiet][disabled]) #button.focus-visible{box-shadow:none}:host([quiet]) #button:disabled.focus-visible,:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button.focus-visible,:host([quiet][disabled]) #button:focus-visible{box-shadow:none}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}#label{flex:1 1 auto;white-space:nowrap;overflow:hidden;height:calc(var(--spectrum-picker-height) - var(--spectrum-picker-border-size)*2);line-height:calc(var(--spectrum-picker-height) - var(--spectrum-picker-border-size)*2);font-size:var(--spectrum-picker-text-size);text-overflow:ellipsis}#label.placeholder{font-weight:var(--spectrum-picker-placeholder-text-font-weight);font-style:var(--spectrum-picker-placeholder-text-font-style);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.picker{display:inline-block;position:relative;vertical-align:top;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;flex-shrink:0}:host([dir=ltr]) .validationIcon{margin-left:var(--spectrum-picker-error-icon-margin-left)}:host([dir=rtl]) .validationIcon{margin-right:var(--spectrum-picker-error-icon-margin-left)}:host([dir=ltr]) #label~.picker{margin-left:var(--spectrum-picker-ui-icon-gap)}:host([dir=rtl]) #label~.picker{margin-right:var(--spectrum-picker-ui-icon-gap)}#popover{max-width:var(--spectrum-picker-popover-max-width)}:host([dir=ltr]) .spectrum-Picker-popover--quiet{margin-left:calc(-1*(var(--spectrum-picker-quiet-m-popover-offset-x,
var(--spectrum-global-dimension-size-150)) + var(--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin))))}:host([dir=rtl]) .spectrum-Picker-popover--quiet{margin-right:calc(-1*(var(--spectrum-picker-quiet-m-popover-offset-x,
var(--spectrum-global-dimension-size-150)) + var(--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin))))}#button{color:var(--spectrum-picker-m-text-color,var(--spectrum-alias-text-color));background-color:var(--spectrum-picker-m-background-color,var(--spectrum-global-color-gray-75));border-color:var(--spectrum-picker-m-border-color,var(--spectrum-alias-border-color))}#button:hover{color:var(--spectrum-picker-m-text-color-hover,var(--spectrum-alias-text-color-hover));background-color:var(--spectrum-picker-m-background-color-hover,var(--spectrum-global-color-gray-50));border-color:var(--spectrum-picker-m-border-color-hover,var(--spectrum-alias-border-color-hover))}#button:hover .picker{color:var(--spectrum-picker-m-icon-color-hover,var(--spectrum-alias-icon-color-hover))}#button:active,:host([open]) #button{background-color:var(--spectrum-picker-m-background-color-down,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-picker-m-border-color-down,var(--spectrum-alias-border-color-down))}#button:active.placeholder #label,:host([open]) #button.placeholder #label{color:var(--spectrum-picker-m-placeholder-text-color-down,var(--spectrum-alias-placeholder-text-color-down))}#button.focus-visible,#button.focus-visible,:host([focused]) #button{background-color:var(--spectrum-picker-m-background-color-key-focus,var(--spectrum-global-color-gray-50));border-color:var(--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus));box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-picker-m-text-color-key-focus,var(--spectrum-alias-text-color-hover))}#button.focus-visible,#button:focus-visible,:host([focused]) #button{background-color:var(--spectrum-picker-m-background-color-key-focus,var(--spectrum-global-color-gray-50));border-color:var(--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus));box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-picker-m-text-color-key-focus,var(--spectrum-alias-text-color-hover))}#button.focus-visible.placeholder,#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(--spectrum-picker-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover))}#button.focus-visible.placeholder,#button:focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(--spectrum-picker-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover))}:host([invalid]) #button{border-color:var(--spectrum-picker-m-border-color-error,var(--spectrum-global-color-red-500))}:host([invalid]) #button .validationIcon{color:var(--spectrum-picker-m-validation-icon-color-error,var(--spectrum-semantic-negative-color-icon))}:host([invalid]) #button:hover{border-color:var(--spectrum-picker-m-border-color-error-hover,var(--spectrum-global-color-red-600))}:host([invalid]) #button:active,:host([invalid][open]) #button{border-color:var(--spectrum-picker-m-border-color-error-down,var(--spectrum-global-color-red-600))}:host([invalid]) #button.focus-visible,:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus));box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus))}:host([invalid]) #button.focus-visible,:host([invalid]) #button:focus-visible,:host([invalid][focused]) #button{border-color:var(--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus));box-shadow:0 0 0 var(--spectrum-picker-border-size-increase-focus) var(--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus))}#button:disabled,:host([disabled]) #button{background-color:var(--spectrum-picker-m-background-color-disabled,var(--spectrum-global-color-gray-200));color:var(--spectrum-picker-m-text-color-disabled,var(--spectrum-alias-text-color-disabled))}#button:disabled .picker,#button:disabled .spectrum-Picker-icon,#button:disabled .validationIcon,:host([disabled]) #button .picker,:host([disabled]) #button .spectrum-Picker-icon,:host([disabled]) #button .validationIcon{color:var(--spectrum-picker-m-icon-color-disabled,var(--spectrum-alias-icon-color-disabled))}#button:disabled #label.placeholder,:host([disabled]) #button #label.placeholder{color:var(--spectrum-picker-m-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled))}.picker{color:var(--spectrum-picker-m-icon-color,var(--spectrum-alias-icon-color))}#label.placeholder{color:var(--spectrum-picker-m-placeholder-text-color,var(--spectrum-alias-placeholder-text-color))}#label.placeholder:hover{color:var(--spectrum-picker-m-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover))}#label.placeholder:active{color:var(--spectrum-picker-m-placeholder-text-color-mouse-focus,var(--spectrum-alias-placeholder-text-color))}:host([quiet]) #button{color:var(--spectrum-picker-m-text-color,var(--spectrum-alias-text-color));border-color:var(--spectrum-picker-quiet-m-border-color,var(--spectrum-alias-border-color-transparent));background-color:var(--spectrum-picker-quiet-m-background-color,var(--spectrum-alias-background-color-transparent))}:host([quiet]) #button:hover{background-color:var(--spectrum-picker-quiet-m-background-color-hover,var(--spectrum-alias-background-color-transparent));color:var(--spectrum-picker-m-text-color-hover,var(--spectrum-alias-text-color-hover))}:host([quiet]) #button.focus-visible,:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:var(--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent));box-shadow:0 2px 0 0 var(--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus))}:host([quiet]) #button.focus-visible,:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:var(--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent));box-shadow:0 2px 0 0 var(--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus))}:host([quiet]) #button.focus-visible.placeholder,:host([quiet]) #button.focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(--spectrum-picker-quiet-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover))}:host([quiet]) #button.focus-visible.placeholder,:host([quiet]) #button:focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(--spectrum-picker-quiet-m-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover))}:host([quiet]) #button.focus-visible .picker,:host([quiet]) #button.focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(--spectrum-picker-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host([quiet]) #button.focus-visible .picker,:host([quiet]) #button:focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(--spectrum-picker-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:var(--spectrum-picker-quiet-m-background-color-down,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-picker-quiet-m-border-color-down,var(--spectrum-alias-border-color-transparent))}:host([quiet]) #button:active.focus-visible,:host([quiet]) #button:active.focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button.focus-visible,:host([quiet][open]) #button.focus-visible,:host([quiet][open][focused]) #button{background-color:var(--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent));box-shadow:0 2px 0 0 var(--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus))}:host([quiet]) #button:active.focus-visible,:host([quiet]) #button:active:focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button.focus-visible,:host([quiet][open]) #button:focus-visible,:host([quiet][open][focused]) #button{background-color:var(--spectrum-picker-quiet-m-background-color-key-focus,var(--spectrum-alias-background-color-transparent));box-shadow:0 2px 0 0 var(--spectrum-picker-m-border-color-key-focus,var(--spectrum-alias-border-color-focus))}:host([quiet][invalid]) #button.focus-visible,:host([quiet][invalid]) #button.focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus))}:host([quiet][invalid]) #button.focus-visible,:host([quiet][invalid]) #button:focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(--spectrum-picker-m-border-color-error-key-focus,var(--spectrum-alias-border-color-focus))}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:var(--spectrum-picker-quiet-m-background-color-disabled,var(--spectrum-alias-background-color-transparent));color:var(--spectrum-picker-m-text-color-disabled,var(--spectrum-alias-text-color-disabled))}:host{display:inline-flex;vertical-align:top;max-width:100%;width:var(--spectrum-picker-width);min-width:var(--spectrum-picker-min-width)}:host([quiet]){width:auto;min-width:0}:host([size]){--spectrum-picker-width:var(--spectrum-global-dimension-size-2400)}#button{width:100%;min-width:100%;max-width:100%}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}sp-popover{display:none}.picker,.validationIcon{flex-shrink:0}:host([focused]:not([quiet])) #button #label.placeholder{color:var(--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover))}:host([focused]:not([quiet])) #button .picker{color:var(--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}
`));

let _$8=t=>t,_t$8;const styles$4=css(_t$8||(_t$8=_$8`
.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown500{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft500{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp75,.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp500{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{width:var(--spectrum-alias-ui-icon-chevron-size-75);height:var(--spectrum-alias-ui-icon-chevron-size-75)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{width:var(--spectrum-alias-ui-icon-chevron-size-100);height:var(--spectrum-alias-ui-icon-chevron-size-100)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{width:var(--spectrum-alias-ui-icon-chevron-size-200);height:var(--spectrum-alias-ui-icon-chevron-size-200)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{width:var(--spectrum-alias-ui-icon-chevron-size-300);height:var(--spectrum-alias-ui-icon-chevron-size-300)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{width:var(--spectrum-alias-ui-icon-chevron-size-400);height:var(--spectrum-alias-ui-icon-chevron-size-400)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{width:var(--spectrum-alias-ui-icon-chevron-size-500);height:var(--spectrum-alias-ui-icon-chevron-size-500)}
`));

let hasFocusVisible$1=true;try{document.body.querySelector(':focus-visible');}catch(error){hasFocusVisible$1=false;}/**
 * This mixin function is designed to be applied to a class that inherits
 * from HTMLElement. It makes it easy for a custom element to coordinate with
 * the :focus-visible polyfill.
 *
 * NOTE(cdata): The code here was adapted from an example proposed with the
 * introduction of ShadowDOM support in the :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196
 * @param {Function} SuperClass The base class implementation to decorate with
 * implementation that coordinates with the :focus-visible polyfill
 */const FocusVisiblePolyfillMixin$1=SuperClass=>{var _a;const coordinateWithPolyfill=instance=>{// If there is no shadow root, there is no need to coordinate with
// the polyfill. If we already coordinated with the polyfill, we can
// skip subsequent invokcations:
if(instance.shadowRoot==null||instance.hasAttribute('data-js-focus-visible')){// eslint-disable-next-line @typescript-eslint/no-empty-function
return ()=>{};}// The polyfill might already be loaded. If so, we can apply it to
// the shadow root immediately:
if(self.applyFocusVisiblePolyfill){self.applyFocusVisiblePolyfill(instance.shadowRoot);if(instance.manageAutoFocus){instance.manageAutoFocus();}}else {const coordinationHandler=()=>{if(self.applyFocusVisiblePolyfill&&instance.shadowRoot){self.applyFocusVisiblePolyfill(instance.shadowRoot);}if(instance.manageAutoFocus){instance.manageAutoFocus();}};// Otherwise, wait for the polyfill to be loaded lazily. It might
// never be loaded, but if it is then we can apply it to the
// shadow root at the appropriate time by waiting for the ready
// event:
self.addEventListener('focus-visible-polyfill-ready',coordinationHandler,{once:true});return ()=>{self.removeEventListener('focus-visible-polyfill-ready',coordinationHandler);};}// eslint-disable-next-line @typescript-eslint/no-empty-function
return ()=>{};};const $endPolyfillCoordination=Symbol('endPolyfillCoordination');// IE11 doesn't natively support custom elements or JavaScript class
// syntax The mixin implementation assumes that the user will take the
// appropriate steps to support both:
class FocusVisibleCoordinator extends SuperClass{constructor(){super(...arguments);this[_a]=null;}// Attempt to coordinate with the polyfill when connected to the
// document:
connectedCallback(){super.connectedCallback&&super.connectedCallback();if(!hasFocusVisible$1){requestAnimationFrame(()=>{if(this[$endPolyfillCoordination]==null){this[$endPolyfillCoordination]=coordinateWithPolyfill(this);}});}}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback();// It's important to remove the polyfill event listener when we
// disconnect, otherwise we will leak the whole element via window:
if(!hasFocusVisible$1){requestAnimationFrame(()=>{if(this[$endPolyfillCoordination]!=null){// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
this[$endPolyfillCoordination]();this[$endPolyfillCoordination]=null;}});}}}_a=$endPolyfillCoordination;return FocusVisibleCoordinator;};

/**
 * Focusable base class handles tabindex setting into shadowed elements automatically.
 *
 * This implementation is based heavily on the aybolit delegate-focus-mixin at
 * https://github.com/web-padawan/aybolit/blob/master/packages/core/src/mixins/delegate-focus-mixin.js
 */class Focusable$1 extends FocusVisiblePolyfillMixin$1(SpectrumElement$2){constructor(){super(...arguments);/**
         * Disable this control. It will not receive focus or events
         */this.disabled=false;/**
         * When this control is rendered, focus it automatically
         * @private
         */this.autofocus=false;this._tabIndex=0;this.manipulatingTabindex=false;}/**
     * The tab index to apply to this control. See general documentation about
     * the tabindex HTML property
     *
     * @private
     */get tabIndex(){if(this.focusElement===this){const tabindex=this.hasAttribute('tabindex')?Number(this.getAttribute('tabindex')):NaN;return !isNaN(tabindex)?tabindex:-1;}const tabIndexAttribute=parseFloat(this.hasAttribute('tabindex')?this.getAttribute('tabindex')||'0':'0');// When `disabled` tabindex is -1.
// When host tabindex -1, use that as the cache.
if(this.disabled||tabIndexAttribute<0){return -1;}// When `focusElement` isn't available yet,
// use host tabindex as the cache.
if(!this.focusElement){return tabIndexAttribute;}// All other times, use the tabindex of `focusElement`
// as the cache for this value.
return this.focusElement.tabIndex;}set tabIndex(tabIndex){// Flipping `manipulatingTabindex` to true before a change
// allows for that change NOT to effect the cached value of tabindex
if(this.manipulatingTabindex){this.manipulatingTabindex=false;return;}if(this.focusElement===this){if(tabIndex!==this.tabIndex){this._tabIndex=tabIndex;const tabindex=this.disabled?'-1':''+tabIndex;this.setAttribute('tabindex',tabindex);}return;}// All code paths are about to address the host tabindex without side effect.
this.manipulatingTabindex=true;if(tabIndex===-1||this.disabled){// Do not cange the tabindex of `focusElement` as it is the "old" value cache.
// Make element NOT focusable.
this.setAttribute('tabindex','-1');this.removeAttribute('focusable');if(tabIndex!==-1){// Cache all NON-`-1` values on the `focusElement`.
this.manageFocusElementTabindex(tabIndex);}return;}this.setAttribute('focusable','');if(this.hasAttribute('tabindex')){this.removeAttribute('tabindex');}else {// You can't remove an attribute that isn't there,
// manually end the `manipulatingTabindex` guard.
this.manipulatingTabindex=false;}this.manageFocusElementTabindex(tabIndex);}async manageFocusElementTabindex(tabIndex){if(!this.focusElement){// allow setting these values to be async when needed.
await this.updateComplete;}if(tabIndex===null){this.focusElement.removeAttribute('tabindex');}else {this.focusElement.tabIndex=tabIndex;}}/**
     * @private
     */get focusElement(){throw new Error('Must implement focusElement getter!');}focus(){if(this.disabled||!this.focusElement){return;}if(this.focusElement!==this){this.focusElement.focus();}else {HTMLElement.prototype.focus.apply(this);}}blur(){if(this.focusElement!==this){this.focusElement.blur();}else {HTMLElement.prototype.blur.apply(this);}}click(){if(this.disabled){return;}if(this.focusElement!==this){this.focusElement.click();}else {HTMLElement.prototype.click.apply(this);}}manageAutoFocus(){if(this.autofocus){/**
             * Trick :focus-visible polyfill into thinking keyboard based focus
             *
             * @private
             **/this.dispatchEvent(new KeyboardEvent('keydown',{code:'Tab'}));this.focusElement.focus();}}firstUpdated(changes){super.firstUpdated(changes);this.manageAutoFocus();if(!this.hasAttribute('tabindex')||this.getAttribute('tabindex')!=='-1'){this.setAttribute('focusable','');}}update(changedProperties){if(changedProperties.has('disabled')){this.handleDisabledChanged(this.disabled,changedProperties.get('disabled'));}super.update(changedProperties);}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has('disabled')&&this.disabled){this.blur();}}async handleDisabledChanged(disabled,oldDisabled){const canSetDisabled=()=>this.focusElement!==this&&typeof this.focusElement.disabled!=='undefined';if(disabled){this.manipulatingTabindex=true;this.setAttribute('tabindex','-1');await this.updateComplete;if(canSetDisabled()){this.focusElement.disabled=true;}else {this.setAttribute('aria-disabled','true');}}else if(oldDisabled){this.manipulatingTabindex=true;if(this.focusElement===this){this.setAttribute('tabindex',''+this._tabIndex);}else {this.removeAttribute('tabindex');}await this.updateComplete;if(canSetDisabled()){this.focusElement.disabled=false;}else {this.removeAttribute('aria-disabled');}}}}__decorate([property({type:Boolean,reflect:true})],Focusable$1.prototype,"disabled",void 0);__decorate([property({type:Boolean})],Focusable$1.prototype,"autofocus",void 0);__decorate([property({type:Number})],Focusable$1.prototype,"tabIndex",null);

function restoreChildren$1(placeholderItems,srcElements,cleanupCallbacks=[]){for(let index=0;index<srcElements.length;++index){const srcElement=srcElements[index];const placeholderItem=placeholderItems[index];const parentElement=placeholderItem.parentElement||placeholderItem.getRootNode();if(cleanupCallbacks[index]){cleanupCallbacks[index](srcElement);}parentElement.replaceChild(srcElement,placeholderItem);delete placeholderItems[index];}return srcElements;}const reparentChildren$1=(srcElements,newParent,prepareCallback)=>{let placeholderItems=[];let cleanupCallbacks=[];for(let index=0;index<srcElements.length;++index){const placeholderItem=document.createComment('placeholder for reparented element');placeholderItems.push(placeholderItem);const srcElement=srcElements[index];if(prepareCallback){cleanupCallbacks.push(prepareCallback(srcElement)||(_el=>{}));}const parentElement=srcElement.parentElement||srcElement.getRootNode();parentElement.replaceChild(placeholderItem,srcElement);newParent.append(srcElement);}return function(){return restoreChildren$1(placeholderItems,srcElements,cleanupCallbacks);};};

let _$9=t=>t,_t$9;const styles$5=css(_t$9||(_t$9=_$9`
:host{display:inline-block;color:inherit;fill:currentColor;pointer-events:none}:host(:not(:root)){overflow:hidden}:host{--spectrum-icon-size-s:var(--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200));--spectrum-icon-size-m:var(--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225));--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275));--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(--spectrum-icon-size-s);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(--spectrum-icon-size-m);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(--spectrum-icon-size-l);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(--spectrum-icon-size-xl);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(--spectrum-icon-size-xxl);width:var(--spectrum-icon-size-xxl)}:host{height:var(--spectrum-icon-tshirt-size-height,var(--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)));width:var(--spectrum-icon-tshirt-size-width,var(--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)))}#container{height:100%}::slotted(*),img,svg{height:100%;width:100%;vertical-align:top}
`));

let _$a=t=>t,_t$a;class IconBase extends SpectrumElement$2{static get styles(){return [styles$5];}render(){return html(_t$a||(_t$a=_$a`
            <slot></slot>
        `));}}__decorate([property()],IconBase.prototype,"label",void 0);__decorate([property({reflect:true})],IconBase.prototype,"size",void 0);

class IconsetRegistry{constructor(){this.iconsetMap=new Map();}// singleton getter
static getInstance(){if(!IconsetRegistry.instance){IconsetRegistry.instance=new IconsetRegistry();}return IconsetRegistry.instance;}addIconset(name,iconset){this.iconsetMap.set(name,iconset);// dispatch a sp-iconset-added event on window to let everyone know we have a new iconset
// note we're using window here for efficiency since we don't need to bubble through the dom since everyone
// will know where to look for this event
const event=new CustomEvent('sp-iconset-added',{bubbles:true,composed:true,detail:{name,iconset}});// we're dispatching this event in the next tick to allow the iconset to finish any slotchange or other event
// listeners caused by connection to the dom and first render to complete, this way any icons listening for
// this iconset will be able to access the completed iconset
setTimeout(()=>window.dispatchEvent(event),0);}removeIconset(name){this.iconsetMap.delete(name);// dispatch a sp-iconset-removed event on window to let everyone know we have a new iconset
// note we're using window here for efficiency since we don't need to bubble through the dom since everyone
// will know where to look for this event
const event=new CustomEvent('sp-iconset-removed',{bubbles:true,composed:true,detail:{name}});// we're dispatching this event in the next tick To keep the event model consistent with the added event
setTimeout(()=>window.dispatchEvent(event),0);}getIconset(name){return this.iconsetMap.get(name);}}

let _$b=t=>t,_t$b,_t2$3;class Icon extends IconBase{constructor(){super(...arguments);this.iconsetListener=event=>{if(!this.name){return;}// parse the icon name to get iconset name
const icon=this.parseIcon(this.name);if(event.detail.name===icon.iconset){this.updateIconPromise=this.updateIcon();}};}connectedCallback(){super.connectedCallback();window.addEventListener('sp-iconset-added',this.iconsetListener);}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener('sp-iconset-added',this.iconsetListener);}firstUpdated(){this.updateIconPromise=this.updateIcon();}attributeChangedCallback(name,old,value){super.attributeChangedCallback(name,old,value);this.updateIconPromise=this.updateIcon();// any of our attributes change, update our icon
}render(){if(this.name){return html(_t$b||(_t$b=_$b`
                <div id="container"></div>
            `));}else if(this.src){return html(_t2$3||(_t2$3=_$b`
                <img src="${0}" alt=${0} />
            `),this.src,ifDefined(this.label));}return super.render();}async updateIcon(){if(!this.name){return Promise.resolve();}// parse the icon name to get iconset name
const icon=this.parseIcon(this.name);// try to retrieve the iconset
const iconset=IconsetRegistry.getInstance().getIconset(icon.iconset);if(!iconset){// we can stop here as there's nothing to be done till we get the iconset
return Promise.resolve();}if(!this.iconContainer){return Promise.resolve();}this.iconContainer.innerHTML='';return iconset.applyIconToElement(this.iconContainer,icon.icon,this.size||'',this.label?this.label:'');}parseIcon(icon){const iconParts=icon.split(':');let iconsetName='default';let iconName=icon;if(iconParts.length>1){iconsetName=iconParts[0];iconName=iconParts[1];}return {iconset:iconsetName,icon:iconName};}async _getUpdateComplete(){await super._getUpdateComplete();await this.updateIconPromise;}}__decorate([property()],Icon.prototype,"src",void 0);__decorate([property()],Icon.prototype,"name",void 0);__decorate([query('#container')],Icon.prototype,"iconContainer",void 0);

let customTemplateLiteralTag;const tag=function(strings,...values){if(customTemplateLiteralTag){return customTemplateLiteralTag(strings,...values);}return values.reduce((acc,v,idx)=>acc+v+strings[idx+1],strings[0]);};const setCustomTemplateLiteralTag=tag=>{customTemplateLiteralTag=tag;};

let _$c=t=>t,_t$c;const Chevron100Icon=()=>{return tag(_t$c||(_t$c=_$c`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"
    />
  </svg>`));};

class IconChevron100 extends IconBase{render(){setCustomTemplateLiteralTag(html);return Chevron100Icon();}}

customElements.define('sp-icon-chevron100',IconChevron100);

let customTemplateLiteralTag$1;const tag$1=function(strings,...values){if(customTemplateLiteralTag$1){return customTemplateLiteralTag$1(strings,...values);}return values.reduce((acc,v,idx)=>acc+v+strings[idx+1],strings[0]);};const setCustomTemplateLiteralTag$1=tag=>{customTemplateLiteralTag$1=tag;};

let _$d=t=>t,_t$d;const AlertIcon=({width=24,height=24,hidden=false,title='Alert'}={})=>{return tag$1(_t$d||(_t$d=_$d`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${0}"
    viewBox="0 0 36 36"
    width="${0}"
    aria-hidden="${0}"
    role="img"
    fill="currentColor"
    aria-label="${0}"
  >
    <path
      d="M17.127 2.579L.4 32.512A1 1 0 001.272 34h33.456a1 1 0 00.872-1.488L18.873 2.579a1 1 0 00-1.746 0zM20 29.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"
    />
  </svg>`),height,width,hidden?'true':'false',title);};

class IconAlert extends IconBase{render(){setCustomTemplateLiteralTag$1(html);return AlertIcon({hidden:!this.label,title:this.label});}}

customElements.define('sp-icon-alert',IconAlert);

let _$e=t=>t,_t$e;const styles$6=css(_t$e||(_t$e=_$e`
:host{--spectrum-menu-margin-x:var(--spectrum-global-dimension-size-40);--spectrum-listitem-heading-text-size:var(--spectrum-global-dimension-font-size-50);--spectrum-listitem-heading-text-font-weight:400;--spectrum-listitem-heading-text-transform:uppercase;--spectrum-listitem-heading-letter-spacing:0.06em;--spectrum-listitem-heading-margin:var(--spectrum-global-dimension-size-75) 0 0 0;--spectrum-listitem-heading-padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150);--spectrum-listitem-padding-y:var(--spectrum-global-dimension-size-85);--spectrum-listitem-icon-margin-top:var(--spectrum-global-dimension-size-50);--spectrum-listitem-label-line-height:1.3;--spectrum-listitem-heading-line-height:var(--spectrum-alias-body-text-line-height,var(--spectrum-global-font-line-height-medium));--spectrum-listitem-divider-size:var(--spectrum-listitem-m-divider-size,var(--spectrum-alias-border-size-thick));--spectrum-listitem-divider-padding:var(--spectrum-listitem-m-divider-padding,3px);--spectrum-listitem-focus-indicator-size:var(--spectrum-listitem-m-focus-indicator-size,var(--spectrum-alias-border-size-thick));--spectrum-listitem-text-font-weight:var(--spectrum-listitem-m-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-listitem-text-size:var(--spectrum-listitem-m-text-size,var(--spectrum-alias-item-text-size-m));--spectrum-listitem-height:var(--spectrum-listitem-m-height,var(--spectrum-alias-item-height-m));--spectrum-listitem-icon-gap:var(--spectrum-listitem-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m));--spectrum-listitem-padding-left:var(--spectrum-listitem-m-padding-left,var(--spectrum-alias-item-workflow-padding-left-m));--spectrum-listitem-padding-right:var(--spectrum-listitem-m-padding-right,var(--spectrum-alias-item-padding-m));--spectrum-listitem-thumbnail-padding-left:var(--spectrum-listitem-m-thumbnail-padding-left,var(--spectrum-alias-item-padding-m));display:inline-block;box-sizing:border-box;margin-top:var(--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50));margin-bottom:var(--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50));margin-left:0;margin-right:0;padding:0;list-style-type:none;overflow:auto}:host([dir=ltr][selectable]) ::slotted(sp-menu-item){padding-right:var(--spectrum-listitem-selectable-padding-right)}:host([dir=rtl][selectable]) ::slotted(sp-menu-item){padding-left:var(--spectrum-listitem-selectable-padding-right)}:host([dir=ltr][selectable]) ::slotted(sp-menu-item[selected]){padding-right:calc(var(--spectrum-listitem-padding-right) - var(--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)))}:host([dir=rtl][selectable]) ::slotted(sp-menu-item[selected]){padding-left:calc(var(--spectrum-listitem-padding-right) - var(--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)))}::slotted(sp-menu){display:block}:host{--spectrum-listheading-text-color:var(--spectrum-global-color-gray-700);background-color:var(--spectrum-listitem-m-background-color,var(--spectrum-alias-background-color-transparent));--spectrum-listitem-selectable-padding-right:calc(var(--spectrum-global-dimension-size-100) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-listitem-icon-gap))}:host(:focus){outline:none}:host sp-menu{display:block}
`));

let _$f=t=>t,_t$f;/**
 * Spectrum Menu Component
 * @element sp-menu
 *
 */class Menu extends SpectrumElement$2{constructor(){super();this.selectable=false;this.menuItems=[];this.focusedItemIndex=0;this.focusInItemIndex=0;this.prepItems=()=>{this.menuItems=[...this.querySelectorAll(`[role="${this.childRole}"]`)];if(!this.menuItems||this.menuItems.length===0){return;}this.updateSelectedItemIndex();const focusInItem=this.menuItems[this.focusInItemIndex];if(this.getRootNode().activeElement===this){focusInItem.focused=true;}};this.handleKeydown=this.handleKeydown.bind(this);this.startListeningToKeyboard=this.startListeningToKeyboard.bind(this);this.stopListeningToKeyboard=this.stopListeningToKeyboard.bind(this);this.onClick=this.onClick.bind(this);this.addEventListener('click',this.onClick);this.addEventListener('focusin',this.startListeningToKeyboard);this.addEventListener('focus',this.focus);}static get styles(){return [styles$6];}/**
     * Hide this getter from web-component-analyzer until
     * https://github.com/runem/web-component-analyzer/issues/131
     * has been addressed.
     *
     * @private
     */get childRole(){return this.getAttribute('role')==='menu'?'menuitem':'option';}focus(){if(!this.menuItems.length||this.menuItems.every(item=>item.disabled)){return;}this.focusMenuItemByOffset(0);super.focus();}onClick(event){const path=event.composedPath();const target=path.find(el=>{/* c8 ignore next 3 */if(!(el instanceof Element)){return false;}return el.getAttribute('role')===this.childRole;});/* c8 ignore next 3 */if(!target){return;}this.prepareToCleanUp();}startListeningToKeyboard(){const activeElement=this.getRootNode().activeElement;if(activeElement!==this){this.focus();if(activeElement&&this.focusedItemIndex===0){const offset=this.menuItems.indexOf(activeElement);if(offset>0){this.focusMenuItemByOffset(offset);}}}this.addEventListener('keydown',this.handleKeydown);this.addEventListener('focusout',this.handleFocusout);}handleFocusout(){this.stopListeningToKeyboard();const focusedItem=this.menuItems[this.focusedItemIndex];if(focusedItem){focusedItem.focused=false;}}stopListeningToKeyboard(){this.removeEventListener('keydown',this.handleKeydown);}handleKeydown(event){const{code}=event;if(code==='Tab'){this.prepareToCleanUp();return;}if(code==='Space'||code==='Enter'){this.menuItems[this.focusedItemIndex].click();return;}if(code!=='ArrowDown'&&code!=='ArrowUp'){return;}const lastFocusedItem=this.menuItems[this.focusedItemIndex];const direction=code==='ArrowDown'?1:-1;const itemToFocus=this.focusMenuItemByOffset(direction);if(itemToFocus===lastFocusedItem){return;}event.preventDefault();itemToFocus.scrollIntoView({block:'nearest'});}focusMenuItemByOffset(offset){const step=offset||1;const focusedItem=this.menuItems[this.focusedItemIndex];focusedItem.focused=false;this.focusedItemIndex=(this.menuItems.length+this.focusedItemIndex+offset)%this.menuItems.length;let itemToFocus=this.menuItems[this.focusedItemIndex];let availableItems=this.menuItems.length;// cycle through the available items in the directions of the offset to find the next non-disabled item
while(itemToFocus.disabled&&availableItems){availableItems-=1;this.focusedItemIndex=(this.menuItems.length+this.focusedItemIndex+step)%this.menuItems.length;itemToFocus=this.menuItems[this.focusedItemIndex];}// if there are no non-disabled items, skip the work to focus a child
if(!itemToFocus.disabled){itemToFocus.focused=true;this.setAttribute('aria-activedescendant',itemToFocus.id);}return itemToFocus;}prepareToCleanUp(){document.addEventListener('focusout',()=>{requestAnimationFrame(()=>{/* c8 ignore next 3 */if(this.menuItems.length===0){return;}const focusedItem=this.menuItems[this.focusedItemIndex];focusedItem.focused=false;this.updateSelectedItemIndex();});},{once:true});}updateSelectedItemIndex(){let index=this.menuItems.length-1;let item=this.menuItems[index];while(index&&item&&!item.selected){index-=1;item=this.menuItems[index];}index=Math.max(index,0);this.menuItems.forEach((item,i)=>{if(i!==index){item.focused=false;}});this.focusedItemIndex=index;this.focusInItemIndex=index;}render(){return html(_t$f||(_t$f=_$f`
            <slot></slot>
        `));}firstUpdated(changed){super.firstUpdated(changed);if(this.getAttribute('role')!=='presentation'){this.tabIndex=0;}}connectedCallback(){super.connectedCallback();if(!this.hasAttribute('role')){const queryRoleEvent=new CustomEvent('sp-menu-query-role',{bubbles:true,composed:true,detail:{role:''}});this.dispatchEvent(queryRoleEvent);this.setAttribute('role',queryRoleEvent.detail.role||'menu');}if(!this.observer){this.observer=new MutationObserver(this.prepItems);}this.observer.observe(this,{childList:true,subtree:true});this.updateComplete.then(()=>this.prepItems());const selectedItem=this.querySelector('[selected]');if(selectedItem){requestAnimationFrame(()=>{selectedItem.scrollIntoView({block:'nearest'});});}}disconnectedCallback(){this.observer.disconnect();super.disconnectedCallback();}}__decorate([property({type:Boolean,reflect:true})],Menu.prototype,"selectable",void 0);

customElements.define('sp-menu',Menu);

let _$g=t=>t,_t$g;const styles$7=css(_t$g||(_t$g=_$g`
:host{--spectrum-overlay-animation-distance:var(--spectrum-picker-m-popover-offset-y,var(--spectrum-global-dimension-size-75));visibility:hidden;opacity:0;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);pointer-events:none}:host([open]){visibility:visible;opacity:1;transition-delay:0ms;pointer-events:auto}:host([placement*=bottom][open]){transform:translateY(var(--spectrum-overlay-animation-distance))}:host([placement*=top][open]){transform:translateY(calc(-1*var(--spectrum-overlay-animation-distance)))}:host([placement*=right][open]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([placement*=left][open]){transform:translateX(calc(-1*var(--spectrum-overlay-animation-distance)))}:host{--spectrum-popover-target-offset:13px;--spectrum-popover-dialog-padding:30px 29px;--spectrum-popover-dialog-min-width:270px;--spectrum-popover-min-width:var(--spectrum-global-dimension-size-400);--spectrum-popover-min-height:var(--spectrum-global-dimension-size-400);display:inline-flex;flex-direction:column;min-width:var(--spectrum-popover-min-width,var(--spectrum-global-dimension-size-400));min-height:var(--spectrum-popover-min-height,var(--spectrum-global-dimension-size-400));border-style:solid;border-width:var(--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin));border-radius:var(--spectrum-popover-border-radius,var(--spectrum-alias-border-radius-regular));outline:none;box-sizing:border-box}#tip,:host{position:absolute}#tip{-webkit-transform:translate(0)}#tip .triangle{stroke-linecap:square;stroke-linejoin:miter;stroke-width:var(--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin))}:host([dialog]){min-width:var(--spectrum-popover-dialog-min-width);padding:var(--spectrum-popover-dialog-padding)}:host([placement*=left][tip]){margin-right:var(--spectrum-popover-target-offset)}:host([placement*=left]) #tip{left:100%}:host([placement*=right][tip]){margin-left:var(--spectrum-popover-target-offset)}:host([placement*=right]) #tip{right:100%;transform:scaleX(-1)}:host([placement*=left]) #tip,:host([placement*=right]) #tip{top:50%;margin-top:calc(var(--spectrum-global-dimension-size-150)*-1)}:host([placement*=bottom][tip]){margin-top:var(--spectrum-popover-target-offset)}:host([placement*=bottom]) #tip{bottom:100%;transform:scaleY(-1)}:host([placement*=top][tip]){margin-bottom:var(--spectrum-popover-target-offset)}:host([placement*=top]) #tip{top:100%}:host([placement*=bottom]) #tip,:host([placement*=top]) #tip{left:50%;margin-left:calc(var(--spectrum-global-dimension-size-150)*-1)}:host{background-color:var(--spectrum-popover-background-color,var(--spectrum-global-color-gray-50));border-color:var(--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark));filter:drop-shadow(0 1px 4px var(--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)));-webkit-filter:drop-shadow(0 1px 4px var(--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)));will-change:filter;-webkit-clip-path:inset(-30px -30px);clip-path:inset(-30px -30px)}#tip .triangle{fill:var(--spectrum-popover-background-color,var(--spectrum-global-color-gray-50));stroke:var(--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark))}:host{--sp-popover-tip-size:24px}:host([placement*=bottom]),:host([placement*=top]){max-height:calc(100% - var(--spectrum-overlay-animation-distance))}:host([placement*=left]),:host([placement*=right]){max-width:calc(100% - var(--spectrum-overlay-animation-distance))}::slotted(*){overscroll-behavior:contain}.tip{width:var(--sp-popover-tip-size);height:calc(var(--sp-popover-tip-size)/2);position:absolute;left:0}:host([placement*=bottom]) #tip,:host([placement*=right]) #tip{transform:none}:host([placement*=top]) .tip{top:100%}:host([placement*=bottom]) .tip{bottom:100%;transform:scaleY(-1)}:host([placement*=left]) .tip{transform-origin:100% 0;transform:rotate(-90deg) translateY(-200%)}:host([placement*=right]) .tip{transform-origin:0 0;transform:rotate(90deg)}
`));

let _$h=t=>t,_t$h,_t2$4;/**
 * @attr {Boolean} open - The open state of the popover
 * @attr {Boolean} dialog - Adds some padding to the popover
 */class Popover extends SpectrumElement$2{constructor(){super(...arguments);this.open=false;/**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */this.placement='none';this.tip=false;}static get styles(){return [styles$7];}renderTip(){return html(_t$h||(_t$h=_$h`
            <div id="tip">
                <svg
                    xmlns="http://www.w3.org/svg/2000"
                    class="tip"
                    viewBox="0 0 24 12"
                >
                    <path
                        class="triangle"
                        d="M 0.7071067811865476 0 L 11.414213562373096 10.707106781186548 L 22.121320343559645 0"
                    ></path>
                </svg>
            </div>
        `));}connectedCallback(){super.connectedCallback();this.addEventListener('sp-overlay-query',this.onOverlayQuery);}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener('sp-overlay-query',this.onOverlayQuery);}onOverlayQuery(event){/* c8 ignore next */if(!event.target)return;const target=event.target;/* c8 ignore next */if(target!==this)return;const tipElement=this.shadowRoot.querySelector('#tip');if(tipElement){event.detail.overlayContentTipElement=tipElement;}}render(){return html(_t2$4||(_t2$4=_$h`
            <slot></slot>
            ${0}
        `),this.tip?this.renderTip():nothing);}}__decorate([property({type:Boolean,reflect:true})],Popover.prototype,"open",void 0);__decorate([property({reflect:true})],Popover.prototype,"placement",void 0);__decorate([property({type:Boolean,reflect:true})],Popover.prototype,"tip",void 0);

customElements.define('sp-popover',Popover);

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/const getActiveElement$1=el=>{return el.getRootNode().activeElement;};

let _$i=t=>t,_t$i,_t2$5;function LikeAnchor$1(constructor){class LikeAnchorElement extends constructor{renderAnchor({id,className,// prettier-ignore
anchorContent=html(_t$i||(_t$i=_$i`<slot></slot>`))}){// prettier-ignore
return html(_t2$5||(_t2$5=_$i`<a
                    id=${0}
                    class=${0}
                    href=${0}
                    download=${0}
                    target=${0}
                    aria-label=${0}
                    rel=${0}
                >${0}</a>`),id,ifDefined(className),ifDefined(this.href),ifDefined(this.download),ifDefined(this.target),ifDefined(this.label),ifDefined(this.rel),anchorContent);}}__decorate([property({reflect:true})],LikeAnchorElement.prototype,"download",void 0);__decorate([property()],LikeAnchorElement.prototype,"label",void 0);__decorate([property({reflect:true})],LikeAnchorElement.prototype,"href",void 0);__decorate([property({reflect:true})],LikeAnchorElement.prototype,"target",void 0);__decorate([property({reflect:true})],LikeAnchorElement.prototype,"rel",void 0);return LikeAnchorElement;}

const slotElementObserver$2=Symbol('slotElementObserver');const startObserving$2=Symbol('startObserving');const slotContentIsPresent$1=Symbol('slotContentIsPresent');function ObserveSlotPresence$1(constructor,lightDomSelector){var _a;const lightDomSelectors=Array.isArray(lightDomSelector)?lightDomSelector:[lightDomSelector];class SlotPresenceObservingElement extends constructor{constructor(){super(...arguments);this[_a]=new Map();this.managePresenceObservedSlot=()=>{lightDomSelectors.forEach(selector=>{this[slotContentIsPresent$1].set(selector,!!this.querySelector(selector));});this.requestUpdate();};}/**
         *  @private
         */get slotContentIsPresent(){if(lightDomSelectors.length===1){return this[slotContentIsPresent$1].get(lightDomSelectors[0])||false;}else {throw new Error('Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.');}}getSlotContentPresence(selector){if(this[slotContentIsPresent$1].has(selector)){return this[slotContentIsPresent$1].get(selector)||false;}throw new Error(`The provided selector \`\` is not being observed.`);}[(_a=slotContentIsPresent$1,startObserving$2)](){const config={childList:true,subtree:true};if(!this[slotElementObserver$2]){this[slotElementObserver$2]=new MutationObserver(this.managePresenceObservedSlot);}this[slotElementObserver$2].observe(this,config);this.managePresenceObservedSlot();}connectedCallback(){super.connectedCallback();this[startObserving$2]();}disconnectedCallback(){this[slotElementObserver$2].disconnect();super.disconnectedCallback();}}return SlotPresenceObservingElement;}

const slotElementObserver$3=Symbol('slotElementObserver');const assignedNodesList$1=Symbol('assignedNodes');const startObserving$3=Symbol('startObserving');function ObserveSlotText$1(constructor,slotSelector){var _a;class SlotTextObservingElement extends constructor{constructor(){super(...arguments);this.slotHasContent=false;}manageTextObservedSlot(){if(!this[assignedNodesList$1])return;const assignedNodes=[...this[assignedNodesList$1]].filter(node=>{if(node.tagName){return true;}return node.textContent?node.textContent.trim():false;});this.slotHasContent=assignedNodes.length>0;}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.manageTextObservedSlot();}[(_a=assignedNodesList$1,startObserving$3)](){const config={characterData:true,subtree:true};if(!this[slotElementObserver$3]){const callback=mutationsList=>{for(const mutation of mutationsList){if(mutation.type==='characterData'){this.manageTextObservedSlot();}}};this[slotElementObserver$3]=new MutationObserver(callback);}this[slotElementObserver$3].observe(this,config);}connectedCallback(){super.connectedCallback();this[startObserving$3]();}disconnectedCallback(){if(this[slotElementObserver$3]){this[slotElementObserver$3].disconnect();}super.disconnectedCallback();}}__decorate([property({type:Boolean,attribute:false})],SlotTextObservingElement.prototype,"slotHasContent",void 0);__decorate([queryAssignedNodes(slotSelector,true)],SlotTextObservingElement.prototype,_a,void 0);return SlotTextObservingElement;}

let _$j=t=>t,_t$j;const styles$8=css(_t$j||(_t$j=_$j`
@keyframes spOverlayFadeIn{0%{opacity:0;transform:var(--sp-overlay-from)}to{opacity:1;transform:translate(0)}}@keyframes spOverlayFadeOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:var(--sp-overlay-from)}}:host{z-index:1000;position:absolute;display:inline-block;pointer-events:none}:host(:focus){outline:none}:host([placement=none]){top:0;left:0}:host([placement=none]) ::slotted(*){height:calc(100vh - var(--swc-body-margins-block, 0 * 1px))}#contents,sp-theme{height:100%}#contents{display:inline-block;pointer-events:none;animation-duration:var(--spectrum-global-animation-duration-200,.16s);animation-timing-function:var(--spectrum-global-animation-ease-out,ease-out);opacity:1;visibility:visible}:host([data-popper-placement*=top]) #contents{--sp-overlay-from:translateY(var(--spectrum-global-dimension-size-75))}:host([data-popper-placement*=right]) #contents{--sp-overlay-from:translateX(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=bottom]) #contents{--sp-overlay-from:translateY(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=left]) #contents{--sp-overlay-from:translateX(var(--spectrum-global-dimension-size-75))}:host([animating]) ::slotted(*){pointer-events:none}#contents ::slotted(*){position:relative}
`));

var top='top';var bottom='bottom';var right='right';var left='left';var auto='auto';var basePlacements=[top,bottom,right,left];var start='start';var end='end';var clippingParents='clippingParents';var viewport='viewport';var popper='popper';var reference='reference';var variationPlacements=/*#__PURE__*/basePlacements.reduce(function(acc,placement){return acc.concat([placement+"-"+start,placement+"-"+end]);},[]);var placements=/*#__PURE__*/[].concat(basePlacements,[auto]).reduce(function(acc,placement){return acc.concat([placement,placement+"-"+start,placement+"-"+end]);},[]);// modifiers that need to read the DOM
var beforeRead='beforeRead';var read='read';var afterRead='afterRead';// pure-logic modifiers
var beforeMain='beforeMain';var main='main';var afterMain='afterMain';// modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite='beforeWrite';var write='write';var afterWrite='afterWrite';var modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];

function getBasePlacement(placement){return placement.split('-')[0];}

function getBoundingClientRect(element){var rect=element.getBoundingClientRect();return {width:rect.width,height:rect.height,top:rect.top,right:rect.right,bottom:rect.bottom,left:rect.left,x:rect.left,y:rect.top};}

// means it doesn't take into account transforms.
function getLayoutRect(element){var clientRect=getBoundingClientRect(element);// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
var width=element.offsetWidth;var height=element.offsetHeight;if(Math.abs(clientRect.width-width)<=1){width=clientRect.width;}if(Math.abs(clientRect.height-height)<=1){height=clientRect.height;}return {x:element.offsetLeft,y:element.offsetTop,width:width,height:height};}

function getWindow(node){if(node==null){return window;}if(node.toString()!=='[object Window]'){var ownerDocument=node.ownerDocument;return ownerDocument?ownerDocument.defaultView||window:window;}return node;}

function isElement(node){var OwnElement=getWindow(node).Element;return node instanceof OwnElement||node instanceof Element;}function isHTMLElement(node){var OwnElement=getWindow(node).HTMLElement;return node instanceof OwnElement||node instanceof HTMLElement;}function isShadowRoot(node){// IE 11 has no ShadowRoot
if(typeof ShadowRoot==='undefined'){return false;}var OwnElement=getWindow(node).ShadowRoot;return node instanceof OwnElement||node instanceof ShadowRoot;}

function contains(parent,child){var rootNode=child.getRootNode&&child.getRootNode();// First, attempt with faster native method
if(parent.contains(child)){return true;}// then fallback to custom implementation with Shadow DOM support
else if(rootNode&&isShadowRoot(rootNode)){var next=child;do{if(next&&parent.isSameNode(next)){return true;}// $FlowFixMe[prop-missing]: need a better way to handle this...
next=next.parentNode||next.host;}while(next);}// Give up, the result is false
return false;}

function getNodeName(element){return element?(element.nodeName||'').toLowerCase():null;}

function getComputedStyle$1(element){return getWindow(element).getComputedStyle(element);}

function isTableElement(element){return ['table','td','th'].indexOf(getNodeName(element))>=0;}

function getDocumentElement(element){// $FlowFixMe[incompatible-return]: assume body is always available
return ((isElement(element)?element.ownerDocument:// $FlowFixMe[prop-missing]
element.document)||window.document).documentElement;}

function getParentNode(element){if(getNodeName(element)==='html'){return element;}return(// this is a quicker (but less type safe) way to save quite some bytes from the bundle
// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
element.assignedSlot||// step into the shadow DOM of the parent of a slotted node
element.parentNode||(// DOM Element detected
isShadowRoot(element)?element.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
getDocumentElement(element)// fallback
);}

function getTrueOffsetParent(element){if(!isHTMLElement(element)||// https://github.com/popperjs/popper-core/issues/837
getComputedStyle$1(element).position==='fixed'){return null;}return element.offsetParent;}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element){var isFirefox=navigator.userAgent.toLowerCase().indexOf('firefox')!==-1;var isIE=navigator.userAgent.indexOf('Trident')!==-1;if(isIE&&isHTMLElement(element)){// In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
var elementCss=getComputedStyle$1(element);if(elementCss.position==='fixed'){return null;}}var currentNode=getParentNode(element);while(isHTMLElement(currentNode)&&['html','body'].indexOf(getNodeName(currentNode))<0){var css=getComputedStyle$1(currentNode);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if(css.transform!=='none'||css.perspective!=='none'||css.contain==='paint'||['transform','perspective'].indexOf(css.willChange)!==-1||isFirefox&&css.willChange==='filter'||isFirefox&&css.filter&&css.filter!=='none'){return currentNode;}else {currentNode=currentNode.parentNode;}}return null;}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element){var window=getWindow(element);var offsetParent=getTrueOffsetParent(element);while(offsetParent&&isTableElement(offsetParent)&&getComputedStyle$1(offsetParent).position==='static'){offsetParent=getTrueOffsetParent(offsetParent);}if(offsetParent&&(getNodeName(offsetParent)==='html'||getNodeName(offsetParent)==='body'&&getComputedStyle$1(offsetParent).position==='static')){return window;}return offsetParent||getContainingBlock(element)||window;}

function getMainAxisFromPlacement(placement){return ['top','bottom'].indexOf(placement)>=0?'x':'y';}

var max=Math.max;var min=Math.min;var round=Math.round;

function within(min$1,value,max$1){return max(min$1,min(value,max$1));}

function getFreshSideObject(){return {top:0,right:0,bottom:0,left:0};}

function mergePaddingObject(paddingObject){return Object.assign({},getFreshSideObject(),paddingObject);}

function expandToHashMap(value,keys){return keys.reduce(function(hashMap,key){hashMap[key]=value;return hashMap;},{});}

var toPaddingObject=function toPaddingObject(padding,state){padding=typeof padding==='function'?padding(Object.assign({},state.rects,{placement:state.placement})):padding;return mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));};function arrow(_ref){var _state$modifiersData$;var state=_ref.state,name=_ref.name,options=_ref.options;var arrowElement=state.elements.arrow;var popperOffsets=state.modifiersData.popperOffsets;var basePlacement=getBasePlacement(state.placement);var axis=getMainAxisFromPlacement(basePlacement);var isVertical=[left,right].indexOf(basePlacement)>=0;var len=isVertical?'height':'width';if(!arrowElement||!popperOffsets){return;}var paddingObject=toPaddingObject(options.padding,state);var arrowRect=getLayoutRect(arrowElement);var minProp=axis==='y'?top:left;var maxProp=axis==='y'?bottom:right;var endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len];var startDiff=popperOffsets[axis]-state.rects.reference[axis];var arrowOffsetParent=getOffsetParent(arrowElement);var clientSize=arrowOffsetParent?axis==='y'?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0;var centerToReference=endDiff/2-startDiff/2;// Make sure the arrow doesn't overflow the popper if the center point is
// outside of the popper bounds
var min=paddingObject[minProp];var max=clientSize-arrowRect[len]-paddingObject[maxProp];var center=clientSize/2-arrowRect[len]/2+centerToReference;var offset=within(min,center,max);// Prevents breaking syntax highlighting...
var axisProp=axis;state.modifiersData[name]=(_state$modifiersData$={},_state$modifiersData$[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$);}function effect(_ref2){var state=_ref2.state,options=_ref2.options;var _options$element=options.element,arrowElement=_options$element===void 0?'[data-popper-arrow]':_options$element;if(arrowElement==null){return;}// CSS selector
if(typeof arrowElement==='string'){arrowElement=state.elements.popper.querySelector(arrowElement);if(!arrowElement){return;}}if(false){if(!isHTMLElement(arrowElement)){console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).','To use an SVG arrow, wrap it in an HTMLElement that will be used as','the arrow.'].join(' '));}}if(!contains(state.elements.popper,arrowElement)){if(false){console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper','element.'].join(' '));}return;}state.elements.arrow=arrowElement;}// eslint-disable-next-line import/no-unused-modules
var arrow$1 = {name:'arrow',enabled:true,phase:'main',fn:arrow,effect:effect,requires:['popperOffsets'],requiresIfExists:['preventOverflow']};

var hash={left:'right',right:'left',bottom:'top',top:'bottom'};function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,function(matched){return hash[matched];});}

var hash$1={start:'end',end:'start'};function getOppositeVariationPlacement(placement){return placement.replace(/start|end/g,function(matched){return hash$1[matched];});}

function getWindowScroll(node){var win=getWindow(node);var scrollLeft=win.pageXOffset;var scrollTop=win.pageYOffset;return {scrollLeft:scrollLeft,scrollTop:scrollTop};}

function getWindowScrollBarX(element){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return getBoundingClientRect(getDocumentElement(element)).left+getWindowScroll(element).scrollLeft;}

function getViewportRect(element){var win=getWindow(element);var html=getDocumentElement(element);var visualViewport=win.visualViewport;var width=html.clientWidth;var height=html.clientHeight;var x=0;var y=0;// NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
// can be obscured underneath it.
// Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
// if it isn't open, so if this isn't available, the popper will be detected
// to overflow the bottom of the screen too early.
if(visualViewport){width=visualViewport.width;height=visualViewport.height;// Uses Layout Viewport (like Chrome; Safari does not currently)
// In Chrome, it returns a value very close to 0 (+/-) but contains rounding
// errors due to floating point numbers, so we need to check precision.
// Safari returns a number <= 0, usually < -1 when pinch-zoomed
// Feature detection fails in mobile emulation mode in Chrome.
// Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
// 0.001
// Fallback here: "Not Safari" userAgent
if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){x=visualViewport.offsetLeft;y=visualViewport.offsetTop;}}return {width:width,height:height,x:x+getWindowScrollBarX(element),y:y};}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element){var _element$ownerDocumen;var html=getDocumentElement(element);var winScroll=getWindowScroll(element);var body=(_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body;var width=max(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0);var height=max(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0);var x=-winScroll.scrollLeft+getWindowScrollBarX(element);var y=-winScroll.scrollTop;if(getComputedStyle$1(body||html).direction==='rtl'){x+=max(html.clientWidth,body?body.clientWidth:0)-width;}return {width:width,height:height,x:x,y:y};}

function isScrollParent(element){// Firefox wants us to check `-x` and `-y` variations as well
var _getComputedStyle=getComputedStyle$1(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return /auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX);}

function getScrollParent(node){if(['html','body','#document'].indexOf(getNodeName(node))>=0){// $FlowFixMe[incompatible-return]: assume body is always available
return node.ownerDocument.body;}if(isHTMLElement(node)&&isScrollParent(node)){return node;}return getScrollParent(getParentNode(node));}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/function listScrollParents(element,list){var _element$ownerDocumen;if(list===void 0){list=[];}var scrollParent=getScrollParent(element);var isBody=scrollParent===((_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body);var win=getWindow(scrollParent);var target=isBody?[win].concat(win.visualViewport||[],isScrollParent(scrollParent)?scrollParent:[]):scrollParent;var updatedList=list.concat(target);return isBody?updatedList:// $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
updatedList.concat(listScrollParents(getParentNode(target)));}

function rectToClientRect(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height});}

function getInnerBoundingClientRect(element){var rect=getBoundingClientRect(element);rect.top=rect.top+element.clientTop;rect.left=rect.left+element.clientLeft;rect.bottom=rect.top+element.clientHeight;rect.right=rect.left+element.clientWidth;rect.width=element.clientWidth;rect.height=element.clientHeight;rect.x=rect.left;rect.y=rect.top;return rect;}function getClientRectFromMixedType(element,clippingParent){return clippingParent===viewport?rectToClientRect(getViewportRect(element)):isHTMLElement(clippingParent)?getInnerBoundingClientRect(clippingParent):rectToClientRect(getDocumentRect(getDocumentElement(element)));}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element){var clippingParents=listScrollParents(getParentNode(element));var canEscapeClipping=['absolute','fixed'].indexOf(getComputedStyle$1(element).position)>=0;var clipperElement=canEscapeClipping&&isHTMLElement(element)?getOffsetParent(element):element;if(!isElement(clipperElement)){return [];}// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return clippingParents.filter(function(clippingParent){return isElement(clippingParent)&&contains(clippingParent,clipperElement)&&getNodeName(clippingParent)!=='body';});}// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect(element,boundary,rootBoundary){var mainClippingParents=boundary==='clippingParents'?getClippingParents(element):[].concat(boundary);var clippingParents=[].concat(mainClippingParents,[rootBoundary]);var firstClippingParent=clippingParents[0];var clippingRect=clippingParents.reduce(function(accRect,clippingParent){var rect=getClientRectFromMixedType(element,clippingParent);accRect.top=max(rect.top,accRect.top);accRect.right=min(rect.right,accRect.right);accRect.bottom=min(rect.bottom,accRect.bottom);accRect.left=max(rect.left,accRect.left);return accRect;},getClientRectFromMixedType(element,firstClippingParent));clippingRect.width=clippingRect.right-clippingRect.left;clippingRect.height=clippingRect.bottom-clippingRect.top;clippingRect.x=clippingRect.left;clippingRect.y=clippingRect.top;return clippingRect;}

function getVariation(placement){return placement.split('-')[1];}

function computeOffsets(_ref){var reference=_ref.reference,element=_ref.element,placement=_ref.placement;var basePlacement=placement?getBasePlacement(placement):null;var variation=placement?getVariation(placement):null;var commonX=reference.x+reference.width/2-element.width/2;var commonY=reference.y+reference.height/2-element.height/2;var offsets;switch(basePlacement){case top:offsets={x:commonX,y:reference.y-element.height};break;case bottom:offsets={x:commonX,y:reference.y+reference.height};break;case right:offsets={x:reference.x+reference.width,y:commonY};break;case left:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y};}var mainAxis=basePlacement?getMainAxisFromPlacement(basePlacement):null;if(mainAxis!=null){var len=mainAxis==='y'?'height':'width';switch(variation){case start:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case end:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2);break;default:}}return offsets;}

function detectOverflow(state,options){if(options===void 0){options={};}var _options=options,_options$placement=_options.placement,placement=_options$placement===void 0?state.placement:_options$placement,_options$boundary=_options.boundary,boundary=_options$boundary===void 0?clippingParents:_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=_options$rootBoundary===void 0?viewport:_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=_options$elementConte===void 0?popper:_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=_options$altBoundary===void 0?false:_options$altBoundary,_options$padding=_options.padding,padding=_options$padding===void 0?0:_options$padding;var paddingObject=mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));var altContext=elementContext===popper?reference:popper;var referenceElement=state.elements.reference;var popperRect=state.rects.popper;var element=state.elements[altBoundary?altContext:elementContext];var clippingClientRect=getClippingRect(isElement(element)?element:element.contextElement||getDocumentElement(state.elements.popper),boundary,rootBoundary);var referenceClientRect=getBoundingClientRect(referenceElement);var popperOffsets=computeOffsets({reference:referenceClientRect,element:popperRect,strategy:'absolute',placement:placement});var popperClientRect=rectToClientRect(Object.assign({},popperRect,popperOffsets));var elementClientRect=elementContext===popper?popperClientRect:referenceClientRect;// positive = overflowing the clipping rect
// 0 or negative = within the clipping rect
var overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right};var offsetData=state.modifiersData.offset;// Offsets can be applied only to the popper element
if(elementContext===popper&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach(function(key){var multiply=[right,bottom].indexOf(key)>=0?1:-1;var axis=[top,bottom].indexOf(key)>=0?'y':'x';overflowOffsets[key]+=offset[axis]*multiply;});}return overflowOffsets;}

function computeAutoPlacement(state,options){if(options===void 0){options={};}var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=_options$allowedAutoP===void 0?placements:_options$allowedAutoP;var variation=getVariation(placement);var placements$1=variation?flipVariations?variationPlacements:variationPlacements.filter(function(placement){return getVariation(placement)===variation;}):basePlacements;var allowedPlacements=placements$1.filter(function(placement){return allowedAutoPlacements.indexOf(placement)>=0;});if(allowedPlacements.length===0){allowedPlacements=placements$1;if(false){console.error(['Popper: The `allowedAutoPlacements` option did not allow any','placements. Ensure the `placement` option matches the variation','of the allowed placements.','For example, "auto" cannot be used to allow "bottom-start".','Use "auto-start" instead.'].join(' '));}}// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var overflows=allowedPlacements.reduce(function(acc,placement){acc[placement]=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding})[getBasePlacement(placement)];return acc;},{});return Object.keys(overflows).sort(function(a,b){return overflows[a]-overflows[b];});}

function getExpandedFallbackPlacements(placement){if(getBasePlacement(placement)===auto){return [];}var oppositePlacement=getOppositePlacement(placement);return [getOppositeVariationPlacement(placement),oppositePlacement,getOppositeVariationPlacement(oppositePlacement)];}function flip(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(state.modifiersData[name]._skip){return;}var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?true:_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=_options$flipVariatio===void 0?true:_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements;var preferredPlacement=state.options.placement;var basePlacement=getBasePlacement(preferredPlacement);var isBasePlacement=basePlacement===preferredPlacement;var fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipVariations?[getOppositePlacement(preferredPlacement)]:getExpandedFallbackPlacements(preferredPlacement));var placements=[preferredPlacement].concat(fallbackPlacements).reduce(function(acc,placement){return acc.concat(getBasePlacement(placement)===auto?computeAutoPlacement(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding,flipVariations:flipVariations,allowedAutoPlacements:allowedAutoPlacements}):placement);},[]);var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var checksMap=new Map();var makeFallbackChecks=true;var firstFittingPlacement=placements[0];for(var i=0;i<placements.length;i++){var placement=placements[i];var _basePlacement=getBasePlacement(placement);var isStartVariation=getVariation(placement)===start;var isVertical=[top,bottom].indexOf(_basePlacement)>=0;var len=isVertical?'width':'height';var overflow=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,altBoundary:altBoundary,padding:padding});var mainVariationSide=isVertical?isStartVariation?right:left:isStartVariation?bottom:top;if(referenceRect[len]>popperRect[len]){mainVariationSide=getOppositePlacement(mainVariationSide);}var altVariationSide=getOppositePlacement(mainVariationSide);var checks=[];if(checkMainAxis){checks.push(overflow[_basePlacement]<=0);}if(checkAltAxis){checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0);}if(checks.every(function(check){return check;})){firstFittingPlacement=placement;makeFallbackChecks=false;break;}checksMap.set(placement,checks);}if(makeFallbackChecks){// `2` may be desired in some cases – research later
var numberOfChecks=flipVariations?3:1;var _loop=function _loop(_i){var fittingPlacement=placements.find(function(placement){var checks=checksMap.get(placement);if(checks){return checks.slice(0,_i).every(function(check){return check;});}});if(fittingPlacement){firstFittingPlacement=fittingPlacement;return "break";}};for(var _i=numberOfChecks;_i>0;_i--){var _ret=_loop(_i);if(_ret==="break")break;}}if(state.placement!==firstFittingPlacement){state.modifiersData[name]._skip=true;state.placement=firstFittingPlacement;state.reset=true;}}// eslint-disable-next-line import/no-unused-modules
var flip$1 = {name:'flip',enabled:true,phase:'main',fn:flip,requiresIfExists:['offset'],data:{_skip:false}};

function distanceAndSkiddingToXY(placement,rects,offset){var basePlacement=getBasePlacement(placement);var invertDistance=[left,top].indexOf(basePlacement)>=0?-1:1;var _ref=typeof offset==='function'?offset(Object.assign({},rects,{placement:placement})):offset,skidding=_ref[0],distance=_ref[1];skidding=skidding||0;distance=(distance||0)*invertDistance;return [left,right].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance};}function offset(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name;var _options$offset=options.offset,offset=_options$offset===void 0?[0,0]:_options$offset;var data=placements.reduce(function(acc,placement){acc[placement]=distanceAndSkiddingToXY(placement,state.rects,offset);return acc;},{});var _data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;if(state.modifiersData.popperOffsets!=null){state.modifiersData.popperOffsets.x+=x;state.modifiersData.popperOffsets.y+=y;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var offset$1 = {name:'offset',enabled:true,phase:'main',requires:['popperOffsets'],fn:offset};

function getAltAxis(axis){return axis==='x'?'y':'x';}

function preventOverflow(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?false:_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=_options$tether===void 0?true:_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=_options$tetherOffset===void 0?0:_options$tetherOffset;var overflow=detectOverflow(state,{boundary:boundary,rootBoundary:rootBoundary,padding:padding,altBoundary:altBoundary});var basePlacement=getBasePlacement(state.placement);var variation=getVariation(state.placement);var isBasePlacement=!variation;var mainAxis=getMainAxisFromPlacement(basePlacement);var altAxis=getAltAxis(mainAxis);var popperOffsets=state.modifiersData.popperOffsets;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var tetherOffsetValue=typeof tetherOffset==='function'?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset;var data={x:0,y:0};if(!popperOffsets){return;}if(checkMainAxis||checkAltAxis){var mainSide=mainAxis==='y'?top:left;var altSide=mainAxis==='y'?bottom:right;var len=mainAxis==='y'?'height':'width';var offset=popperOffsets[mainAxis];var min$1=popperOffsets[mainAxis]+overflow[mainSide];var max$1=popperOffsets[mainAxis]-overflow[altSide];var additive=tether?-popperRect[len]/2:0;var minLen=variation===start?referenceRect[len]:popperRect[len];var maxLen=variation===start?-popperRect[len]:-referenceRect[len];// We need to include the arrow in the calculation so the arrow doesn't go
// outside the reference bounds
var arrowElement=state.elements.arrow;var arrowRect=tether&&arrowElement?getLayoutRect(arrowElement):{width:0,height:0};var arrowPaddingObject=state.modifiersData['arrow#persistent']?state.modifiersData['arrow#persistent'].padding:getFreshSideObject();var arrowPaddingMin=arrowPaddingObject[mainSide];var arrowPaddingMax=arrowPaddingObject[altSide];// If the reference length is smaller than the arrow length, we don't want
// to include its full size in the calculation. If the reference is small
// and near the edge of a boundary, the popper can overflow even if the
// reference is not overflowing as well (e.g. virtual elements with no
// width or height)
var arrowLen=within(0,referenceRect[len],arrowRect[len]);var minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-tetherOffsetValue:minLen-arrowLen-arrowPaddingMin-tetherOffsetValue;var maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+tetherOffsetValue:maxLen+arrowLen+arrowPaddingMax+tetherOffsetValue;var arrowOffsetParent=state.elements.arrow&&getOffsetParent(state.elements.arrow);var clientOffset=arrowOffsetParent?mainAxis==='y'?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0;var offsetModifierValue=state.modifiersData.offset?state.modifiersData.offset[state.placement][mainAxis]:0;var tetherMin=popperOffsets[mainAxis]+minOffset-offsetModifierValue-clientOffset;var tetherMax=popperOffsets[mainAxis]+maxOffset-offsetModifierValue;if(checkMainAxis){var preventedOffset=within(tether?min(min$1,tetherMin):min$1,offset,tether?max(max$1,tetherMax):max$1);popperOffsets[mainAxis]=preventedOffset;data[mainAxis]=preventedOffset-offset;}if(checkAltAxis){var _mainSide=mainAxis==='x'?top:left;var _altSide=mainAxis==='x'?bottom:right;var _offset=popperOffsets[altAxis];var _min=_offset+overflow[_mainSide];var _max=_offset-overflow[_altSide];var _preventedOffset=within(tether?min(_min,tetherMin):_min,_offset,tether?max(_max,tetherMax):_max);popperOffsets[altAxis]=_preventedOffset;data[altAxis]=_preventedOffset-_offset;}}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var preventOverflow$1 = {name:'preventOverflow',enabled:true,phase:'main',fn:preventOverflow,requiresIfExists:['offset']};

function getHTMLElementScroll(element){return {scrollLeft:element.scrollLeft,scrollTop:element.scrollTop};}

function getNodeScroll(node){if(node===getWindow(node)||!isHTMLElement(node)){return getWindowScroll(node);}else {return getHTMLElementScroll(node);}}

// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement,offsetParent,isFixed){if(isFixed===void 0){isFixed=false;}var documentElement=getDocumentElement(offsetParent);var rect=getBoundingClientRect(elementOrVirtualElement);var isOffsetParentAnElement=isHTMLElement(offsetParent);var scroll={scrollLeft:0,scrollTop:0};var offsets={x:0,y:0};if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed){if(getNodeName(offsetParent)!=='body'||// https://github.com/popperjs/popper-core/issues/1078
isScrollParent(documentElement)){scroll=getNodeScroll(offsetParent);}if(isHTMLElement(offsetParent)){offsets=getBoundingClientRect(offsetParent);offsets.x+=offsetParent.clientLeft;offsets.y+=offsetParent.clientTop;}else if(documentElement){offsets.x=getWindowScrollBarX(documentElement);}}return {x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height};}

function order(modifiers){var map=new Map();var visited=new Set();var result=[];modifiers.forEach(function(modifier){map.set(modifier.name,modifier);});// On visiting object, check for its dependencies and visit them recursively
function sort(modifier){visited.add(modifier.name);var requires=[].concat(modifier.requires||[],modifier.requiresIfExists||[]);requires.forEach(function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);if(depModifier){sort(depModifier);}}});result.push(modifier);}modifiers.forEach(function(modifier){if(!visited.has(modifier.name)){// check for visited object
sort(modifier);}});return result;}function orderModifiers(modifiers){// order based on dependencies
var orderedModifiers=order(modifiers);// order based on phase
return modifierPhases.reduce(function(acc,phase){return acc.concat(orderedModifiers.filter(function(modifier){return modifier.phase===phase;}));},[]);}

function debounce(fn){var pending;return function(){if(!pending){pending=new Promise(function(resolve){Promise.resolve().then(function(){pending=undefined;resolve(fn());});});}return pending;};}

function format(str){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}return [].concat(args).reduce(function(p,c){return p.replace(/%s/,c);},str);}

var INVALID_MODIFIER_ERROR='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';var MISSING_DEPENDENCY_ERROR='Popper: modifier "%s" requires "%s", but "%s" modifier is not available';var VALID_PROPERTIES=['name','enabled','phase','fn','effect','requires','options'];function validateModifiers(modifiers){modifiers.forEach(function(modifier){Object.keys(modifier).forEach(function(key){switch(key){case'name':if(typeof modifier.name!=='string'){console.error(format(INVALID_MODIFIER_ERROR,String(modifier.name),'"name"','"string"',"\""+String(modifier.name)+"\""));}break;case'enabled':if(typeof modifier.enabled!=='boolean'){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"enabled"','"boolean"',"\""+String(modifier.enabled)+"\""));}case'phase':if(modifierPhases.indexOf(modifier.phase)<0){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"phase"',"either "+modifierPhases.join(', '),"\""+String(modifier.phase)+"\""));}break;case'fn':if(typeof modifier.fn!=='function'){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"fn"','"function"',"\""+String(modifier.fn)+"\""));}break;case'effect':if(typeof modifier.effect!=='function'){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"effect"','"function"',"\""+String(modifier.fn)+"\""));}break;case'requires':if(!Array.isArray(modifier.requires)){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"requires"','"array"',"\""+String(modifier.requires)+"\""));}break;case'requiresIfExists':if(!Array.isArray(modifier.requiresIfExists)){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"requiresIfExists"','"array"',"\""+String(modifier.requiresIfExists)+"\""));}break;case'options':case'data':break;default:console.error("PopperJS: an invalid property has been provided to the \""+modifier.name+"\" modifier, valid properties are "+VALID_PROPERTIES.map(function(s){return "\""+s+"\"";}).join(', ')+"; but \""+key+"\" was provided.");}modifier.requires&&modifier.requires.forEach(function(requirement){if(modifiers.find(function(mod){return mod.name===requirement;})==null){console.error(format(MISSING_DEPENDENCY_ERROR,String(modifier.name),requirement,requirement));}});});});}

function uniqueBy(arr,fn){var identifiers=new Set();return arr.filter(function(item){var identifier=fn(item);if(!identifiers.has(identifier)){identifiers.add(identifier);return true;}});}

function mergeByName(modifiers){var merged=modifiers.reduce(function(merged,current){var existing=merged[current.name];merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current;return merged;},{});// IE11 does not support Object.values
return Object.keys(merged).map(function(key){return merged[key];});}

var INVALID_ELEMENT_ERROR='Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';var INFINITE_LOOP_ERROR='Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';var DEFAULT_OPTIONS={placement:'bottom',modifiers:[],strategy:'absolute'};function areValidElements(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return !args.some(function(element){return !(element&&typeof element.getBoundingClientRect==='function');});}function popperGenerator(generatorOptions){if(generatorOptions===void 0){generatorOptions={};}var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=_generatorOptions$def===void 0?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=_generatorOptions$def2===void 0?DEFAULT_OPTIONS:_generatorOptions$def2;return function createPopper(reference,popper,options){if(options===void 0){options=defaultOptions;}var state={placement:'bottom',orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,defaultOptions),modifiersData:{},elements:{reference:reference,popper:popper},attributes:{},styles:{}};var effectCleanupFns=[];var isDestroyed=false;var instance={state:state,setOptions:function setOptions(options){cleanupModifierEffects();state.options=Object.assign({},defaultOptions,state.options,options);state.scrollParents={reference:isElement(reference)?listScrollParents(reference):reference.contextElement?listScrollParents(reference.contextElement):[],popper:listScrollParents(popper)};// Orders the modifiers based on their dependencies and `phase`
// properties
var orderedModifiers=orderModifiers(mergeByName([].concat(defaultModifiers,state.options.modifiers)));// Strip out disabled modifiers
state.orderedModifiers=orderedModifiers.filter(function(m){return m.enabled;});// Validate the provided modifiers so that the consumer will get warned
// if one of the modifiers is invalid for any reason
if(false){var modifiers=uniqueBy([].concat(orderedModifiers,state.options.modifiers),function(_ref){var name=_ref.name;return name;});validateModifiers(modifiers);if(getBasePlacement(state.options.placement)===auto){var flipModifier=state.orderedModifiers.find(function(_ref2){var name=_ref2.name;return name==='flip';});if(!flipModifier){console.error(['Popper: "auto" placements require the "flip" modifier be','present and enabled to work.'].join(' '));}}var _getComputedStyle=getComputedStyle$1(popper),marginTop=_getComputedStyle.marginTop,marginRight=_getComputedStyle.marginRight,marginBottom=_getComputedStyle.marginBottom,marginLeft=_getComputedStyle.marginLeft;// We no longer take into account `margins` on the popper, and it can
// cause bugs with positioning, so we'll warn the consumer
if([marginTop,marginRight,marginBottom,marginLeft].some(function(margin){return parseFloat(margin);})){console.warn(['Popper: CSS "margin" styles cannot be used to apply padding','between the popper and its reference element or boundary.','To replicate margin, use the `offset` modifier, as well as','the `padding` option in the `preventOverflow` and `flip`','modifiers.'].join(' '));}}runModifierEffects();return instance.update();},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function forceUpdate(){if(isDestroyed){return;}var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(!areValidElements(reference,popper)){if(false){console.error(INVALID_ELEMENT_ERROR);}return;}// Store the reference and popper rects to be read by modifiers
state.rects={reference:getCompositeRect(reference,getOffsetParent(popper),state.options.strategy==='fixed'),popper:getLayoutRect(popper)};// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
state.reset=false;state.placement=state.options.placement;// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
state.orderedModifiers.forEach(function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data);});var __debug_loops__=0;for(var index=0;index<state.orderedModifiers.length;index++){if(false){__debug_loops__+=1;if(__debug_loops__>100){console.error(INFINITE_LOOP_ERROR);break;}}if(state.reset===true){state.reset=false;index=-1;continue;}var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=_state$orderedModifie2===void 0?{}:_state$orderedModifie2,name=_state$orderedModifie.name;if(typeof fn==='function'){state=fn({state:state,options:_options,name:name,instance:instance})||state;}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:debounce(function(){return new Promise(function(resolve){instance.forceUpdate();resolve(state);});}),destroy:function destroy(){cleanupModifierEffects();isDestroyed=true;}};if(!areValidElements(reference,popper)){if(false){console.error(INVALID_ELEMENT_ERROR);}return instance;}instance.setOptions(options).then(function(state){if(!isDestroyed&&options.onFirstUpdate){options.onFirstUpdate(state);}});// Modifiers have the ability to execute arbitrary code before the first
// update cycle runs. They will be executed in the same order as the update
// cycle. This is useful when a modifier adds some persistent data that
// other modifiers need to use, but the modifier is run after the dependent
// one.
function runModifierEffects(){state.orderedModifiers.forEach(function(_ref3){var name=_ref3.name,_ref3$options=_ref3.options,options=_ref3$options===void 0?{}:_ref3$options,effect=_ref3.effect;if(typeof effect==='function'){var cleanupFn=effect({state:state,name:name,instance:instance,options:options});var noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn);}});}function cleanupModifierEffects(){effectCleanupFns.forEach(function(fn){return fn();});effectCleanupFns=[];}return instance;};}var createPopper=/*#__PURE__*/popperGenerator();// eslint-disable-next-line import/no-unused-modules

var passive={passive:true};function effect$1(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options;var _options$scroll=options.scroll,scroll=_options$scroll===void 0?true:_options$scroll,_options$resize=options.resize,resize=_options$resize===void 0?true:_options$resize;var window=getWindow(state.elements.popper);var scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.addEventListener('scroll',instance.update,passive);});}if(resize){window.addEventListener('resize',instance.update,passive);}return function(){if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.removeEventListener('scroll',instance.update,passive);});}if(resize){window.removeEventListener('resize',instance.update,passive);}};}// eslint-disable-next-line import/no-unused-modules
var eventListeners = {name:'eventListeners',enabled:true,phase:'write',fn:function fn(){},effect:effect$1,data:{}};

function popperOffsets(_ref){var state=_ref.state,name=_ref.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
state.modifiersData[name]=computeOffsets({reference:state.rects.reference,element:state.rects.popper,strategy:'absolute',placement:state.placement});}// eslint-disable-next-line import/no-unused-modules
var popperOffsets$1 = {name:'popperOffsets',enabled:true,phase:'read',fn:popperOffsets,data:{}};

var unsetSides={top:'auto',right:'auto',bottom:'auto',left:'auto'};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref){var x=_ref.x,y=_ref.y;var win=window;var dpr=win.devicePixelRatio||1;return {x:round(round(x*dpr)/dpr)||0,y:round(round(y*dpr)/dpr)||0};}function mapToStyles(_ref2){var _Object$assign2;var popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets;var _ref3=roundOffsets===true?roundOffsetsByDPR(offsets):typeof roundOffsets==='function'?roundOffsets(offsets):offsets,_ref3$x=_ref3.x,x=_ref3$x===void 0?0:_ref3$x,_ref3$y=_ref3.y,y=_ref3$y===void 0?0:_ref3$y;var hasX=offsets.hasOwnProperty('x');var hasY=offsets.hasOwnProperty('y');var sideX=left;var sideY=top;var win=window;if(adaptive){var offsetParent=getOffsetParent(popper);var heightProp='clientHeight';var widthProp='clientWidth';if(offsetParent===getWindow(popper)){offsetParent=getDocumentElement(popper);if(getComputedStyle$1(offsetParent).position!=='static'){heightProp='scrollHeight';widthProp='scrollWidth';}}// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
offsetParent=offsetParent;if(placement===top){sideY=bottom;// $FlowFixMe[prop-missing]
y-=offsetParent[heightProp]-popperRect.height;y*=gpuAcceleration?1:-1;}if(placement===left){sideX=right;// $FlowFixMe[prop-missing]
x-=offsetParent[widthProp]-popperRect.width;x*=gpuAcceleration?1:-1;}}var commonStyles=Object.assign({position:position},adaptive&&unsetSides);if(gpuAcceleration){var _Object$assign;return Object.assign({},commonStyles,(_Object$assign={},_Object$assign[sideY]=hasY?'0':'',_Object$assign[sideX]=hasX?'0':'',_Object$assign.transform=(win.devicePixelRatio||1)<2?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign));}return Object.assign({},commonStyles,(_Object$assign2={},_Object$assign2[sideY]=hasY?y+"px":'',_Object$assign2[sideX]=hasX?x+"px":'',_Object$assign2.transform='',_Object$assign2));}function computeStyles(_ref4){var state=_ref4.state,options=_ref4.options;var _options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=_options$gpuAccelerat===void 0?true:_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=_options$adaptive===void 0?true:_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=_options$roundOffsets===void 0?true:_options$roundOffsets;if(false){var transitionProperty=getComputedStyle$1(state.elements.popper).transitionProperty||'';if(adaptive&&['transform','top','right','bottom','left'].some(function(property){return transitionProperty.indexOf(property)>=0;})){console.warn(['Popper: Detected CSS transitions on at least one of the following','CSS properties: "transform", "top", "right", "bottom", "left".','\n\n','Disable the "computeStyles" modifier\'s `adaptive` option to allow','for smooth transitions, or remove these properties from the CSS','transition declaration on the popper element if only transitioning','opacity or background-color for example.','\n\n','We recommend using the popper element as a wrapper around an inner','element that can have any CSS property transitioned for animations.'].join(' '));}}var commonStyles={placement:getBasePlacement(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration:gpuAcceleration};if(state.modifiersData.popperOffsets!=null){state.styles.popper=Object.assign({},state.styles.popper,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive:adaptive,roundOffsets:roundOffsets})));}if(state.modifiersData.arrow!=null){state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:'absolute',adaptive:false,roundOffsets:roundOffsets})));}state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-placement':state.placement});}// eslint-disable-next-line import/no-unused-modules
var computeStyles$1 = {name:'computeStyles',enabled:true,phase:'beforeWrite',fn:computeStyles,data:{}};

// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref){var state=_ref.state;Object.keys(state.elements).forEach(function(name){var style=state.styles[name]||{};var attributes=state.attributes[name]||{};var element=state.elements[name];// arrow is optional + virtual elements
if(!isHTMLElement(element)||!getNodeName(element)){return;}// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(element.style,style);Object.keys(attributes).forEach(function(name){var value=attributes[name];if(value===false){element.removeAttribute(name);}else {element.setAttribute(name,value===true?'':value);}});});}function effect$2(_ref2){var state=_ref2.state;var initialStyles={popper:{position:state.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow){Object.assign(state.elements.arrow.style,initialStyles.arrow);}return function(){Object.keys(state.elements).forEach(function(name){var element=state.elements[name];var attributes=state.attributes[name]||{};var styleProperties=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]);// Set all values to an empty string to unset them
var style=styleProperties.reduce(function(style,property){style[property]='';return style;},{});// arrow is optional + virtual elements
if(!isHTMLElement(element)||!getNodeName(element)){return;}Object.assign(element.style,style);Object.keys(attributes).forEach(function(attribute){element.removeAttribute(attribute);});});};}// eslint-disable-next-line import/no-unused-modules
var applyStyles$1 = {name:'applyStyles',enabled:true,phase:'write',fn:applyStyles,effect:effect$2,requires:['computeStyles']};

var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1];var createPopper$1=/*#__PURE__*/popperGenerator({defaultModifiers:defaultModifiers});// eslint-disable-next-line import/no-unused-modules

var top$1='top';var bottom$1='bottom';var right$1='right';var left$1='left';var auto$1='auto';var basePlacements$1=[top$1,bottom$1,right$1,left$1];var start$1='start';var end$1='end';var clippingParents$1='clippingParents';var viewport$1='viewport';var popper$1='popper';var reference$1='reference';var variationPlacements$1=/*#__PURE__*/basePlacements$1.reduce(function(acc,placement){return acc.concat([placement+"-"+start$1,placement+"-"+end$1]);},[]);var placements$1=/*#__PURE__*/[].concat(basePlacements$1,[auto$1]).reduce(function(acc,placement){return acc.concat([placement,placement+"-"+start$1,placement+"-"+end$1]);},[]);// modifiers that need to read the DOM
var beforeRead$1='beforeRead';var read$1='read';var afterRead$1='afterRead';// pure-logic modifiers
var beforeMain$1='beforeMain';var main$1='main';var afterMain$1='afterMain';// modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite$1='beforeWrite';var write$1='write';var afterWrite$1='afterWrite';var modifierPhases$1=[beforeRead$1,read$1,afterRead$1,beforeMain$1,main$1,afterMain$1,beforeWrite$1,write$1,afterWrite$1];

function getNodeName$1(element){return element?(element.nodeName||'').toLowerCase():null;}

function getWindow$1(node){if(node==null){return window;}if(node.toString()!=='[object Window]'){var ownerDocument=node.ownerDocument;return ownerDocument?ownerDocument.defaultView||window:window;}return node;}

function isElement$1(node){var OwnElement=getWindow$1(node).Element;return node instanceof OwnElement||node instanceof Element;}function isHTMLElement$1(node){var OwnElement=getWindow$1(node).HTMLElement;return node instanceof OwnElement||node instanceof HTMLElement;}function isShadowRoot$1(node){// IE 11 has no ShadowRoot
if(typeof ShadowRoot==='undefined'){return false;}var OwnElement=getWindow$1(node).ShadowRoot;return node instanceof OwnElement||node instanceof ShadowRoot;}

// and applies them to the HTMLElements such as popper and arrow
function applyStyles$2(_ref){var state=_ref.state;Object.keys(state.elements).forEach(function(name){var style=state.styles[name]||{};var attributes=state.attributes[name]||{};var element=state.elements[name];// arrow is optional + virtual elements
if(!isHTMLElement$1(element)||!getNodeName$1(element)){return;}// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(element.style,style);Object.keys(attributes).forEach(function(name){var value=attributes[name];if(value===false){element.removeAttribute(name);}else {element.setAttribute(name,value===true?'':value);}});});}function effect$3(_ref2){var state=_ref2.state;var initialStyles={popper:{position:state.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow){Object.assign(state.elements.arrow.style,initialStyles.arrow);}return function(){Object.keys(state.elements).forEach(function(name){var element=state.elements[name];var attributes=state.attributes[name]||{};var styleProperties=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]);// Set all values to an empty string to unset them
var style=styleProperties.reduce(function(style,property){style[property]='';return style;},{});// arrow is optional + virtual elements
if(!isHTMLElement$1(element)||!getNodeName$1(element)){return;}Object.assign(element.style,style);Object.keys(attributes).forEach(function(attribute){element.removeAttribute(attribute);});});};}// eslint-disable-next-line import/no-unused-modules
var applyStyles$3 = {name:'applyStyles',enabled:true,phase:'write',fn:applyStyles$2,effect:effect$3,requires:['computeStyles']};

function getBasePlacement$1(placement){return placement.split('-')[0];}

function getBoundingClientRect$1(element){var rect=element.getBoundingClientRect();return {width:rect.width,height:rect.height,top:rect.top,right:rect.right,bottom:rect.bottom,left:rect.left,x:rect.left,y:rect.top};}

// means it doesn't take into account transforms.
function getLayoutRect$1(element){var clientRect=getBoundingClientRect$1(element);// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
var width=element.offsetWidth;var height=element.offsetHeight;if(Math.abs(clientRect.width-width)<=1){width=clientRect.width;}if(Math.abs(clientRect.height-height)<=1){height=clientRect.height;}return {x:element.offsetLeft,y:element.offsetTop,width:width,height:height};}

function contains$1(parent,child){var rootNode=child.getRootNode&&child.getRootNode();// First, attempt with faster native method
if(parent.contains(child)){return true;}// then fallback to custom implementation with Shadow DOM support
else if(rootNode&&isShadowRoot$1(rootNode)){var next=child;do{if(next&&parent.isSameNode(next)){return true;}// $FlowFixMe[prop-missing]: need a better way to handle this...
next=next.parentNode||next.host;}while(next);}// Give up, the result is false
return false;}

function getComputedStyle$2(element){return getWindow$1(element).getComputedStyle(element);}

function isTableElement$1(element){return ['table','td','th'].indexOf(getNodeName$1(element))>=0;}

function getDocumentElement$1(element){// $FlowFixMe[incompatible-return]: assume body is always available
return ((isElement$1(element)?element.ownerDocument:// $FlowFixMe[prop-missing]
element.document)||window.document).documentElement;}

function getParentNode$1(element){if(getNodeName$1(element)==='html'){return element;}return(// this is a quicker (but less type safe) way to save quite some bytes from the bundle
// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
element.assignedSlot||// step into the shadow DOM of the parent of a slotted node
element.parentNode||(// DOM Element detected
isShadowRoot$1(element)?element.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
getDocumentElement$1(element)// fallback
);}

function getTrueOffsetParent$1(element){if(!isHTMLElement$1(element)||// https://github.com/popperjs/popper-core/issues/837
getComputedStyle$2(element).position==='fixed'){return null;}return element.offsetParent;}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock$1(element){var isFirefox=navigator.userAgent.toLowerCase().indexOf('firefox')!==-1;var isIE=navigator.userAgent.indexOf('Trident')!==-1;if(isIE&&isHTMLElement$1(element)){// In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
var elementCss=getComputedStyle$2(element);if(elementCss.position==='fixed'){return null;}}var currentNode=getParentNode$1(element);while(isHTMLElement$1(currentNode)&&['html','body'].indexOf(getNodeName$1(currentNode))<0){var css=getComputedStyle$2(currentNode);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if(css.transform!=='none'||css.perspective!=='none'||css.contain==='paint'||['transform','perspective'].indexOf(css.willChange)!==-1||isFirefox&&css.willChange==='filter'||isFirefox&&css.filter&&css.filter!=='none'){return currentNode;}else {currentNode=currentNode.parentNode;}}return null;}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent$1(element){var window=getWindow$1(element);var offsetParent=getTrueOffsetParent$1(element);while(offsetParent&&isTableElement$1(offsetParent)&&getComputedStyle$2(offsetParent).position==='static'){offsetParent=getTrueOffsetParent$1(offsetParent);}if(offsetParent&&(getNodeName$1(offsetParent)==='html'||getNodeName$1(offsetParent)==='body'&&getComputedStyle$2(offsetParent).position==='static')){return window;}return offsetParent||getContainingBlock$1(element)||window;}

function getMainAxisFromPlacement$1(placement){return ['top','bottom'].indexOf(placement)>=0?'x':'y';}

var max$1=Math.max;var min$1=Math.min;var round$1=Math.round;

function within$1(min,value,max){return max$1(min,min$1(value,max));}

function getFreshSideObject$1(){return {top:0,right:0,bottom:0,left:0};}

function mergePaddingObject$1(paddingObject){return Object.assign({},getFreshSideObject$1(),paddingObject);}

function expandToHashMap$1(value,keys){return keys.reduce(function(hashMap,key){hashMap[key]=value;return hashMap;},{});}

var toPaddingObject$1=function toPaddingObject(padding,state){padding=typeof padding==='function'?padding(Object.assign({},state.rects,{placement:state.placement})):padding;return mergePaddingObject$1(typeof padding!=='number'?padding:expandToHashMap$1(padding,basePlacements$1));};function arrow$2(_ref){var _state$modifiersData$;var state=_ref.state,name=_ref.name,options=_ref.options;var arrowElement=state.elements.arrow;var popperOffsets=state.modifiersData.popperOffsets;var basePlacement=getBasePlacement$1(state.placement);var axis=getMainAxisFromPlacement$1(basePlacement);var isVertical=[left$1,right$1].indexOf(basePlacement)>=0;var len=isVertical?'height':'width';if(!arrowElement||!popperOffsets){return;}var paddingObject=toPaddingObject$1(options.padding,state);var arrowRect=getLayoutRect$1(arrowElement);var minProp=axis==='y'?top$1:left$1;var maxProp=axis==='y'?bottom$1:right$1;var endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len];var startDiff=popperOffsets[axis]-state.rects.reference[axis];var arrowOffsetParent=getOffsetParent$1(arrowElement);var clientSize=arrowOffsetParent?axis==='y'?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0;var centerToReference=endDiff/2-startDiff/2;// Make sure the arrow doesn't overflow the popper if the center point is
// outside of the popper bounds
var min=paddingObject[minProp];var max=clientSize-arrowRect[len]-paddingObject[maxProp];var center=clientSize/2-arrowRect[len]/2+centerToReference;var offset=within$1(min,center,max);// Prevents breaking syntax highlighting...
var axisProp=axis;state.modifiersData[name]=(_state$modifiersData$={},_state$modifiersData$[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$);}function effect$4(_ref2){var state=_ref2.state,options=_ref2.options;var _options$element=options.element,arrowElement=_options$element===void 0?'[data-popper-arrow]':_options$element;if(arrowElement==null){return;}// CSS selector
if(typeof arrowElement==='string'){arrowElement=state.elements.popper.querySelector(arrowElement);if(!arrowElement){return;}}if(process.env.NODE_ENV!=="production"){if(!isHTMLElement$1(arrowElement)){console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).','To use an SVG arrow, wrap it in an HTMLElement that will be used as','the arrow.'].join(' '));}}if(!contains$1(state.elements.popper,arrowElement)){if(process.env.NODE_ENV!=="production"){console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper','element.'].join(' '));}return;}state.elements.arrow=arrowElement;}// eslint-disable-next-line import/no-unused-modules
var arrow$3 = {name:'arrow',enabled:true,phase:'main',fn:arrow$2,effect:effect$4,requires:['popperOffsets'],requiresIfExists:['preventOverflow']};

var unsetSides$1={top:'auto',right:'auto',bottom:'auto',left:'auto'};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR$1(_ref){var x=_ref.x,y=_ref.y;var win=window;var dpr=win.devicePixelRatio||1;return {x:round$1(round$1(x*dpr)/dpr)||0,y:round$1(round$1(y*dpr)/dpr)||0};}function mapToStyles$1(_ref2){var _Object$assign2;var popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets;var _ref3=roundOffsets===true?roundOffsetsByDPR$1(offsets):typeof roundOffsets==='function'?roundOffsets(offsets):offsets,_ref3$x=_ref3.x,x=_ref3$x===void 0?0:_ref3$x,_ref3$y=_ref3.y,y=_ref3$y===void 0?0:_ref3$y;var hasX=offsets.hasOwnProperty('x');var hasY=offsets.hasOwnProperty('y');var sideX=left$1;var sideY=top$1;var win=window;if(adaptive){var offsetParent=getOffsetParent$1(popper);var heightProp='clientHeight';var widthProp='clientWidth';if(offsetParent===getWindow$1(popper)){offsetParent=getDocumentElement$1(popper);if(getComputedStyle$2(offsetParent).position!=='static'){heightProp='scrollHeight';widthProp='scrollWidth';}}// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
offsetParent=offsetParent;if(placement===top$1){sideY=bottom$1;// $FlowFixMe[prop-missing]
y-=offsetParent[heightProp]-popperRect.height;y*=gpuAcceleration?1:-1;}if(placement===left$1){sideX=right$1;// $FlowFixMe[prop-missing]
x-=offsetParent[widthProp]-popperRect.width;x*=gpuAcceleration?1:-1;}}var commonStyles=Object.assign({position:position},adaptive&&unsetSides$1);if(gpuAcceleration){var _Object$assign;return Object.assign({},commonStyles,(_Object$assign={},_Object$assign[sideY]=hasY?'0':'',_Object$assign[sideX]=hasX?'0':'',_Object$assign.transform=(win.devicePixelRatio||1)<2?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign));}return Object.assign({},commonStyles,(_Object$assign2={},_Object$assign2[sideY]=hasY?y+"px":'',_Object$assign2[sideX]=hasX?x+"px":'',_Object$assign2.transform='',_Object$assign2));}function computeStyles$2(_ref4){var state=_ref4.state,options=_ref4.options;var _options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=_options$gpuAccelerat===void 0?true:_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=_options$adaptive===void 0?true:_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=_options$roundOffsets===void 0?true:_options$roundOffsets;if(process.env.NODE_ENV!=="production"){var transitionProperty=getComputedStyle$2(state.elements.popper).transitionProperty||'';if(adaptive&&['transform','top','right','bottom','left'].some(function(property){return transitionProperty.indexOf(property)>=0;})){console.warn(['Popper: Detected CSS transitions on at least one of the following','CSS properties: "transform", "top", "right", "bottom", "left".','\n\n','Disable the "computeStyles" modifier\'s `adaptive` option to allow','for smooth transitions, or remove these properties from the CSS','transition declaration on the popper element if only transitioning','opacity or background-color for example.','\n\n','We recommend using the popper element as a wrapper around an inner','element that can have any CSS property transitioned for animations.'].join(' '));}}var commonStyles={placement:getBasePlacement$1(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration:gpuAcceleration};if(state.modifiersData.popperOffsets!=null){state.styles.popper=Object.assign({},state.styles.popper,mapToStyles$1(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive:adaptive,roundOffsets:roundOffsets})));}if(state.modifiersData.arrow!=null){state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles$1(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:'absolute',adaptive:false,roundOffsets:roundOffsets})));}state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-placement':state.placement});}// eslint-disable-next-line import/no-unused-modules
var computeStyles$3 = {name:'computeStyles',enabled:true,phase:'beforeWrite',fn:computeStyles$2,data:{}};

var passive$1={passive:true};function effect$5(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options;var _options$scroll=options.scroll,scroll=_options$scroll===void 0?true:_options$scroll,_options$resize=options.resize,resize=_options$resize===void 0?true:_options$resize;var window=getWindow$1(state.elements.popper);var scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.addEventListener('scroll',instance.update,passive$1);});}if(resize){window.addEventListener('resize',instance.update,passive$1);}return function(){if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.removeEventListener('scroll',instance.update,passive$1);});}if(resize){window.removeEventListener('resize',instance.update,passive$1);}};}// eslint-disable-next-line import/no-unused-modules
var eventListeners$1 = {name:'eventListeners',enabled:true,phase:'write',fn:function fn(){},effect:effect$5,data:{}};

var hash$2={left:'right',right:'left',bottom:'top',top:'bottom'};function getOppositePlacement$1(placement){return placement.replace(/left|right|bottom|top/g,function(matched){return hash$2[matched];});}

var hash$3={start:'end',end:'start'};function getOppositeVariationPlacement$1(placement){return placement.replace(/start|end/g,function(matched){return hash$3[matched];});}

function getWindowScroll$1(node){var win=getWindow$1(node);var scrollLeft=win.pageXOffset;var scrollTop=win.pageYOffset;return {scrollLeft:scrollLeft,scrollTop:scrollTop};}

function getWindowScrollBarX$1(element){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return getBoundingClientRect$1(getDocumentElement$1(element)).left+getWindowScroll$1(element).scrollLeft;}

function getViewportRect$1(element){var win=getWindow$1(element);var html=getDocumentElement$1(element);var visualViewport=win.visualViewport;var width=html.clientWidth;var height=html.clientHeight;var x=0;var y=0;// NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
// can be obscured underneath it.
// Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
// if it isn't open, so if this isn't available, the popper will be detected
// to overflow the bottom of the screen too early.
if(visualViewport){width=visualViewport.width;height=visualViewport.height;// Uses Layout Viewport (like Chrome; Safari does not currently)
// In Chrome, it returns a value very close to 0 (+/-) but contains rounding
// errors due to floating point numbers, so we need to check precision.
// Safari returns a number <= 0, usually < -1 when pinch-zoomed
// Feature detection fails in mobile emulation mode in Chrome.
// Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
// 0.001
// Fallback here: "Not Safari" userAgent
if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){x=visualViewport.offsetLeft;y=visualViewport.offsetTop;}}return {width:width,height:height,x:x+getWindowScrollBarX$1(element),y:y};}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect$1(element){var _element$ownerDocumen;var html=getDocumentElement$1(element);var winScroll=getWindowScroll$1(element);var body=(_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body;var width=max$1(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0);var height=max$1(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0);var x=-winScroll.scrollLeft+getWindowScrollBarX$1(element);var y=-winScroll.scrollTop;if(getComputedStyle$2(body||html).direction==='rtl'){x+=max$1(html.clientWidth,body?body.clientWidth:0)-width;}return {width:width,height:height,x:x,y:y};}

function isScrollParent$1(element){// Firefox wants us to check `-x` and `-y` variations as well
var _getComputedStyle=getComputedStyle$2(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return /auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX);}

function getScrollParent$1(node){if(['html','body','#document'].indexOf(getNodeName$1(node))>=0){// $FlowFixMe[incompatible-return]: assume body is always available
return node.ownerDocument.body;}if(isHTMLElement$1(node)&&isScrollParent$1(node)){return node;}return getScrollParent$1(getParentNode$1(node));}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/function listScrollParents$1(element,list){var _element$ownerDocumen;if(list===void 0){list=[];}var scrollParent=getScrollParent$1(element);var isBody=scrollParent===((_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body);var win=getWindow$1(scrollParent);var target=isBody?[win].concat(win.visualViewport||[],isScrollParent$1(scrollParent)?scrollParent:[]):scrollParent;var updatedList=list.concat(target);return isBody?updatedList:// $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
updatedList.concat(listScrollParents$1(getParentNode$1(target)));}

function rectToClientRect$1(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height});}

function getInnerBoundingClientRect$1(element){var rect=getBoundingClientRect$1(element);rect.top=rect.top+element.clientTop;rect.left=rect.left+element.clientLeft;rect.bottom=rect.top+element.clientHeight;rect.right=rect.left+element.clientWidth;rect.width=element.clientWidth;rect.height=element.clientHeight;rect.x=rect.left;rect.y=rect.top;return rect;}function getClientRectFromMixedType$1(element,clippingParent){return clippingParent===viewport$1?rectToClientRect$1(getViewportRect$1(element)):isHTMLElement$1(clippingParent)?getInnerBoundingClientRect$1(clippingParent):rectToClientRect$1(getDocumentRect$1(getDocumentElement$1(element)));}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents$1(element){var clippingParents=listScrollParents$1(getParentNode$1(element));var canEscapeClipping=['absolute','fixed'].indexOf(getComputedStyle$2(element).position)>=0;var clipperElement=canEscapeClipping&&isHTMLElement$1(element)?getOffsetParent$1(element):element;if(!isElement$1(clipperElement)){return [];}// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return clippingParents.filter(function(clippingParent){return isElement$1(clippingParent)&&contains$1(clippingParent,clipperElement)&&getNodeName$1(clippingParent)!=='body';});}// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect$1(element,boundary,rootBoundary){var mainClippingParents=boundary==='clippingParents'?getClippingParents$1(element):[].concat(boundary);var clippingParents=[].concat(mainClippingParents,[rootBoundary]);var firstClippingParent=clippingParents[0];var clippingRect=clippingParents.reduce(function(accRect,clippingParent){var rect=getClientRectFromMixedType$1(element,clippingParent);accRect.top=max$1(rect.top,accRect.top);accRect.right=min$1(rect.right,accRect.right);accRect.bottom=min$1(rect.bottom,accRect.bottom);accRect.left=max$1(rect.left,accRect.left);return accRect;},getClientRectFromMixedType$1(element,firstClippingParent));clippingRect.width=clippingRect.right-clippingRect.left;clippingRect.height=clippingRect.bottom-clippingRect.top;clippingRect.x=clippingRect.left;clippingRect.y=clippingRect.top;return clippingRect;}

function getVariation$1(placement){return placement.split('-')[1];}

function computeOffsets$1(_ref){var reference=_ref.reference,element=_ref.element,placement=_ref.placement;var basePlacement=placement?getBasePlacement$1(placement):null;var variation=placement?getVariation$1(placement):null;var commonX=reference.x+reference.width/2-element.width/2;var commonY=reference.y+reference.height/2-element.height/2;var offsets;switch(basePlacement){case top$1:offsets={x:commonX,y:reference.y-element.height};break;case bottom$1:offsets={x:commonX,y:reference.y+reference.height};break;case right$1:offsets={x:reference.x+reference.width,y:commonY};break;case left$1:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y};}var mainAxis=basePlacement?getMainAxisFromPlacement$1(basePlacement):null;if(mainAxis!=null){var len=mainAxis==='y'?'height':'width';switch(variation){case start$1:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case end$1:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2);break;default:}}return offsets;}

function detectOverflow$1(state,options){if(options===void 0){options={};}var _options=options,_options$placement=_options.placement,placement=_options$placement===void 0?state.placement:_options$placement,_options$boundary=_options.boundary,boundary=_options$boundary===void 0?clippingParents$1:_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=_options$rootBoundary===void 0?viewport$1:_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=_options$elementConte===void 0?popper$1:_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=_options$altBoundary===void 0?false:_options$altBoundary,_options$padding=_options.padding,padding=_options$padding===void 0?0:_options$padding;var paddingObject=mergePaddingObject$1(typeof padding!=='number'?padding:expandToHashMap$1(padding,basePlacements$1));var altContext=elementContext===popper$1?reference$1:popper$1;var referenceElement=state.elements.reference;var popperRect=state.rects.popper;var element=state.elements[altBoundary?altContext:elementContext];var clippingClientRect=getClippingRect$1(isElement$1(element)?element:element.contextElement||getDocumentElement$1(state.elements.popper),boundary,rootBoundary);var referenceClientRect=getBoundingClientRect$1(referenceElement);var popperOffsets=computeOffsets$1({reference:referenceClientRect,element:popperRect,strategy:'absolute',placement:placement});var popperClientRect=rectToClientRect$1(Object.assign({},popperRect,popperOffsets));var elementClientRect=elementContext===popper$1?popperClientRect:referenceClientRect;// positive = overflowing the clipping rect
// 0 or negative = within the clipping rect
var overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right};var offsetData=state.modifiersData.offset;// Offsets can be applied only to the popper element
if(elementContext===popper$1&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach(function(key){var multiply=[right$1,bottom$1].indexOf(key)>=0?1:-1;var axis=[top$1,bottom$1].indexOf(key)>=0?'y':'x';overflowOffsets[key]+=offset[axis]*multiply;});}return overflowOffsets;}

function computeAutoPlacement$1(state,options){if(options===void 0){options={};}var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=_options$allowedAutoP===void 0?placements$1:_options$allowedAutoP;var variation=getVariation$1(placement);var placements=variation?flipVariations?variationPlacements$1:variationPlacements$1.filter(function(placement){return getVariation$1(placement)===variation;}):basePlacements$1;var allowedPlacements=placements.filter(function(placement){return allowedAutoPlacements.indexOf(placement)>=0;});if(allowedPlacements.length===0){allowedPlacements=placements;if(process.env.NODE_ENV!=="production"){console.error(['Popper: The `allowedAutoPlacements` option did not allow any','placements. Ensure the `placement` option matches the variation','of the allowed placements.','For example, "auto" cannot be used to allow "bottom-start".','Use "auto-start" instead.'].join(' '));}}// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var overflows=allowedPlacements.reduce(function(acc,placement){acc[placement]=detectOverflow$1(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding})[getBasePlacement$1(placement)];return acc;},{});return Object.keys(overflows).sort(function(a,b){return overflows[a]-overflows[b];});}

function getExpandedFallbackPlacements$1(placement){if(getBasePlacement$1(placement)===auto$1){return [];}var oppositePlacement=getOppositePlacement$1(placement);return [getOppositeVariationPlacement$1(placement),oppositePlacement,getOppositeVariationPlacement$1(oppositePlacement)];}function flip$2(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(state.modifiersData[name]._skip){return;}var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?true:_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=_options$flipVariatio===void 0?true:_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements;var preferredPlacement=state.options.placement;var basePlacement=getBasePlacement$1(preferredPlacement);var isBasePlacement=basePlacement===preferredPlacement;var fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipVariations?[getOppositePlacement$1(preferredPlacement)]:getExpandedFallbackPlacements$1(preferredPlacement));var placements=[preferredPlacement].concat(fallbackPlacements).reduce(function(acc,placement){return acc.concat(getBasePlacement$1(placement)===auto$1?computeAutoPlacement$1(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding,flipVariations:flipVariations,allowedAutoPlacements:allowedAutoPlacements}):placement);},[]);var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var checksMap=new Map();var makeFallbackChecks=true;var firstFittingPlacement=placements[0];for(var i=0;i<placements.length;i++){var placement=placements[i];var _basePlacement=getBasePlacement$1(placement);var isStartVariation=getVariation$1(placement)===start$1;var isVertical=[top$1,bottom$1].indexOf(_basePlacement)>=0;var len=isVertical?'width':'height';var overflow=detectOverflow$1(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,altBoundary:altBoundary,padding:padding});var mainVariationSide=isVertical?isStartVariation?right$1:left$1:isStartVariation?bottom$1:top$1;if(referenceRect[len]>popperRect[len]){mainVariationSide=getOppositePlacement$1(mainVariationSide);}var altVariationSide=getOppositePlacement$1(mainVariationSide);var checks=[];if(checkMainAxis){checks.push(overflow[_basePlacement]<=0);}if(checkAltAxis){checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0);}if(checks.every(function(check){return check;})){firstFittingPlacement=placement;makeFallbackChecks=false;break;}checksMap.set(placement,checks);}if(makeFallbackChecks){// `2` may be desired in some cases – research later
var numberOfChecks=flipVariations?3:1;var _loop=function _loop(_i){var fittingPlacement=placements.find(function(placement){var checks=checksMap.get(placement);if(checks){return checks.slice(0,_i).every(function(check){return check;});}});if(fittingPlacement){firstFittingPlacement=fittingPlacement;return "break";}};for(var _i=numberOfChecks;_i>0;_i--){var _ret=_loop(_i);if(_ret==="break")break;}}if(state.placement!==firstFittingPlacement){state.modifiersData[name]._skip=true;state.placement=firstFittingPlacement;state.reset=true;}}// eslint-disable-next-line import/no-unused-modules
var flip$3 = {name:'flip',enabled:true,phase:'main',fn:flip$2,requiresIfExists:['offset'],data:{_skip:false}};

function getSideOffsets(overflow,rect,preventedOffsets){if(preventedOffsets===void 0){preventedOffsets={x:0,y:0};}return {top:overflow.top-rect.height-preventedOffsets.y,right:overflow.right-rect.width+preventedOffsets.x,bottom:overflow.bottom-rect.height+preventedOffsets.y,left:overflow.left-rect.width-preventedOffsets.x};}function isAnySideFullyClipped(overflow){return [top$1,right$1,bottom$1,left$1].some(function(side){return overflow[side]>=0;});}function hide(_ref){var state=_ref.state,name=_ref.name;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var preventedOffsets=state.modifiersData.preventOverflow;var referenceOverflow=detectOverflow$1(state,{elementContext:'reference'});var popperAltOverflow=detectOverflow$1(state,{altBoundary:true});var referenceClippingOffsets=getSideOffsets(referenceOverflow,referenceRect);var popperEscapeOffsets=getSideOffsets(popperAltOverflow,popperRect,preventedOffsets);var isReferenceHidden=isAnySideFullyClipped(referenceClippingOffsets);var hasPopperEscaped=isAnySideFullyClipped(popperEscapeOffsets);state.modifiersData[name]={referenceClippingOffsets:referenceClippingOffsets,popperEscapeOffsets:popperEscapeOffsets,isReferenceHidden:isReferenceHidden,hasPopperEscaped:hasPopperEscaped};state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-reference-hidden':isReferenceHidden,'data-popper-escaped':hasPopperEscaped});}// eslint-disable-next-line import/no-unused-modules
var hide$1 = {name:'hide',enabled:true,phase:'main',requiresIfExists:['preventOverflow'],fn:hide};

function distanceAndSkiddingToXY$1(placement,rects,offset){var basePlacement=getBasePlacement$1(placement);var invertDistance=[left$1,top$1].indexOf(basePlacement)>=0?-1:1;var _ref=typeof offset==='function'?offset(Object.assign({},rects,{placement:placement})):offset,skidding=_ref[0],distance=_ref[1];skidding=skidding||0;distance=(distance||0)*invertDistance;return [left$1,right$1].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance};}function offset$2(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name;var _options$offset=options.offset,offset=_options$offset===void 0?[0,0]:_options$offset;var data=placements$1.reduce(function(acc,placement){acc[placement]=distanceAndSkiddingToXY$1(placement,state.rects,offset);return acc;},{});var _data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;if(state.modifiersData.popperOffsets!=null){state.modifiersData.popperOffsets.x+=x;state.modifiersData.popperOffsets.y+=y;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var offset$3 = {name:'offset',enabled:true,phase:'main',requires:['popperOffsets'],fn:offset$2};

function popperOffsets$2(_ref){var state=_ref.state,name=_ref.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
state.modifiersData[name]=computeOffsets$1({reference:state.rects.reference,element:state.rects.popper,strategy:'absolute',placement:state.placement});}// eslint-disable-next-line import/no-unused-modules
var popperOffsets$3 = {name:'popperOffsets',enabled:true,phase:'read',fn:popperOffsets$2,data:{}};

function getAltAxis$1(axis){return axis==='x'?'y':'x';}

function preventOverflow$2(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?false:_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=_options$tether===void 0?true:_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=_options$tetherOffset===void 0?0:_options$tetherOffset;var overflow=detectOverflow$1(state,{boundary:boundary,rootBoundary:rootBoundary,padding:padding,altBoundary:altBoundary});var basePlacement=getBasePlacement$1(state.placement);var variation=getVariation$1(state.placement);var isBasePlacement=!variation;var mainAxis=getMainAxisFromPlacement$1(basePlacement);var altAxis=getAltAxis$1(mainAxis);var popperOffsets=state.modifiersData.popperOffsets;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var tetherOffsetValue=typeof tetherOffset==='function'?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset;var data={x:0,y:0};if(!popperOffsets){return;}if(checkMainAxis||checkAltAxis){var mainSide=mainAxis==='y'?top$1:left$1;var altSide=mainAxis==='y'?bottom$1:right$1;var len=mainAxis==='y'?'height':'width';var offset=popperOffsets[mainAxis];var min=popperOffsets[mainAxis]+overflow[mainSide];var max=popperOffsets[mainAxis]-overflow[altSide];var additive=tether?-popperRect[len]/2:0;var minLen=variation===start$1?referenceRect[len]:popperRect[len];var maxLen=variation===start$1?-popperRect[len]:-referenceRect[len];// We need to include the arrow in the calculation so the arrow doesn't go
// outside the reference bounds
var arrowElement=state.elements.arrow;var arrowRect=tether&&arrowElement?getLayoutRect$1(arrowElement):{width:0,height:0};var arrowPaddingObject=state.modifiersData['arrow#persistent']?state.modifiersData['arrow#persistent'].padding:getFreshSideObject$1();var arrowPaddingMin=arrowPaddingObject[mainSide];var arrowPaddingMax=arrowPaddingObject[altSide];// If the reference length is smaller than the arrow length, we don't want
// to include its full size in the calculation. If the reference is small
// and near the edge of a boundary, the popper can overflow even if the
// reference is not overflowing as well (e.g. virtual elements with no
// width or height)
var arrowLen=within$1(0,referenceRect[len],arrowRect[len]);var minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-tetherOffsetValue:minLen-arrowLen-arrowPaddingMin-tetherOffsetValue;var maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+tetherOffsetValue:maxLen+arrowLen+arrowPaddingMax+tetherOffsetValue;var arrowOffsetParent=state.elements.arrow&&getOffsetParent$1(state.elements.arrow);var clientOffset=arrowOffsetParent?mainAxis==='y'?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0;var offsetModifierValue=state.modifiersData.offset?state.modifiersData.offset[state.placement][mainAxis]:0;var tetherMin=popperOffsets[mainAxis]+minOffset-offsetModifierValue-clientOffset;var tetherMax=popperOffsets[mainAxis]+maxOffset-offsetModifierValue;if(checkMainAxis){var preventedOffset=within$1(tether?min$1(min,tetherMin):min,offset,tether?max$1(max,tetherMax):max);popperOffsets[mainAxis]=preventedOffset;data[mainAxis]=preventedOffset-offset;}if(checkAltAxis){var _mainSide=mainAxis==='x'?top$1:left$1;var _altSide=mainAxis==='x'?bottom$1:right$1;var _offset=popperOffsets[altAxis];var _min=_offset+overflow[_mainSide];var _max=_offset-overflow[_altSide];var _preventedOffset=within$1(tether?min$1(_min,tetherMin):_min,_offset,tether?max$1(_max,tetherMax):_max);popperOffsets[altAxis]=_preventedOffset;data[altAxis]=_preventedOffset-_offset;}}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var preventOverflow$3 = {name:'preventOverflow',enabled:true,phase:'main',fn:preventOverflow$2,requiresIfExists:['offset']};

function getHTMLElementScroll$1(element){return {scrollLeft:element.scrollLeft,scrollTop:element.scrollTop};}

function getNodeScroll$1(node){if(node===getWindow$1(node)||!isHTMLElement$1(node)){return getWindowScroll$1(node);}else {return getHTMLElementScroll$1(node);}}

// Composite means it takes into account transforms as well as layout.
function getCompositeRect$1(elementOrVirtualElement,offsetParent,isFixed){if(isFixed===void 0){isFixed=false;}var documentElement=getDocumentElement$1(offsetParent);var rect=getBoundingClientRect$1(elementOrVirtualElement);var isOffsetParentAnElement=isHTMLElement$1(offsetParent);var scroll={scrollLeft:0,scrollTop:0};var offsets={x:0,y:0};if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed){if(getNodeName$1(offsetParent)!=='body'||// https://github.com/popperjs/popper-core/issues/1078
isScrollParent$1(documentElement)){scroll=getNodeScroll$1(offsetParent);}if(isHTMLElement$1(offsetParent)){offsets=getBoundingClientRect$1(offsetParent);offsets.x+=offsetParent.clientLeft;offsets.y+=offsetParent.clientTop;}else if(documentElement){offsets.x=getWindowScrollBarX$1(documentElement);}}return {x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height};}

function order$1(modifiers){var map=new Map();var visited=new Set();var result=[];modifiers.forEach(function(modifier){map.set(modifier.name,modifier);});// On visiting object, check for its dependencies and visit them recursively
function sort(modifier){visited.add(modifier.name);var requires=[].concat(modifier.requires||[],modifier.requiresIfExists||[]);requires.forEach(function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);if(depModifier){sort(depModifier);}}});result.push(modifier);}modifiers.forEach(function(modifier){if(!visited.has(modifier.name)){// check for visited object
sort(modifier);}});return result;}function orderModifiers$1(modifiers){// order based on dependencies
var orderedModifiers=order$1(modifiers);// order based on phase
return modifierPhases$1.reduce(function(acc,phase){return acc.concat(orderedModifiers.filter(function(modifier){return modifier.phase===phase;}));},[]);}

function debounce$1(fn){var pending;return function(){if(!pending){pending=new Promise(function(resolve){Promise.resolve().then(function(){pending=undefined;resolve(fn());});});}return pending;};}

function format$1(str){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}return [].concat(args).reduce(function(p,c){return p.replace(/%s/,c);},str);}

var INVALID_MODIFIER_ERROR$1='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';var MISSING_DEPENDENCY_ERROR$1='Popper: modifier "%s" requires "%s", but "%s" modifier is not available';var VALID_PROPERTIES$1=['name','enabled','phase','fn','effect','requires','options'];function validateModifiers$1(modifiers){modifiers.forEach(function(modifier){Object.keys(modifier).forEach(function(key){switch(key){case'name':if(typeof modifier.name!=='string'){console.error(format$1(INVALID_MODIFIER_ERROR$1,String(modifier.name),'"name"','"string"',"\""+String(modifier.name)+"\""));}break;case'enabled':if(typeof modifier.enabled!=='boolean'){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"enabled"','"boolean"',"\""+String(modifier.enabled)+"\""));}case'phase':if(modifierPhases$1.indexOf(modifier.phase)<0){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"phase"',"either "+modifierPhases$1.join(', '),"\""+String(modifier.phase)+"\""));}break;case'fn':if(typeof modifier.fn!=='function'){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"fn"','"function"',"\""+String(modifier.fn)+"\""));}break;case'effect':if(typeof modifier.effect!=='function'){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"effect"','"function"',"\""+String(modifier.fn)+"\""));}break;case'requires':if(!Array.isArray(modifier.requires)){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"requires"','"array"',"\""+String(modifier.requires)+"\""));}break;case'requiresIfExists':if(!Array.isArray(modifier.requiresIfExists)){console.error(format$1(INVALID_MODIFIER_ERROR$1,modifier.name,'"requiresIfExists"','"array"',"\""+String(modifier.requiresIfExists)+"\""));}break;case'options':case'data':break;default:console.error("PopperJS: an invalid property has been provided to the \""+modifier.name+"\" modifier, valid properties are "+VALID_PROPERTIES$1.map(function(s){return "\""+s+"\"";}).join(', ')+"; but \""+key+"\" was provided.");}modifier.requires&&modifier.requires.forEach(function(requirement){if(modifiers.find(function(mod){return mod.name===requirement;})==null){console.error(format$1(MISSING_DEPENDENCY_ERROR$1,String(modifier.name),requirement,requirement));}});});});}

function uniqueBy$1(arr,fn){var identifiers=new Set();return arr.filter(function(item){var identifier=fn(item);if(!identifiers.has(identifier)){identifiers.add(identifier);return true;}});}

function mergeByName$1(modifiers){var merged=modifiers.reduce(function(merged,current){var existing=merged[current.name];merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current;return merged;},{});// IE11 does not support Object.values
return Object.keys(merged).map(function(key){return merged[key];});}

var INVALID_ELEMENT_ERROR$1='Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';var INFINITE_LOOP_ERROR$1='Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';var DEFAULT_OPTIONS$1={placement:'bottom',modifiers:[],strategy:'absolute'};function areValidElements$1(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return !args.some(function(element){return !(element&&typeof element.getBoundingClientRect==='function');});}function popperGenerator$1(generatorOptions){if(generatorOptions===void 0){generatorOptions={};}var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=_generatorOptions$def===void 0?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=_generatorOptions$def2===void 0?DEFAULT_OPTIONS$1:_generatorOptions$def2;return function createPopper(reference,popper,options){if(options===void 0){options=defaultOptions;}var state={placement:'bottom',orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS$1,defaultOptions),modifiersData:{},elements:{reference:reference,popper:popper},attributes:{},styles:{}};var effectCleanupFns=[];var isDestroyed=false;var instance={state:state,setOptions:function setOptions(options){cleanupModifierEffects();state.options=Object.assign({},defaultOptions,state.options,options);state.scrollParents={reference:isElement$1(reference)?listScrollParents$1(reference):reference.contextElement?listScrollParents$1(reference.contextElement):[],popper:listScrollParents$1(popper)};// Orders the modifiers based on their dependencies and `phase`
// properties
var orderedModifiers=orderModifiers$1(mergeByName$1([].concat(defaultModifiers,state.options.modifiers)));// Strip out disabled modifiers
state.orderedModifiers=orderedModifiers.filter(function(m){return m.enabled;});// Validate the provided modifiers so that the consumer will get warned
// if one of the modifiers is invalid for any reason
if(process.env.NODE_ENV!=="production"){var modifiers=uniqueBy$1([].concat(orderedModifiers,state.options.modifiers),function(_ref){var name=_ref.name;return name;});validateModifiers$1(modifiers);if(getBasePlacement$1(state.options.placement)===auto$1){var flipModifier=state.orderedModifiers.find(function(_ref2){var name=_ref2.name;return name==='flip';});if(!flipModifier){console.error(['Popper: "auto" placements require the "flip" modifier be','present and enabled to work.'].join(' '));}}var _getComputedStyle=getComputedStyle$2(popper),marginTop=_getComputedStyle.marginTop,marginRight=_getComputedStyle.marginRight,marginBottom=_getComputedStyle.marginBottom,marginLeft=_getComputedStyle.marginLeft;// We no longer take into account `margins` on the popper, and it can
// cause bugs with positioning, so we'll warn the consumer
if([marginTop,marginRight,marginBottom,marginLeft].some(function(margin){return parseFloat(margin);})){console.warn(['Popper: CSS "margin" styles cannot be used to apply padding','between the popper and its reference element or boundary.','To replicate margin, use the `offset` modifier, as well as','the `padding` option in the `preventOverflow` and `flip`','modifiers.'].join(' '));}}runModifierEffects();return instance.update();},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function forceUpdate(){if(isDestroyed){return;}var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(!areValidElements$1(reference,popper)){if(process.env.NODE_ENV!=="production"){console.error(INVALID_ELEMENT_ERROR$1);}return;}// Store the reference and popper rects to be read by modifiers
state.rects={reference:getCompositeRect$1(reference,getOffsetParent$1(popper),state.options.strategy==='fixed'),popper:getLayoutRect$1(popper)};// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
state.reset=false;state.placement=state.options.placement;// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
state.orderedModifiers.forEach(function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data);});var __debug_loops__=0;for(var index=0;index<state.orderedModifiers.length;index++){if(process.env.NODE_ENV!=="production"){__debug_loops__+=1;if(__debug_loops__>100){console.error(INFINITE_LOOP_ERROR$1);break;}}if(state.reset===true){state.reset=false;index=-1;continue;}var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=_state$orderedModifie2===void 0?{}:_state$orderedModifie2,name=_state$orderedModifie.name;if(typeof fn==='function'){state=fn({state:state,options:_options,name:name,instance:instance})||state;}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:debounce$1(function(){return new Promise(function(resolve){instance.forceUpdate();resolve(state);});}),destroy:function destroy(){cleanupModifierEffects();isDestroyed=true;}};if(!areValidElements$1(reference,popper)){if(process.env.NODE_ENV!=="production"){console.error(INVALID_ELEMENT_ERROR$1);}return instance;}instance.setOptions(options).then(function(state){if(!isDestroyed&&options.onFirstUpdate){options.onFirstUpdate(state);}});// Modifiers have the ability to execute arbitrary code before the first
// update cycle runs. They will be executed in the same order as the update
// cycle. This is useful when a modifier adds some persistent data that
// other modifiers need to use, but the modifier is run after the dependent
// one.
function runModifierEffects(){state.orderedModifiers.forEach(function(_ref3){var name=_ref3.name,_ref3$options=_ref3.options,options=_ref3$options===void 0?{}:_ref3$options,effect=_ref3.effect;if(typeof effect==='function'){var cleanupFn=effect({state:state,name:name,instance:instance,options:options});var noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn);}});}function cleanupModifierEffects(){effectCleanupFns.forEach(function(fn){return fn();});effectCleanupFns=[];}return instance;};}var createPopper$2=/*#__PURE__*/popperGenerator$1();// eslint-disable-next-line import/no-unused-modules

var defaultModifiers$1=[eventListeners$1,popperOffsets$3,computeStyles$3,applyStyles$3];var createPopper$3=/*#__PURE__*/popperGenerator$1({defaultModifiers:defaultModifiers$1});// eslint-disable-next-line import/no-unused-modules

var defaultModifiers$2=[eventListeners$1,popperOffsets$3,computeStyles$3,applyStyles$3,offset$3,flip$3,preventOverflow$3,arrow$3,hide$1];var createPopper$4=/*#__PURE__*/popperGenerator$1({defaultModifiers:defaultModifiers$2});// eslint-disable-next-line import/no-unused-modules

var maxSize={name:'maxSize',enabled:true,phase:'main',requiresIfExists:['offset','preventOverflow','flip'],fn:function fn(_ref){var state=_ref.state,name=_ref.name,options=_ref.options;var overflow=detectOverflow$1(state,options);var _ref2=state.modifiersData.preventOverflow||{x:0,y:0},x=_ref2.x,y=_ref2.y;var _state$rects$popper=state.rects.popper,width=_state$rects$popper.width,height=_state$rects$popper.height;var _state$placement$spli=state.placement.split('-'),basePlacement=_state$placement$spli[0];var widthProp=basePlacement==='left'?'left':'right';var heightProp=basePlacement==='top'?'top':'bottom';state.modifiersData[name]={width:width-overflow[widthProp]-x,height:height-overflow[heightProp]-y};}};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/const appliedSizeDefaults=new WeakMap();const applyMaxSize={name:'applyMaxSize',enabled:true,phase:'beforeWrite',requires:['maxSize'],fn({state}){const{height:maxHeight}=state.modifiersData.maxSize;if(!appliedSizeDefaults.has(state.elements.popper)){appliedSizeDefaults.set(state.elements.popper,state.rects.popper.height);}const actualHeight=appliedSizeDefaults.get(state.elements.popper);const constrainHeight=maxHeight<actualHeight;const appliedHeight=constrainHeight?`${maxHeight}px`:'';state.styles.popper.maxHeight=appliedHeight;state.styles.popper.height=appliedHeight;}};

const createPopper$5=popperGenerator({defaultModifiers:[...defaultModifiers,flip$1,preventOverflow$1,arrow$1,offset$1]});

let _$k=t=>t,_t$k,_t2$6;const stateMachine={initial:'idle',states:{idle:{on:{active:'active'}},active:{on:{visible:'visible',hiding:'hiding',idle:'idle'}},visible:{on:{hiding:'hiding',idle:'idle'}},hiding:{on:{dispose:'dispose'}},dispose:{on:{disposed:'disposed'}},disposed:{on:{}}}};const stateTransition=(state,event)=>{if(!state)return stateMachine.initial;/* c8 ignore next */if(!event)return state;return stateMachine.states[state].on[event]||state;};class ActiveOverlay extends SpectrumElement$2{constructor(){super();this._state=stateTransition();this.animating=false;this.tabbingAway=false;this.offset=6;this.interaction='hover';this.positionAnimationFrame=0;this.willNotifyClosed=false;this.handleInlineTriggerKeydown=event=>{const{code,shiftKey}=event;/* c8 ignore next */if(code!=='Tab')return;if(shiftKey){this.tabbingAway=true;this.dispatchEvent(new Event('close'));return;}event.stopPropagation();event.preventDefault();this.focus();};this.stealOverlayContentPromise=Promise.resolve();this.stealOverlayContentPromise=new Promise(res=>this.stealOverlayContentResolver=res);}get state(){return this._state;}set state(state){const nextState=stateTransition(this.state,state);if(nextState===this.state){return;}this._state=nextState;if(this.state==='active'||this.state==='visible'||this.state==='hiding'){this.setAttribute('state',this.state);}else {this.removeAttribute('state');}}focus(){const firstFocusable=this.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');if(firstFocusable){firstFocusable.focus();this.removeAttribute('tabindex');/* c8 ignore next 3 */}else {super.focus();}}get hasTheme(){return !!this.color||!!this.scale;}static get styles(){return [styles$8];}get hasModalRoot(){return !!this._modalRoot;}feature(){this.tabIndex=0;const parentOverlay=this.trigger.closest('active-overlay');const parentIsModal=parentOverlay&&parentOverlay.slot==='open';// If an overlay it triggered from within a "modal" overlay, it needs to continue
// to act like one to get treated correctly in regards to tab trapping.
if(this.interaction==='modal'||parentIsModal||this._modalRoot){this.slot='open';// If this isn't a modal root, walk up the overlays to the next modal root
// and "feature" each on of the intervening overlays.
if(this._modalRoot){parentOverlay===null||parentOverlay===void 0?void 0:parentOverlay.feature();}}}obscure(nextOverlayInteraction){if(this.slot&&nextOverlayInteraction==='modal'){this.removeAttribute('slot');// Obscure upto and including the next modal root.
if(this.interaction!=='modal'){const parentOverlay=this.trigger.closest('active-overlay');this._modalRoot=parentOverlay===null||parentOverlay===void 0?void 0:parentOverlay.obscure(nextOverlayInteraction);return this._modalRoot;}return this;}return undefined;}firstUpdated(changedProperties){super.firstUpdated(changedProperties);/* c8 ignore next */if(!this.overlayContent)return;this.stealOverlayContent(this.overlayContent);/* c8 ignore next */if(!this.overlayContent||!this.trigger)return;if(this.placement&&this.placement!=='none'){this.popper=createPopper$5(this.trigger,this,{placement:this.placement,modifiers:[maxSize,applyMaxSize,{name:'arrow',options:{element:this.overlayContentTip}},{name:'offset',options:{offset:[0,this.offset]}}]});}this.state='active';document.addEventListener('sp-update-overlays',()=>{this.updateOverlayPosition();this.state='visible';});this.feature();this.updateOverlayPosition().then(()=>this.applyContentAnimation('spOverlayFadeIn')).then(()=>{if(this.receivesFocus){this.focus();}});}updateOverlayPopperPlacement(){/* c8 ignore next */if(!this.overlayContent)return;if(this.dataPopperPlacement){// Copy this attribute to the actual overlay node so that it can use
// the attribute for styling shadow DOM elements based on the side
// that popper has chosen for it
this.overlayContent.setAttribute('placement',this.dataPopperPlacement);}else if(this.originalPlacement){this.overlayContent.setAttribute('placement',this.originalPlacement);}else {this.overlayContent.removeAttribute('placement');}}updated(changedProperties){if(changedProperties.has('dataPopperPlacement')){this.updateOverlayPopperPlacement();}}open(openDetail){this.extractDetail(openDetail);}extractDetail(detail){this.overlayContent=detail.content;this.overlayContentTip=detail.contentTip;this.trigger=detail.trigger;this.placement=detail.placement;this.offset=detail.offset;this.interaction=detail.interaction;this.color=detail.theme.color;this.scale=detail.theme.scale;this.receivesFocus=detail.receivesFocus;}dispose(){/* c8 ignore next */if(this.state!=='dispose')return;/* c8 ignore next 4 */if(this.timeout){clearTimeout(this.timeout);delete this.timeout;}if(this.popper){this.popper.destroy();this.popper=undefined;}this.trigger.removeEventListener('keydown',this.handleInlineTriggerKeydown);this.returnOverlayContent();this.state='disposed';if(this.willNotifyClosed){this.overlayContent.dispatchEvent(new Event('sp-overlay-closed'));this.willNotifyClosed=false;}}stealOverlayContent(element){this.originalPlacement=element.getAttribute('placement');this.restoreContent=reparentChildren$1([element],this,el=>{const slotName=el.slot;el.removeAttribute('slot');return el=>{el.slot=slotName;};});this.stealOverlayContentResolver();}returnOverlayContent(){/* c8 ignore next */if(!this.restoreContent)return;const[element]=this.restoreContent();this.restoreContent=undefined;this.willNotifyClosed=true;if(this.originalPlacement){element.setAttribute('placement',this.originalPlacement);delete this.originalPlacement;}}async updateOverlayPosition(){if(this.popper){await(document.fonts?document.fonts.ready:Promise.resolve());await this.popper.update();}}async hide(animated=true){this.state='hiding';if(animated){await this.applyContentAnimation('spOverlayFadeOut');}this.state='dispose';}schedulePositionUpdate(){// Edge needs a little time to update the DOM before computing the layout
cancelAnimationFrame(this.positionAnimationFrame);this.positionAnimationFrame=requestAnimationFrame(()=>this.updateOverlayPosition());}onSlotChange(){this.schedulePositionUpdate();}connectedCallback(){super.connectedCallback();this.schedulePositionUpdate();}applyContentAnimation(animation){return new Promise(resolve=>{const contents=this.shadowRoot.querySelector('#contents');const doneHandler=event=>{if(animation!==event.animationName)return;contents.removeEventListener('animationend',doneHandler);contents.removeEventListener('animationcancel',doneHandler);this.animating=false;resolve(event.type==='animationcancel');};contents.addEventListener('animationend',doneHandler);contents.addEventListener('animationcancel',doneHandler);contents.style.animationName=animation;this.animating=true;});}renderTheme(content){const{color,scale}=this;return html(_t$k||(_t$k=_$k`
            <sp-theme color=${0} scale=${0}>
                ${0}
            </sp-theme>
        `),ifDefined(color),ifDefined(scale),content);}render(){const content=html(_t2$6||(_t2$6=_$k`
            <div id="contents">
                <slot @slotchange=${0}></slot>
            </div>
        `),this.onSlotChange);return this.hasTheme?this.renderTheme(content):content;}static create(details){const overlay=new ActiveOverlay();if(details.content){overlay.open(details);}return overlay;}async _getUpdateComplete(){await super._getUpdateComplete();await this.stealOverlayContentPromise;}}__decorate([property()],ActiveOverlay.prototype,"_state",void 0);__decorate([property({reflect:true,type:Boolean})],ActiveOverlay.prototype,"animating",void 0);__decorate([property({reflect:true})],ActiveOverlay.prototype,"placement",void 0);__decorate([property({attribute:false})],ActiveOverlay.prototype,"color",void 0);__decorate([property({attribute:false})],ActiveOverlay.prototype,"receivesFocus",void 0);__decorate([property({attribute:false})],ActiveOverlay.prototype,"scale",void 0);__decorate([property({attribute:'data-popper-placement'})],ActiveOverlay.prototype,"dataPopperPlacement",void 0);

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/const DEFAULT_WARMUP=1000;const DEFAULT_COOLDOWN=1000;/**
 * A timer to help with implementation of warnup/cooldown behavior as described here:
 * https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance
 */class OverlayTimer{constructor(options={}){this.warmUpDelay=DEFAULT_WARMUP;this.coolDownDelay=DEFAULT_COOLDOWN;this.isWarm=false;this.timeout=0;Object.assign(this,options);}async openTimer(component){this.cancelCooldownTimer();if(!this.component||component!==this.component){if(this.component){this.close(this.component);this.cancelCooldownTimer();}this.component=component;if(this.isWarm){return false;}this.promise=new Promise(resolve=>{this.resolve=resolve;this.timeout=window.setTimeout(()=>{if(this.resolve){this.resolve(false);this.isWarm=true;}},this.warmUpDelay);});return this.promise;}else if(this.promise){return this.promise;}else {// This should never happen
throw new Error('Inconsistent state');}}close(component){if(this.component&&this.component===component){this.resetCooldownTimer();if(this.timeout>0){clearTimeout(this.timeout);this.timeout=0;}if(this.resolve){this.resolve(true);delete this.resolve;}delete this.promise;delete this.component;}}resetCooldownTimer(){if(this.isWarm){if(this.cooldownTimeout){window.clearTimeout(this.cooldownTimeout);}this.cooldownTimeout=window.setTimeout(()=>{this.isWarm=false;delete this.cooldownTimeout;},this.coolDownDelay);}}cancelCooldownTimer(){if(this.cooldownTimeout){window.clearTimeout(this.cooldownTimeout);}delete this.cooldownTimeout;}}

customElements.define('active-overlay',ActiveOverlay);

function isLeftClick(event){return event.button===0;}function hasModifier(event){return !!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey);}class OverlayStack{constructor(){this.overlays=[];this.preventMouseRootClose=false;this.root=document.body;this.handlingResize=false;this.overlayTimer=new OverlayTimer();this.canTabTrap=true;this.trappingInited=false;this.handleMouseCapture=event=>{const topOverlay=this.topOverlay;if(!event.target||!topOverlay||!topOverlay.overlayContent||hasModifier(event)||!isLeftClick(event)){this.preventMouseRootClose=true;return;}if(event.target instanceof Node){const path=event.composedPath();if(path.indexOf(topOverlay.overlayContent)>=0){this.preventMouseRootClose=true;return;}this.preventMouseRootClose=false;}};/**
         * A "longpress" occurs before the "click" that creates it has occured.
         * In that way the first click will still be part of the "longpress" and
         * not part of closing the overlay.
         */this._doesNotCloseOnFirstClick=false;this.handleMouse=event=>{if(this._doesNotCloseOnFirstClick){this._doesNotCloseOnFirstClick=false;return;}if(this.preventMouseRootClose||event.defaultPrevented){return;}this.closeTopOverlay();};this.handleKeyUp=event=>{if(event.code==='Escape'){const overlay=this.topOverlay;this.closeTopOverlay();overlay&&overlay.trigger.focus();}};this.handleResize=()=>{if(this.handlingResize)return;this.handlingResize=true;requestAnimationFrame(async()=>{const promises=this.overlays.map(overlay=>overlay.updateOverlayPosition());await Promise.all(promises);this.handlingResize=false;});};this.addEventListeners();}initTabTrapping(){/* c8 ignore next 4 */if(this.document.body.shadowRoot){this.canTabTrap=false;return;}this.document.body.attachShadow({mode:'open'});/* c8 ignore next 3 */if(!this.document.body.shadowRoot){return;}const root=this.document.body.shadowRoot;root.innerHTML=`
            <div id="actual"><slot></slot></div>
            <style>
            #actual {
                position: relative;
                height: calc(100% - var(--swc-body-margins-block, 0px));
                z-index: 0;
                min-height: calc(100vh - var(--swc-body-margins-block, 0px));
            }
            #holder {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: column;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                position: fixed;
            }
            #holder[hidden] {
                display: none !important;
            }
            #actual[tabindex="-1"] {
                pointer-events: none;  /* just in case? */
            }
            </style>
            <div id="holder" hidden><slot name="open"></slot></div>
        `;this.tabTrapper=root.querySelector('#actual');this.overlayHolder=root.querySelector('#holder');this.tabTrapper.attachShadow({mode:'open'});if(this.tabTrapper.shadowRoot){this.tabTrapper.shadowRoot.innerHTML='<slot></slot>';}}startTabTrapping(){if(!this.trappingInited){this.initTabTrapping();this.trappingInited=true;}/* c8 ignore next 3 */if(!this.canTabTrap){return;}this.tabTrapper.tabIndex=-1;this.tabTrapper.setAttribute('aria-hidden','true');this.overlayHolder.hidden=false;requestAnimationFrame(()=>{const bodyStyles=getComputedStyle(document.body);this.tabTrapper.style.setProperty('--swc-body-margins-inline',`calc(${bodyStyles.marginLeft} + ${bodyStyles.marginRight})`);this.tabTrapper.style.setProperty('--swc-body-margins-block',`calc(${bodyStyles.marginTop} + ${bodyStyles.marginBottom})`);});}stopTabTrapping(){/* c8 ignore next 3 */if(!this.canTabTrap||!this.trappingInited){return;}this.tabTrapper.removeAttribute('tabindex');this.tabTrapper.removeAttribute('aria-hidden');this.overlayHolder.hidden=true;}get document(){return this.root.ownerDocument/* c8 ignore next */||document;}get topOverlay(){return this.overlays.slice(-1)[0];}findOverlayForContent(overlayContent){for(const item of this.overlays){if(overlayContent===item.overlayContent){return item;}}return undefined;}addEventListeners(){this.document.addEventListener('click',this.handleMouseCapture,true);this.document.addEventListener('click',this.handleMouse);this.document.addEventListener('keyup',this.handleKeyUp);window.addEventListener('resize',this.handleResize);}isClickOverlayActiveForTrigger(trigger){return this.overlays.some(item=>trigger===item.trigger&&item.interaction==='click');}async openOverlay(details){if(this.findOverlayForContent(details.content)){return false;}if(details.notImmediatelyClosable){this._doesNotCloseOnFirstClick=true;}if(details.interaction==='modal'){this.startTabTrapping();}if(details.delayed){const promise=this.overlayTimer.openTimer(details.content);const cancelled=await promise;if(cancelled){return promise;}}if(details.interaction==='click'){this.closeAllHoverOverlays();}else if(details.interaction==='hover'&&this.isClickOverlayActiveForTrigger(details.trigger)){// Don't show a hover popover if the click popover is already active
return true;}const activeOverlay=ActiveOverlay.create(details);if(this.overlays.length){const topOverlay=this.overlays[this.overlays.length-1];topOverlay.obscure(activeOverlay.interaction);}document.body.appendChild(activeOverlay);/**
         * The following work to make the new overlay the "top" of the stack
         * has to happen AFTER the current call stack completes in case there
         * is work there in to remove the previous "top" overlay.
         */return new Promise(res=>requestAnimationFrame(res)).then(async()=>{this.overlays.push(activeOverlay);await activeOverlay.updateComplete;this.addOverlayEventListeners(activeOverlay);const contentWithOpen=activeOverlay.overlayContent;if(typeof contentWithOpen.open!=='undefined'){contentWithOpen.open=true;}if(details.receivesFocus==='auto'){activeOverlay.focus();}details.trigger.dispatchEvent(new CustomEvent('sp-opened',{bubbles:true,composed:true,cancelable:true,detail:{interaction:details.interaction}}));return false;});}addOverlayEventListeners(activeOverlay){activeOverlay.addEventListener('close',()=>{this.hideAndCloseOverlay(activeOverlay);});switch(activeOverlay.interaction){case'replace':this.addReplaceOverlayEventListeners(activeOverlay);break;case'inline':this.addInlineOverlayEventListeners(activeOverlay);break;}}addReplaceOverlayEventListeners(activeOverlay){activeOverlay.addEventListener('keydown',event=>{const{code}=event;/* c8 ignore next */if(code!=='Tab')return;event.stopPropagation();this.closeOverlay(activeOverlay.overlayContent);activeOverlay.tabbingAway=true;activeOverlay.trigger.focus();activeOverlay.trigger.dispatchEvent(new KeyboardEvent('keydown',event));});}addInlineOverlayEventListeners(activeOverlay){activeOverlay.trigger.addEventListener('keydown',activeOverlay.handleInlineTriggerKeydown);activeOverlay.addEventListener('keydown',event=>{const{code,shiftKey}=event;/* c8 ignore next */if(code!=='Tab')return;activeOverlay.tabbingAway=true;if(shiftKey){const returnFocusElement=document.createElement('span');returnFocusElement.tabIndex=-1;if(activeOverlay.trigger.hasAttribute('slot')){returnFocusElement.slot=activeOverlay.trigger.slot;}activeOverlay.trigger.insertAdjacentElement('afterend',returnFocusElement);returnFocusElement.focus();returnFocusElement.remove();return;}event.stopPropagation();this.closeOverlay(activeOverlay.overlayContent);activeOverlay.trigger.focus();});}closeOverlay(content){this.overlayTimer.close(content);requestAnimationFrame(()=>{const overlay=this.findOverlayForContent(content);this.hideAndCloseOverlay(overlay);});}closeAllHoverOverlays(){for(const overlay of this.overlays){if(overlay.interaction==='hover'){this.hideAndCloseOverlay(overlay,false);}}}async hideAndCloseOverlay(overlay,animated){if(overlay){await overlay.hide(animated);const contentWithOpen=overlay.overlayContent;if(typeof contentWithOpen.open!=='undefined'){contentWithOpen.open=false;}if(overlay.state!='dispose')return;const index=this.overlays.indexOf(overlay);if(index>=0){this.overlays.splice(index,1);}if(this.overlays.length){const topOverlay=this.overlays[this.overlays.length-1];topOverlay.feature();if(topOverlay.interaction==='modal'||topOverlay.hasModalRoot){topOverlay.focus();}else {this.stopTabTrapping();}}else {this.stopTabTrapping();if(overlay.interaction==='modal'||(overlay.interaction==='replace'||overlay.interaction==='inline')&&!overlay.tabbingAway){const overlayRoot=overlay.overlayContent.getRootNode();const overlayContentActiveElement=overlayRoot.activeElement;const triggerRoot=overlay.trigger.getRootNode();const triggerActiveElement=triggerRoot.activeElement;if(overlay.overlayContent.contains(overlayContentActiveElement)||overlay.trigger.getRootNode().contains(triggerActiveElement)||triggerRoot.host&&triggerRoot.host===triggerActiveElement){overlay.trigger.focus();}}overlay.tabbingAway=false;}overlay.remove();overlay.dispose();overlay.trigger.dispatchEvent(new CustomEvent('sp-closed',{bubbles:true,composed:true,cancelable:true,detail:{interaction:overlay.interaction}}));}}closeTopOverlay(){return this.hideAndCloseOverlay(this.topOverlay);}}

/**
 * This class allows access to the overlay system which allows a client to
 * position an element in the overlay positioned relative to another node.
 */class Overlay{/**
     *
     * @param owner the parent element we will use to position the overlay element
     * @param interaction the type of interaction that caused this overlay to be shown
     * @param overlayElement the item to display as an overlay
     */constructor(owner,interaction,overlayElement){this.isOpen=false;this.owner=owner;this.overlayElement=overlayElement;this.interaction=interaction;}/**
     * Open an overlay
     *
     * @param owner the parent element we will use to position the overlay element
     * @param interaction the type of interaction that caused this overlay to be shown
     * @param overlayElement the item to display as an overlay
     * @param options display parameters
     * @param options.delayed if true delay opening of the overlay based on the global warmup/cooldown timer
     * @param options.offset distance to offset the overlay
     * @param options.placement side on which to position the overlay
     * @returns an Overlay object which can be used to close the overlay
     */static async open(owner,interaction,overlayElement,options){const overlay=new Overlay(owner,interaction,overlayElement);await overlay.open(options);return ()=>{overlay.close();};}static update(){const overlayUpdateEvent=new CustomEvent('sp-update-overlays',{bubbles:true,composed:true,cancelable:true});document.dispatchEvent(overlayUpdateEvent);}/**
     * Open an overlay
     *
     * @param options display parameters
     * @param options.delayed delay before opening the overlay
     * @param options.offset distance to offset the overlay
     * @param options.placement side on which to position the overlay
     * @returns a Promise that resolves to true if this operation was cancelled
     */async open({delayed,offset=0,placement='top',receivesFocus,notImmediatelyClosable}){/* c8 ignore next */if(this.isOpen)return true;if(delayed===undefined){delayed=this.overlayElement.hasAttribute('delayed');}const queryThemeDetail={color:undefined,scale:undefined};const queryThemeEvent=new CustomEvent('sp-query-theme',{bubbles:true,composed:true,detail:queryThemeDetail,cancelable:true});this.owner.dispatchEvent(queryThemeEvent);const overlayDetailQuery={};const queryOverlayDetailEvent=new CustomEvent('sp-overlay-query',{bubbles:true,composed:true,detail:overlayDetailQuery,cancelable:true});this.overlayElement.dispatchEvent(queryOverlayDetailEvent);await Overlay.overlayStack.openOverlay(Object.assign({content:this.overlayElement,contentTip:overlayDetailQuery.overlayContentTipElement,delayed,offset:offset,placement:placement,trigger:this.owner,interaction:this.interaction,theme:queryThemeDetail,receivesFocus,notImmediatelyClosable},overlayDetailQuery));this.isOpen=true;return true;}/**
     * Close the overlay if it is open
     */close(){Overlay.overlayStack.closeOverlay(this.overlayElement);}}Overlay.overlayStack=new OverlayStack();/**
 * Announces that an overlay-based UI element has opened
 * @event sp-open
 * @type {object}
 * @property {TriggerInteractions} interaction type of interaction that triggered the opening
 */ /**
 * Announces that an overlay-based UI element has opened
 * @event sp-close
 * @type {object}
 * @property {TriggerInteractions} interaction type of interaction that triggered the closing
 */

var overlay = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Overlay: Overlay
});

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/const openOverlay=async(target,interaction,content,options)=>{const{Overlay}=await Promise.resolve().then(function () { return overlay; });return await Overlay.open(target,interaction,content,options);};

let _$l=t=>t,_t$l;const styles$9=css(_t$l||(_t$l=_$l`
#trigger{display:contents}:host([disabled]) #trigger{pointer-events:none}#overlay-content{display:none}
`));

let _$m=t=>t,_t$m;/**
 * A overlay trigger component for displaying overlays relative to other content.
 * @element overlay-trigger
 *
 * @slot trigger - The content that will trigger the various overlays
 * @slot hover-content - The content that will be displayed on hover
 * @slot click-content - The content that will be displayed on click
 * @slot longpress-content - The content that will be displayed on click
 *
 * @fires sp-opened - Announces that the overlay has been opened
 * @fires sp-closed - Announces that the overlay has been closed
 */class OverlayTrigger extends LitElement{constructor(){super(...arguments);/**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */this.placement='bottom';this.offset=6;this.disabled=false;this.hoverOverlayReady=Promise.resolve();}static get styles(){return [styles$9];}handleClose(event){if((event===null||event===void 0?void 0:event.detail.interaction)!==this.open&&(event===null||event===void 0?void 0:event.detail.interaction)!==this.type){return;}this.removeAttribute('open');}render(){// Keyboard event availability documented in README.md
/* eslint-disable lit-a11y/click-events-have-key-events */return html(_t$m||(_t$m=_$m`
            <div
                id="trigger"
                @click=${0}
                @longpress=${0}
                @mouseenter=${0}
                @mouseleave=${0}
                @focusin=${0}
                @focusout=${0}
                @sp-closed=${0}
            >
                <slot
                    @slotchange=${0}
                    name="trigger"
                ></slot>
            </div>
            <div id="overlay-content">
                <slot
                    @slotchange=${0}
                    name="click-content"
                ></slot>
                <slot
                    @slotchange=${0}
                    name="longpress-content"
                ></slot>
                <slot
                    @slotchange=${0}
                    name="hover-content"
                ></slot>
            </div>
        `),this.onTrigger,this.onTrigger,this.onTrigger,this.onTrigger,this.onTrigger,this.onTrigger,this.handleClose,this.onTargetSlotChange,this.onClickSlotChange,this.onLongpressSlotChange,this.onHoverSlotChange);/* eslint-enable lit-a11y/click-events-have-key-events */}updated(changes){super.updated(changes);if(this.disabled&&this.closeClickOverlay&&changes.has('disabled')){this.closeClickOverlay();}if(changes.has('open')){this.manageOpen(changes.get('open'));}}manageOpen(previous){switch(this.open){case'click':if(!this.closeClickOverlay){this.onTriggerClick();}break;case'hover':if(!this.closeHoverOverlay){this.onTriggerMouseEnter();}break;case'longpress':if(!this.closeLongpressOverlay){this.onTriggerLongpress();this.onTriggerMouseLeave();}break;default:switch(previous){case'click':if(this.closeClickOverlay){this.closeClickOverlay();delete this.closeClickOverlay;}break;case'longpress':if(this.closeLongpressOverlay){this.closeLongpressOverlay();delete this.closeLongpressOverlay;}break;case'hover':this.onTriggerMouseLeave();break;default:break;}break;}}get overlayOptions(){return {offset:this.offset,placement:this.placement,receivesFocus:this.type&&this.type!=='inline'?'auto':undefined};}onTrigger(event){if(this.disabled){return;}switch(event.type){case'mouseenter':case'focusin':if(!this.open&&this.hoverContent){this.open='hover';}return;case'mouseleave':case'focusout':if(this.open==='hover'){this.handleClose();}return;case'click':if(this.clickContent){this.open=event.type;}else if(this.closeHoverOverlay){event.preventDefault();}return;case'longpress':if(this.longpressContent){this._longpressEvent=event;this.open=event.type;}return;}}prepareToFocusOverlayContent(overlayContent){if(this.type!=='modal'){return;}const firstFocusable=overlayContent.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');if(!firstFocusable){overlayContent.tabIndex=0;}}async onTriggerClick(){if(!this.targetContent||!this.clickContent){return;}const{targetContent,clickContent}=this;this.prepareToFocusOverlayContent(clickContent);this.closeClickOverlay=await OverlayTrigger.openOverlay(targetContent,this.type?this.type:'click',clickContent,this.overlayOptions);}async onTriggerLongpress(){var _a;if(!this.targetContent||!this.longpressContent){return;}const{targetContent,longpressContent}=this;this.prepareToFocusOverlayContent(longpressContent);const notImmediatelyClosable=((_a=this._longpressEvent)===null||_a===void 0?void 0:_a.detail.source)!=='keyboard';this.closeLongpressOverlay=await OverlayTrigger.openOverlay(targetContent,this.type?this.type:'longpress',longpressContent,Object.assign(Object.assign({},this.overlayOptions),{receivesFocus:'auto',notImmediatelyClosable}));this._longpressEvent=undefined;}async onTriggerMouseEnter(){if(!this.targetContent||!this.hoverContent){return;}let overlayReady=()=>{return;};this.hoverOverlayReady=new Promise(res=>{overlayReady=res;});const{targetContent,hoverContent}=this;this.closeHoverOverlay=await OverlayTrigger.openOverlay(targetContent,'hover',hoverContent,this.overlayOptions);overlayReady();}async onTriggerMouseLeave(){await this.hoverOverlayReady;if(this.closeHoverOverlay){this.closeHoverOverlay();delete this.closeHoverOverlay;}}onClickSlotChange(event){this.clickContent=this.extractSlotContentFromEvent(event);this.manageOpen();}onLongpressSlotChange(event){this.longpressContent=this.extractSlotContentFromEvent(event);this.manageOpen();}onHoverSlotChange(event){this.hoverContent=this.extractSlotContentFromEvent(event);this.manageOpen();}onTargetSlotChange(event){this.targetContent=this.extractSlotContentFromEvent(event);}extractSlotContentFromEvent(event){const slot=event.target;const nodes=slot.assignedNodes({flatten:true});return nodes.find(node=>node instanceof HTMLElement);}disconnectedCallback(){if(this.closeClickOverlay){this.closeClickOverlay();delete this.closeClickOverlay;}if(this.closeHoverOverlay){this.closeHoverOverlay();delete this.closeClickOverlay;}super.disconnectedCallback();}}OverlayTrigger.openOverlay=async(target,interaction,content,options)=>{return await openOverlay(target,interaction,content,options);};__decorate([property({reflect:true})],OverlayTrigger.prototype,"placement",void 0);__decorate([property()],OverlayTrigger.prototype,"type",void 0);__decorate([property({type:Number,reflect:true})],OverlayTrigger.prototype,"offset",void 0);__decorate([property({reflect:true})],OverlayTrigger.prototype,"open",void 0);__decorate([property({type:Boolean,reflect:true})],OverlayTrigger.prototype,"disabled",void 0);

let _$n=t=>t,_t$n,_t2$7,_t3$2,_t4$2,_t5$1,_t6;const chevronClass={s:'spectrum-UIIcon-ChevronDown75',m:'spectrum-UIIcon-ChevronDown100',l:'spectrum-UIIcon-ChevronDown200',xl:'spectrum-UIIcon-ChevronDown300'};/**
 * @element sp-picker
 * @slot label - The placeholder content for the picker
 *
 * @fires change - Announces that the `value` of the element has changed
 * @fires sp-opened - Announces that the overlay has been opened
 * @fires sp-closed - Announces that the overlay has been closed
 */class PickerBase extends SizedMixin$2(Focusable$1){constructor(){super();this.disabled=false;this.focused=false;this.invalid=false;this.open=false;this.readonly=false;this.menuItems=[];/**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */this.placement='bottom-start';this.quiet=false;this.value='';this.listRole='listbox';this.itemRole='option';this.onKeydown=event=>{if(event.code!=='ArrowDown'&&event.code!=='ArrowUp'){return;}event.preventDefault();this.toggle(true);};this.menuStatePromise=Promise.resolve();this.onKeydown=this.onKeydown.bind(this);this.addEventListener('sp-menu-item-query-role',event=>{event.stopPropagation();event.detail.role=this.itemRole;});this.addEventListener('sp-menu-query-role',event=>{event.stopPropagation();event.detail.role=this.listRole;});}get target(){return this.button;}get focusElement(){if(this.open){return this.optionsMenu;}return this.button;}forceFocusVisible(){this.focused=true;}onButtonBlur(){this.focused=false;this.target.removeEventListener('keydown',this.onKeydown);}onButtonClick(){this.toggle();}onButtonFocus(){this.target.addEventListener('keydown',this.onKeydown);}onClick(event){const target=event.target;/* c8 ignore 6 */if(!target||target.disabled){if(target){this.focus();}return;}if(target.value){this.setValueFromItem(target);}}async setValueFromItem(item){const oldSelectedItem=this.selectedItem;const oldValue=this.value;this.selectedItem=item;this.value=item.value;this.open=false;await this.updateComplete;const applyDefault=this.dispatchEvent(new Event('change',{cancelable:true}));if(!applyDefault){this.selectedItem=oldSelectedItem;this.value=oldValue;this.open=true;return;}if(oldSelectedItem){oldSelectedItem.selected=false;}item.selected=true;}toggle(target){if(this.readonly){return;}this.open=typeof target!=='undefined'?target:!this.open;}close(){if(this.readonly){return;}this.open=false;}onOverlayClosed(){this.close();if(this.restoreChildren){this.restoreChildren();this.restoreChildren=undefined;}this.menuStateResolver();}async openMenu(){/* c8 ignore next 9 */let reparentableChildren=[];const deprecatedMenu=this.querySelector('sp-menu');if(deprecatedMenu){reparentableChildren=Array.from(deprecatedMenu.children);}else {reparentableChildren=Array.from(this.children).filter(element=>{return !element.hasAttribute('slot');});}if(reparentableChildren.length===0){this.menuStateResolver();return;}this.restoreChildren=reparentChildren$1(reparentableChildren,this.optionsMenu);this.optionsMenu.selectable=true;this.sizePopover(this.popover);const{popover}=this;this.closeOverlay=await Picker.openOverlay(this,'inline',popover,{placement:this.placement,receivesFocus:'auto'});this.manageSelection();this.menuStateResolver();}sizePopover(popover){// only use `this.offsetWidth` when Standard variant
const menuWidth=!this.quiet&&`${this.offsetWidth}px`;if(menuWidth){popover.style.setProperty('width',menuWidth);}}closeMenu(){if(this.closeOverlay){this.closeOverlay();delete this.closeOverlay;}}get buttonContent(){return [html(_t$n||(_t$n=_$n`
                <span
                    id="label"
                    class=${0}
                >
                    ${0}
                </span>
                ${0}
                <sp-icon-chevron100
                    class="icon picker ${0}"
                ></sp-icon-chevron100>
            `),ifDefined(this.value?undefined:'placeholder'),this.value&&this.selectedItem?this.selectedItem.itemText:html(_t2$7||(_t2$7=_$n`
                              <slot name="label">${0}</slot>
                          `),this.label),this.invalid?html(_t3$2||(_t3$2=_$n`
                          <sp-icon-alert class="validationIcon"></sp-icon-alert>
                      `)):nothing,chevronClass[this.size])];}get renderButton(){return html(_t4$2||(_t4$2=_$n`
            <button
                aria-haspopup="true"
                aria-expanded=${0}
                aria-labelledby="button label"
                id="button"
                class="button"
                @blur=${0}
                @click=${0}
                @focus=${0}
                ?disabled=${0}
            >
                ${0}
            </button>
        `),this.open?'true':'false',this.onButtonBlur,this.onButtonClick,this.onButtonFocus,this.disabled,this.buttonContent);}render(){return html(_t5$1||(_t5$1=_$n`
            ${0} ${0}
        `),this.renderButton,this.renderPopover);}get renderPopover(){return html(_t6||(_t6=_$n`
            <sp-popover
                open
                id="popover"
                @click=${0}
                @sp-overlay-closed=${0}
            >
                <sp-menu id="menu" role="${0}"></sp-menu>
            </sp-popover>
        `),this.onClick,this.onOverlayClosed,this.listRole);}updateMenuItems(){this.menuItems=[...this.querySelectorAll('sp-menu-item')];}firstUpdated(changedProperties){super.firstUpdated(changedProperties);// Since the sp-menu gets reparented by the popover, initialize it here
this.optionsMenu=this.shadowRoot.querySelector('sp-menu');this.updateMenuItems();const deprecatedMenu=this.querySelector('sp-menu');if(deprecatedMenu){console.warn(`Deprecation Notice: You no longer need to provide an sp-menu child to ${this.tagName.toLowerCase()}. Any styling or attributes on the sp-menu will be ignored.`);}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has('value')&&!changedProperties.has('selectedItem')){this.manageSelection();}if(changedProperties.has('disabled')&&this.disabled){this.open=false;}if(changedProperties.has('open')&&(this.open||typeof changedProperties.get('open')!=='undefined')){this.menuStatePromise=new Promise(res=>this.menuStateResolver=res);if(this.open){this.openMenu();}else {this.closeMenu();}}}manageSelection(){if(!this.open){this.updateMenuItems();}/* c8 ignore next 3 */if(this.menuItems.length>0){let selectedItem;this.menuItems.forEach(item=>{if(this.value===item.value&&!item.disabled){selectedItem=item;}else {item.selected=false;}});if(selectedItem){selectedItem.selected=true;this.selectedItem=selectedItem;}else {this.value='';this.selectedItem=undefined;}if(this.open){this.optionsMenu.updateSelectedItemIndex();}return;}}async _getUpdateComplete(){await super._getUpdateComplete();await this.menuStatePromise;}connectedCallback(){if(!this.open){this.updateMenuItems();}super.connectedCallback();}disconnectedCallback(){this.open=false;super.disconnectedCallback();}}/**
 * @private
 */PickerBase.openOverlay=async(target,interaction,content,options)=>{return await openOverlay(target,interaction,content,options);};__decorate([query('#button')],PickerBase.prototype,"button",void 0);__decorate([property({type:Boolean,reflect:true})],PickerBase.prototype,"disabled",void 0);__decorate([property({type:Boolean,reflect:true})],PickerBase.prototype,"focused",void 0);__decorate([property({type:Boolean,reflect:true})],PickerBase.prototype,"invalid",void 0);__decorate([property()],PickerBase.prototype,"label",void 0);__decorate([property({type:Boolean,reflect:true})],PickerBase.prototype,"open",void 0);__decorate([property({type:Boolean,reflect:true})],PickerBase.prototype,"readonly",void 0);__decorate([property()],PickerBase.prototype,"placement",void 0);__decorate([property({type:Boolean,reflect:true})],PickerBase.prototype,"quiet",void 0);__decorate([property({type:String})],PickerBase.prototype,"value",void 0);__decorate([property({attribute:false})],PickerBase.prototype,"selectedItem",void 0);__decorate([query('sp-popover')],PickerBase.prototype,"popover",void 0);class Picker extends PickerBase{constructor(){super(...arguments);this.onKeydown=event=>{const{code}=event;if(!code.startsWith('Arrow')||this.readonly){return;}event.preventDefault();if(code==='ArrowUp'||code==='ArrowDown'){this.toggle(true);return;}const selectedIndex=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1;// use a positive offset to find the first non-disabled item when no selection is available.
const nextOffset=!this.value||code==='ArrowRight'?1:-1;let nextIndex=selectedIndex+nextOffset;while(this.menuItems[nextIndex]&&this.menuItems[nextIndex].disabled){nextIndex+=nextOffset;}if(!this.menuItems[nextIndex]||this.menuItems[nextIndex].disabled){return;}if(!this.value||nextIndex!==selectedIndex){this.setValueFromItem(this.menuItems[nextIndex]);}};}static get styles(){return [styles$3,styles$4];}}

customElements.define('sp-picker',Picker);

Picker.openOverlay=async(target,interaction,content,options)=>{return await Overlay.open(target,interaction,content,options);};

let _$o=t=>t,_t$o;const styles$a=css(_t$o||(_t$o=_$o`
.header{display:block;margin:var(--spectrum-listitem-heading-margin);padding:var(--spectrum-listitem-heading-padding);font-size:var(--spectrum-listitem-heading-text-size);font-weight:var(--spectrum-listitem-heading-text-font-weight);line-height:var(--spectrum-listitem-heading-line-height);text-transform:var(--spectrum-listitem-heading-text-transform);letter-spacing:var(--spectrum-listitem-heading-letter-spacing);color:var(--spectrum-listheading-text-color)}:host([dir=ltr]) .header{padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150)}:host([dir=rtl]) .header{padding:0 var(--spectrum-global-dimension-size-150) 0 var(--spectrum-global-dimension-size-450)}sp-menu{display:block}
`));

let _$p=t=>t,_t$p;/**
 * Spectrum Menu Group Component
 * @element sp-menu-group
 *
 * @slot header - headline of the menu group
 * @slot - menu items to be listed in the group
 */class MenuGroup extends SpectrumElement$2{constructor(){super();this.instanceCount=MenuGroup.instances;MenuGroup.instances+=1;}static get styles(){return [styles$a];}render(){const labelledby=`menu-heading-category-${this.instanceCount}`;return html(_t$p||(_t$p=_$p`
            <span class="header" id=${0} aria-hidden="true">
                <slot name="header"></slot>
            </span>
            <sp-menu role="presentation">
                <slot></slot>
            </sp-menu>
        `),labelledby);}firstUpdated(){this.setAttribute('role','none');}}MenuGroup.instances=0;

customElements.define('sp-menu-group',MenuGroup);

let _$q=t=>t,_t$q;const Checkmark100Icon=()=>{return tag(_t$q||(_t$q=_$q`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`));};

class IconCheckmark100 extends IconBase{render(){setCustomTemplateLiteralTag(html);return Checkmark100Icon();}}

customElements.define('sp-icon-checkmark100',IconCheckmark100);

let _$r=t=>t,_t$r;const styles$b=css(_t$r||(_t$r=_$r`
:host{--spectrum-button-line-height:1.3;position:relative;box-sizing:border-box;align-items:center;justify-content:center;overflow:visible;margin:0;border-style:solid;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;text-decoration:none;font-family:var(--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base));line-height:var(--spectrum-button-line-height);user-select:none;-webkit-user-select:none;cursor:pointer}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;padding:0;margin-top:-2px;margin-bottom:-2px}:host(:disabled){cursor:default}:host:after{border-radius:calc(var(--spectrum-button-primary-border-radius) + var(--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)));content:"";display:block;position:absolute;left:0;right:0;bottom:0;top:0;margin:calc(var(--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25))*-1);transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(.focus-visible):after,:host(.focus-visible):after{margin:calc(var(--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25))*-2)}:host(.focus-visible):after,:host(:focus-visible):after{margin:calc(var(--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25))*-2)}:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){pointer-events:none;cursor:auto}#button{position:absolute;top:0;right:0;bottom:0;left:0}:host:after{pointer-events:none}slot[name=icon]::slotted(:not(sp-icon)){fill:currentColor;stroke:currentColor;height:var(--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225));width:var(--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225))}
`));

let _$s=t=>t,_t$s,_t2$8,_t3$3,_t4$3;class ButtonBase extends LikeAnchor$1(ObserveSlotText$1(ObserveSlotPresence$1(Focusable$1,'[slot="icon"]'))){constructor(){super();this.active=false;this.type='button';this.proxyFocus=this.proxyFocus.bind(this);this.addEventListener('click',this.handleClickCapture,{capture:true});}static get styles(){return [styles$b];}get hasIcon(){return this.slotContentIsPresent;}get hasLabel(){return this.slotHasContent;}get focusElement(){return this;}get buttonContent(){const content=[html(_t$s||(_t$s=_$s`
                <div id="label" ?hidden=${0}>
                    <slot
                        id="slot"
                        @slotchange=${0}
                    ></slot>
                </div>
            `),!this.hasLabel,this.manageTextObservedSlot)];if(this.hasIcon){content.unshift(html(_t2$8||(_t2$8=_$s`
                <slot name="icon" ?icon-only=${0}></slot>
            `),!this.hasLabel));}return content;}click(){if(this.disabled){return;}if(this.shouldProxyClick()){return;}super.click();}handleClickCapture(event){if(this.disabled){event.preventDefault();event.stopImmediatePropagation();event.stopPropagation();return false;}}proxyFocus(){this.focus();}shouldProxyClick(){let handled=false;if(this.anchorElement){this.anchorElement.click();handled=true;}else if(this.type!=='button'){const proxy=document.createElement('button');proxy.type=this.type;this.insertAdjacentElement('afterend',proxy);proxy.click();proxy.remove();handled=true;}return handled;}renderAnchor(){return html(_t3$3||(_t3$3=_$s`
            ${0}
            ${0}
        `),this.buttonContent,super.renderAnchor({id:'button',className:'button anchor hidden'}));}renderButton(){return html(_t4$3||(_t4$3=_$s`
            ${0}
        `),this.buttonContent);}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton();}handleKeydown(event){const{code}=event;switch(code){case'Space':event.preventDefault();if(typeof this.href==='undefined'){this.addEventListener('keyup',this.handleKeyup);this.active=true;}break;default:break;}}handleKeypress(event){const{code}=event;switch(code){case'Enter':this.click();break;default:break;}}handleKeyup(event){const{code}=event;switch(code){case'Space':this.removeEventListener('keyup',this.handleKeyup);this.active=false;this.click();break;default:break;}}handleRemoveActive(){this.active=false;}handlePointerdown(){this.active=true;}manageAnchor(){if(this.href&&this.href.length>0){this.removeAttribute('role');this.removeEventListener('click',this.shouldProxyClick);}else if(!this.hasAttribute('role')){this.setAttribute('role','button');this.addEventListener('click',this.shouldProxyClick);}}firstUpdated(changed){super.firstUpdated(changed);if(!this.hasAttribute('tabindex')){this.tabIndex=0;}this.manageAnchor();this.addEventListener('keydown',this.handleKeydown);this.addEventListener('keypress',this.handleKeypress);this.addEventListener('pointerdown',this.handlePointerdown);}updated(changed){super.updated(changed);if(changed.has('href')){this.manageAnchor();}if(changed.has('label')){this.setAttribute('aria-label',this.label||'');}if(changed.has('active')){if(this.active){this.addEventListener('focusout',this.handleRemoveActive);this.addEventListener('pointerup',this.handleRemoveActive);this.addEventListener('pointerleave',this.handleRemoveActive);}else {this.removeEventListener('focusout',this.handleRemoveActive);this.removeEventListener('pointerup',this.handleRemoveActive);this.removeEventListener('pointerleave',this.handleRemoveActive);}}if(this.anchorElement){this.anchorElement.addEventListener('focus',this.proxyFocus);this.anchorElement.tabIndex=-1;}}}__decorate([property({type:Boolean,reflect:true})],ButtonBase.prototype,"active",void 0);__decorate([property({type:String})],ButtonBase.prototype,"type",void 0);__decorate([query('.anchor')],ButtonBase.prototype,"anchorElement",void 0);

let _$t=t=>t,_t$t;const styles$c=css(_t$t||(_t$t=_$t`
::slotted([slot=icon]){max-height:100%;flex-shrink:0}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([size=s]){--spectrum-button-primary-focus-ring-size-key-focus:var(--spectrum-button-primary-s-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size));--spectrum-button-primary-text-font-weight:var(--spectrum-button-primary-s-text-font-weight,var(--spectrum-global-font-weight-bold));--spectrum-button-primary-text-line-height:var(--spectrum-button-primary-s-text-line-height,var(--spectrum-alias-component-text-line-height));--spectrum-button-primary-border-size:var(--spectrum-button-primary-s-border-size,var(--spectrum-alias-border-size-thick));--spectrum-button-primary-text-size:var(--spectrum-button-primary-s-text-size,var(--spectrum-alias-item-text-size-s));--spectrum-button-primary-icon-gap:var(--spectrum-button-primary-s-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-s));--spectrum-button-primary-height:var(--spectrum-button-primary-s-height,var(--spectrum-alias-item-height-s));--spectrum-button-primary-padding-left:var(--spectrum-button-primary-s-padding-left,var(--spectrum-alias-item-rounded-workflow-padding-left-s));--spectrum-button-primary-border-radius:var(--spectrum-button-primary-s-border-radius,var(--spectrum-alias-item-rounded-border-radius-s));--spectrum-button-primary-min-width:var(--spectrum-button-primary-s-min-width,var(--spectrum-global-dimension-size-675));--spectrum-button-primary-textonly-padding-left:var(--spectrum-button-primary-s-textonly-padding-left,var(--spectrum-alias-item-rounded-padding-s));--spectrum-button-primary-textonly-padding-right:var(--spectrum-button-primary-s-textonly-padding-right,var(--spectrum-alias-item-rounded-padding-s));--spectrum-button-primary-text-padding-top:calc(var(--spectrum-button-primary-s-text-padding-top,
var(--spectrum-alias-item-text-padding-top-s)) - 3px)}:host([size=m]){--spectrum-button-primary-min-width:var(--spectrum-button-primary-m-min-width);--spectrum-button-primary-focus-ring-size-key-focus:var(--spectrum-button-primary-m-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size));--spectrum-button-primary-text-font-weight:var(--spectrum-button-primary-m-text-font-weight,var(--spectrum-global-font-weight-bold));--spectrum-button-primary-text-line-height:var(--spectrum-button-primary-m-text-line-height,var(--spectrum-alias-component-text-line-height));--spectrum-button-primary-border-size:var(--spectrum-button-primary-m-border-size,var(--spectrum-alias-border-size-thick));--spectrum-button-primary-text-size:var(--spectrum-button-primary-m-text-size,var(--spectrum-alias-item-text-size-m));--spectrum-button-primary-text-padding-top:var(--spectrum-button-primary-m-text-padding-top,var(--spectrum-alias-item-text-padding-top-m));--spectrum-button-primary-height:var(--spectrum-button-primary-m-height,var(--spectrum-alias-item-height-m));--spectrum-button-primary-icon-gap:var(--spectrum-button-primary-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m));--spectrum-button-primary-padding-left:var(--spectrum-button-primary-m-padding-left,var(--spectrum-alias-item-rounded-workflow-padding-left-m));--spectrum-button-primary-border-radius:var(--spectrum-button-primary-m-border-radius,var(--spectrum-alias-item-rounded-border-radius-m));--spectrum-button-primary-textonly-padding-left:var(--spectrum-button-primary-m-textonly-padding-left,var(--spectrum-alias-item-rounded-padding-m));--spectrum-button-primary-textonly-padding-right:var(--spectrum-button-primary-m-textonly-padding-right,var(--spectrum-alias-item-rounded-padding-m))}:host([size=l]){--spectrum-button-primary-focus-ring-size-key-focus:var(--spectrum-button-primary-l-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size));--spectrum-button-primary-text-font-weight:var(--spectrum-button-primary-l-text-font-weight,var(--spectrum-global-font-weight-bold));--spectrum-button-primary-text-line-height:var(--spectrum-button-primary-l-text-line-height,var(--spectrum-alias-component-text-line-height));--spectrum-button-primary-border-size:var(--spectrum-button-primary-l-border-size,var(--spectrum-alias-border-size-thick));--spectrum-button-primary-text-size:var(--spectrum-button-primary-l-text-size,var(--spectrum-alias-item-text-size-l));--spectrum-button-primary-text-padding-top:var(--spectrum-button-primary-l-text-padding-top,var(--spectrum-alias-item-text-padding-top-l));--spectrum-button-primary-icon-gap:var(--spectrum-button-primary-l-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l));--spectrum-button-primary-height:var(--spectrum-button-primary-l-height,var(--spectrum-alias-item-height-l));--spectrum-button-primary-padding-left:var(--spectrum-button-primary-l-padding-left,var(--spectrum-alias-item-rounded-workflow-padding-left-l));--spectrum-button-primary-border-radius:var(--spectrum-button-primary-l-border-radius,var(--spectrum-alias-item-rounded-border-radius-l));--spectrum-button-primary-min-width:var(--spectrum-button-primary-l-min-width,var(--spectrum-global-dimension-size-1125));--spectrum-button-primary-textonly-padding-left:var(--spectrum-button-primary-l-textonly-padding-left,var(--spectrum-alias-item-rounded-padding-l));--spectrum-button-primary-textonly-padding-right:var(--spectrum-button-primary-l-textonly-padding-right,var(--spectrum-alias-item-rounded-padding-l))}:host([size=xl]){--spectrum-button-primary-focus-ring-size-key-focus:var(--spectrum-button-primary-xl-focus-ring-size-key-focus,var(--spectrum-alias-focus-ring-size));--spectrum-button-primary-text-font-weight:var(--spectrum-button-primary-xl-text-font-weight,var(--spectrum-global-font-weight-bold));--spectrum-button-primary-text-line-height:var(--spectrum-button-primary-xl-text-line-height,var(--spectrum-alias-component-text-line-height));--spectrum-button-primary-border-size:var(--spectrum-button-primary-xl-border-size,var(--spectrum-alias-border-size-thick));--spectrum-button-primary-icon-gap:var(--spectrum-button-primary-xl-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l));--spectrum-button-primary-text-size:var(--spectrum-button-primary-xl-text-size,var(--spectrum-alias-item-text-size-xl));--spectrum-button-primary-text-padding-top:var(--spectrum-button-primary-xl-text-padding-top,var(--spectrum-alias-item-text-padding-top-xl));--spectrum-button-primary-height:var(--spectrum-button-primary-xl-height,var(--spectrum-alias-item-height-xl));--spectrum-button-primary-padding-left:var(--spectrum-button-primary-xl-padding-left,var(--spectrum-alias-item-rounded-workflow-padding-left-xl));--spectrum-button-primary-border-radius:var(--spectrum-button-primary-xl-border-radius,var(--spectrum-alias-item-rounded-border-radius-xl));--spectrum-button-primary-min-width:var(--spectrum-button-primary-xl-min-width,var(--spectrum-global-dimension-size-1250));--spectrum-button-primary-textonly-padding-left:var(--spectrum-button-primary-xl-textonly-padding-left,var(--spectrum-alias-item-rounded-padding-xl));--spectrum-button-primary-textonly-padding-right:var(--spectrum-button-primary-xl-textonly-padding-right,var(--spectrum-alias-item-rounded-padding-xl))}:host{--spectrum-button-primary-padding-left-adjusted:calc(var(--spectrum-button-primary-padding-left) - var(--spectrum-button-primary-border-size));--spectrum-button-primary-textonly-padding-left-adjusted:calc(var(--spectrum-button-primary-textonly-padding-left) - var(--spectrum-button-primary-border-size));--spectrum-button-primary-textonly-padding-right-adjusted:calc(var(--spectrum-button-primary-textonly-padding-right) - var(--spectrum-button-primary-border-size));--spectrum-button-padding-y:calc(var(--spectrum-button-primary-text-padding-top) - 1px)}:host([dir=ltr]){padding-left:var(--spectrum-button-primary-textonly-padding-left-adjusted);padding-right:var(--spectrum-button-primary-textonly-padding-right-adjusted)}:host([dir=rtl]){padding-right:var(--spectrum-button-primary-textonly-padding-left-adjusted);padding-left:var(--spectrum-button-primary-textonly-padding-right-adjusted)}:host{border-width:var(--spectrum-button-primary-border-size);border-style:solid;border-radius:var(--spectrum-button-primary-border-radius);min-height:var(--spectrum-button-primary-height);height:auto;min-width:var(--spectrum-button-primary-min-width);padding-bottom:calc(var(--spectrum-button-padding-y) + 1px);padding-top:calc(var(--spectrum-button-padding-y) - 1px);font-size:var(--spectrum-button-primary-text-size);font-weight:var(--spectrum-button-primary-text-font-weight)}:host(:hover),:host([active]){box-shadow:none}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-button-primary-textonly-padding-left-adjusted) - var(--spectrum-button-primary-padding-left-adjusted)))}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc(-1*(var(--spectrum-button-primary-textonly-padding-left-adjusted) - var(--spectrum-button-primary-padding-left-adjusted)))}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(--spectrum-button-primary-icon-gap)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(--spectrum-button-primary-icon-gap)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}#label{line-height:var(--spectrum-button-primary-text-line-height)}:host(.focus-visible):after,:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-focus-ring-size-key-focus) var(--spectrum-button-primary-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color))}:host(.focus-visible):after,:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-focus-ring-size-key-focus) var(--spectrum-button-primary-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color))}:host([variant=cta]){background-color:var(--spectrum-button-cta-m-background-color,var(--spectrum-semantic-cta-color-background-default));border-color:var(--spectrum-button-cta-m-border-color,var(--spectrum-semantic-cta-color-background-default));color:var(--spectrum-button-cta-m-text-color,var(--spectrum-global-color-static-white))}:host([variant=cta]:hover){background-color:var(--spectrum-button-cta-m-background-color-hover,var(--spectrum-semantic-cta-color-background-hover));border-color:var(--spectrum-button-cta-m-border-color-hover,var(--spectrum-semantic-cta-color-background-hover));color:var(--spectrum-button-cta-m-text-color-hover,var(--spectrum-global-color-static-white))}:host([variant=cta].focus-visible),:host([variant=cta].focus-visible){background-color:var(--spectrum-button-cta-m-background-color-key-focus,var(--spectrum-semantic-cta-color-background-hover));border-color:var(--spectrum-button-cta-m-border-color-key-focus,var(--spectrum-semantic-cta-color-background-hover));color:var(--spectrum-button-cta-m-text-color-key-focus,var(--spectrum-global-color-static-white))}:host([variant=cta].focus-visible),:host([variant=cta]:focus-visible){background-color:var(--spectrum-button-cta-m-background-color-key-focus,var(--spectrum-semantic-cta-color-background-hover));border-color:var(--spectrum-button-cta-m-border-color-key-focus,var(--spectrum-semantic-cta-color-background-hover));color:var(--spectrum-button-cta-m-text-color-key-focus,var(--spectrum-global-color-static-white))}:host([variant=cta][active]){background-color:var(--spectrum-button-cta-m-background-color-down,var(--spectrum-semantic-cta-color-background-down));border-color:var(--spectrum-button-cta-m-border-color-down,var(--spectrum-semantic-cta-color-background-down));color:var(--spectrum-button-cta-m-text-color-down,var(--spectrum-global-color-static-white))}:host([variant=cta]:disabled),:host([variant=cta][disabled]){background-color:var(--spectrum-button-cta-m-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-cta-m-border-color-disabled,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-cta-m-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=primary]){background-color:var(--spectrum-button-primary-m-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-primary-m-border-color,var(--spectrum-global-color-gray-800));color:var(--spectrum-button-primary-m-text-color,var(--spectrum-global-color-gray-800))}:host([variant=primary]:hover){background-color:var(--spectrum-button-primary-m-background-color-hover,var(--spectrum-global-color-gray-800));border-color:var(--spectrum-button-primary-m-border-color-hover,var(--spectrum-global-color-gray-800));color:var(--spectrum-button-primary-m-text-color-hover,var(--spectrum-global-color-gray-50))}:host([variant=primary].focus-visible),:host([variant=primary].focus-visible){background-color:var(--spectrum-button-primary-m-background-color-key-focus,var(--spectrum-global-color-gray-800));border-color:var(--spectrum-button-primary-m-border-color-key-focus,var(--spectrum-global-color-gray-800));color:var(--spectrum-button-primary-m-text-color-key-focus,var(--spectrum-global-color-gray-50))}:host([variant=primary].focus-visible),:host([variant=primary]:focus-visible){background-color:var(--spectrum-button-primary-m-background-color-key-focus,var(--spectrum-global-color-gray-800));border-color:var(--spectrum-button-primary-m-border-color-key-focus,var(--spectrum-global-color-gray-800));color:var(--spectrum-button-primary-m-text-color-key-focus,var(--spectrum-global-color-gray-50))}:host([variant=primary][active]){background-color:var(--spectrum-button-primary-m-background-color-down,var(--spectrum-global-color-gray-900));border-color:var(--spectrum-button-primary-m-border-color-down,var(--spectrum-global-color-gray-900));color:var(--spectrum-button-primary-m-text-color-down,var(--spectrum-global-color-gray-50))}:host([variant=primary]:disabled),:host([variant=primary][disabled]){background-color:var(--spectrum-button-primary-m-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-primary-m-border-color-disabled,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-primary-m-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=secondary]){background-color:var(--spectrum-button-secondary-m-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-secondary-m-border-color,var(--spectrum-global-color-gray-700));color:var(--spectrum-button-secondary-m-text-color,var(--spectrum-global-color-gray-700))}:host([variant=secondary]:hover){background-color:var(--spectrum-button-secondary-m-background-color-hover,var(--spectrum-global-color-gray-700));border-color:var(--spectrum-button-secondary-m-border-color-hover,var(--spectrum-global-color-gray-700));color:var(--spectrum-button-secondary-m-text-color-hover,var(--spectrum-global-color-gray-50))}:host([variant=secondary].focus-visible),:host([variant=secondary].focus-visible){background-color:var(--spectrum-button-secondary-m-background-color-key-focus,var(--spectrum-global-color-gray-700));border-color:var(--spectrum-button-secondary-m-border-color-key-focus,var(--spectrum-global-color-gray-700));color:var(--spectrum-button-secondary-m-text-color-key-focus,var(--spectrum-global-color-gray-50))}:host([variant=secondary].focus-visible),:host([variant=secondary]:focus-visible){background-color:var(--spectrum-button-secondary-m-background-color-key-focus,var(--spectrum-global-color-gray-700));border-color:var(--spectrum-button-secondary-m-border-color-key-focus,var(--spectrum-global-color-gray-700));color:var(--spectrum-button-secondary-m-text-color-key-focus,var(--spectrum-global-color-gray-50))}:host([variant=secondary][active]){background-color:var(--spectrum-button-secondary-m-background-color-down,var(--spectrum-global-color-gray-800));border-color:var(--spectrum-button-secondary-m-border-color-down,var(--spectrum-global-color-gray-800));color:var(--spectrum-button-secondary-m-text-color-down,var(--spectrum-global-color-gray-50))}:host([variant=secondary]:disabled),:host([variant=secondary][disabled]){background-color:var(--spectrum-button-secondary-m-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-secondary-m-border-color-disabled,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-secondary-m-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=negative]){background-color:var(--spectrum-button-warning-m-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-warning-m-border-color,var(--spectrum-semantic-negative-color-text-small));color:var(--spectrum-button-warning-m-text-color,var(--spectrum-semantic-negative-color-text-small))}:host([variant=negative]:hover){background-color:var(--spectrum-button-warning-m-background-color-hover,var(--spectrum-semantic-negative-color-text-small));border-color:var(--spectrum-button-warning-m-border-color-hover,var(--spectrum-semantic-negative-color-text-small));color:var(--spectrum-button-warning-m-text-color-hover,var(--spectrum-global-color-gray-50))}:host([variant=negative].focus-visible),:host([variant=negative].focus-visible){background-color:var(--spectrum-button-warning-m-background-color-key-focus,var(--spectrum-semantic-negative-color-text-small));border-color:var(--spectrum-button-warning-m-border-color-key-focus,var(--spectrum-semantic-negative-color-text-small));color:var(--spectrum-button-warning-m-text-color-key-focus,var(--spectrum-global-color-gray-50))}:host([variant=negative].focus-visible),:host([variant=negative]:focus-visible){background-color:var(--spectrum-button-warning-m-background-color-key-focus,var(--spectrum-semantic-negative-color-text-small));border-color:var(--spectrum-button-warning-m-border-color-key-focus,var(--spectrum-semantic-negative-color-text-small));color:var(--spectrum-button-warning-m-text-color-key-focus,var(--spectrum-global-color-gray-50))}:host([variant=negative][active]){background-color:var(--spectrum-button-warning-m-background-color-down,var(--spectrum-global-color-red-700));border-color:var(--spectrum-button-warning-m-border-color-down,var(--spectrum-global-color-red-700));color:var(--spectrum-button-warning-m-text-color-down,var(--spectrum-global-color-gray-50))}:host([variant=negative]:disabled),:host([variant=negative][disabled]){background-color:var(--spectrum-button-warning-m-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-warning-m-border-color-disabled,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-warning-m-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=overBackground]){background-color:var(--spectrum-button-over-background-m-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-over-background-m-border-color,var(--spectrum-global-color-static-white));color:var(--spectrum-button-over-background-m-text-color,var(--spectrum-global-color-static-white))}:host([variant=overBackground].focus-visible),:host([variant=overBackground].focus-visible),:host([variant=overBackground]:hover){background-color:var(--spectrum-button-over-background-m-background-color-hover,var(--spectrum-global-color-static-white));border-color:var(--spectrum-button-over-background-m-border-color-hover,var(--spectrum-global-color-static-white));color:inherit}:host([variant=overBackground].focus-visible),:host([variant=overBackground]:focus-visible),:host([variant=overBackground]:hover){background-color:var(--spectrum-button-over-background-m-background-color-hover,var(--spectrum-global-color-static-white));border-color:var(--spectrum-button-over-background-m-border-color-hover,var(--spectrum-global-color-static-white));color:inherit}:host([variant=overBackground].focus-visible):after,:host([variant=overBackground].focus-visible):after{box-shadow:0 0 0 var(--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)) var(--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white))}:host([variant=overBackground].focus-visible):after,:host([variant=overBackground]:focus-visible):after{box-shadow:0 0 0 var(--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)) var(--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white))}:host([variant=overBackground][active]){background-color:var(--spectrum-button-over-background-m-background-color-down,var(--spectrum-global-color-static-white));border-color:var(--spectrum-button-over-background-m-border-color-down,var(--spectrum-global-color-static-white));color:inherit}:host([variant=overBackground]:disabled),:host([variant=overBackground][disabled]){background-color:var(--spectrum-button-over-background-m-background-color-disabled,hsla(0,0%,100%,.1));border-color:var(--spectrum-button-over-background-m-border-color-disabled,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-over-background-m-text-color-disabled,hsla(0,0%,100%,.35))}:host([variant=overBackground][quiet]){background-color:var(--spectrum-button-quiet-over-background-m-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-over-background-m-border-color,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color,var(--spectrum-global-color-static-white))}:host([variant=overBackground][quiet].focus-visible),:host([variant=overBackground][quiet].focus-visible),:host([variant=overBackground][quiet]:hover){background-color:var(--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1));border-color:var(--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white))}:host([variant=overBackground][quiet].focus-visible),:host([variant=overBackground][quiet]:focus-visible),:host([variant=overBackground][quiet]:hover){background-color:var(--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1));border-color:var(--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white))}:host([variant=overBackground][quiet].focus-visible),:host([variant=overBackground][quiet].focus-visible){box-shadow:none}:host([variant=overBackground][quiet].focus-visible),:host([variant=overBackground][quiet]:focus-visible){box-shadow:none}:host([variant=overBackground][quiet].focus-visible):after,:host([variant=overBackground][quiet].focus-visible):after{box-shadow:0 0 0 var(--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)) var(--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white))}:host([variant=overBackground][quiet].focus-visible):after,:host([variant=overBackground][quiet]:focus-visible):after{box-shadow:0 0 0 var(--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)) var(--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white))}:host([variant=overBackground][quiet][active]){background-color:var(--spectrum-button-quiet-over-background-m-background-color-down,hsla(0,0%,100%,.2));border-color:var(--spectrum-button-quiet-over-background-m-border-color-down,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color-down,var(--spectrum-global-color-static-white))}:host([variant=overBackground][quiet]:disabled),:host([variant=overBackground][quiet][disabled]){background-color:var(--spectrum-button-quiet-over-background-m-background-color-disabled,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-over-background-m-border-color-disabled,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color-disabled,hsla(0,0%,100%,.15))}:host([variant=primary][quiet]){background-color:var(--spectrum-button-quiet-primary-m-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-primary-m-border-color,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-primary-m-text-color,var(--spectrum-global-color-gray-800))}:host([variant=primary][quiet]:hover){background-color:var(--spectrum-button-quiet-primary-m-background-color-hover,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-primary-m-border-color-hover,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-primary-m-text-color-hover,var(--spectrum-global-color-gray-900))}:host([variant=primary][quiet].focus-visible),:host([variant=primary][quiet].focus-visible){background-color:var(--spectrum-button-quiet-primary-m-background-color-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-primary-m-border-color-key-focus,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-primary-m-text-color-key-focus,var(--spectrum-global-color-gray-900))}:host([variant=primary][quiet].focus-visible),:host([variant=primary][quiet]:focus-visible){background-color:var(--spectrum-button-quiet-primary-m-background-color-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-primary-m-border-color-key-focus,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-primary-m-text-color-key-focus,var(--spectrum-global-color-gray-900))}:host([variant=primary][quiet][active]){background-color:var(--spectrum-button-quiet-primary-m-background-color-down,var(--spectrum-global-color-gray-300));border-color:var(--spectrum-button-quiet-primary-m-border-color-down,var(--spectrum-global-color-gray-300));color:var(--spectrum-button-quiet-primary-m-text-color-down,var(--spectrum-global-color-gray-900))}:host([variant=primary][quiet]:disabled),:host([variant=primary][quiet][disabled]){background-color:var(--spectrum-button-quiet-primary-m-background-color-disabled,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-primary-m-border-color-disabled,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-primary-m-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=secondary][quiet]){background-color:var(--spectrum-button-quiet-secondary-m-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-secondary-m-border-color,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-secondary-m-text-color,var(--spectrum-global-color-gray-700))}:host([variant=secondary][quiet]:hover){background-color:var(--spectrum-button-quiet-secondary-m-background-color-hover,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-secondary-m-border-color-hover,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-secondary-m-text-color-hover,var(--spectrum-global-color-gray-800))}:host([variant=secondary][quiet].focus-visible),:host([variant=secondary][quiet].focus-visible){background-color:var(--spectrum-button-quiet-secondary-m-background-color-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-secondary-m-border-color-key-focus,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-secondary-m-text-color-key-focus,var(--spectrum-global-color-gray-800))}:host([variant=secondary][quiet].focus-visible),:host([variant=secondary][quiet]:focus-visible){background-color:var(--spectrum-button-quiet-secondary-m-background-color-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-secondary-m-border-color-key-focus,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-secondary-m-text-color-key-focus,var(--spectrum-global-color-gray-800))}:host([variant=secondary][quiet][active]){background-color:var(--spectrum-button-quiet-secondary-m-background-color-down,var(--spectrum-global-color-gray-300));border-color:var(--spectrum-button-quiet-secondary-m-border-color-down,var(--spectrum-global-color-gray-300));color:var(--spectrum-button-quiet-secondary-m-text-color-down,var(--spectrum-global-color-gray-800))}:host([variant=secondary][quiet]:disabled),:host([variant=secondary][quiet][disabled]){background-color:var(--spectrum-button-quiet-secondary-m-background-color-disabled,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-secondary-m-border-color-disabled,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-secondary-m-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([variant=negative][quiet]){background-color:var(--spectrum-button-quiet-warning-m-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-warning-m-border-color,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-warning-m-text-color,var(--spectrum-semantic-negative-color-text-small))}:host([variant=negative][quiet]:hover){background-color:var(--spectrum-button-quiet-warning-m-background-color-hover,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-warning-m-border-color-hover,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-warning-m-text-color-hover,var(--spectrum-global-color-red-700))}:host([variant=negative][quiet].focus-visible),:host([variant=negative][quiet].focus-visible){background-color:var(--spectrum-button-quiet-warning-m-background-color-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-warning-m-border-color-key-focus,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-warning-m-text-color-key-focus,var(--spectrum-global-color-red-700))}:host([variant=negative][quiet].focus-visible),:host([variant=negative][quiet]:focus-visible){background-color:var(--spectrum-button-quiet-warning-m-background-color-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-button-quiet-warning-m-border-color-key-focus,var(--spectrum-global-color-gray-200));color:var(--spectrum-button-quiet-warning-m-text-color-key-focus,var(--spectrum-global-color-red-700))}:host([variant=negative][quiet][active]){background-color:var(--spectrum-button-quiet-warning-m-background-color-down,var(--spectrum-global-color-gray-300));border-color:var(--spectrum-button-quiet-warning-m-border-color-down,var(--spectrum-global-color-gray-300));color:var(--spectrum-button-quiet-warning-m-text-color-down,var(--spectrum-global-color-red-700))}:host([variant=negative][quiet]:disabled),:host([variant=negative][quiet][disabled]){background-color:var(--spectrum-button-quiet-warning-m-background-color-disabled,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-warning-m-border-color-disabled,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-warning-m-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([size=s]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-workflow-icon-size-s);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-workflow-icon-size-s);--spectrum-ui-icon-tshirt-size-height:var(--spectrum-alias-ui-icon-cornertriangle-size-75);--spectrum-ui-icon-tshirt-size-width:var(--spectrum-alias-ui-icon-cornertriangle-size-75)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-workflow-icon-size-m);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-workflow-icon-size-m);--spectrum-ui-icon-tshirt-size-height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);--spectrum-ui-icon-tshirt-size-width:var(--spectrum-alias-ui-icon-cornertriangle-size-100)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-workflow-icon-size-l);--spectrum-ui-icon-tshirt-size-height:var(--spectrum-alias-ui-icon-cornertriangle-size-200);--spectrum-ui-icon-tshirt-size-width:var(--spectrum-alias-ui-icon-cornertriangle-size-200)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-workflow-icon-size-xl);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-workflow-icon-size-xl);--spectrum-ui-icon-tshirt-size-height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);--spectrum-ui-icon-tshirt-size-width:var(--spectrum-alias-ui-icon-cornertriangle-size-300)}
`));

/**
 * A Spectrum button control.
 * @element sp-button
 */class Button extends SizedMixin$2(ButtonBase){constructor(){super(...arguments);/**
         * The visual variant to apply to this button.
         */this.variant='cta';/**
         * There is a warning in place for this control
         */this.warning=false;/**
         * Style this button to be less obvious
         */this.quiet=false;}static get styles(){return [...super.styles,styles$c];}}__decorate([property({reflect:true})],Button.prototype,"variant",void 0);__decorate([property({type:Boolean,reflect:true})],Button.prototype,"warning",void 0);__decorate([property({type:Boolean,reflect:true})],Button.prototype,"quiet",void 0);

let _$u=t=>t,_t$u;const styles$d=css(_t$u||(_t$u=_$u`
:host{background-color:var(--spectrum-clearbutton-medium-background-color,var(--spectrum-alias-background-color-transparent));color:var(--spectrum-clearbutton-medium-icon-color,var(--spectrum-alias-icon-color))}:host(:hover){background-color:var(--spectrum-clearbutton-medium-background-color-hover,var(--spectrum-alias-background-color-transparent));color:var(--spectrum-clearbutton-medium-icon-color-hover,var(--spectrum-alias-icon-color-hover))}:host([active]){background-color:var(--spectrum-clearbutton-medium-background-color-down,var(--spectrum-alias-background-color-transparent));color:var(--spectrum-clearbutton-medium-icon-color-down,var(--spectrum-alias-icon-color-down))}:host(.focus-visible),:host(.focus-visible){background-color:var(--spectrum-clearbutton-medium-background-color-key-focus,var(--spectrum-alias-background-color-transparent));color:var(--spectrum-clearbutton-medium-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host(.focus-visible),:host(:focus-visible){background-color:var(--spectrum-clearbutton-medium-background-color-key-focus,var(--spectrum-alias-background-color-transparent));color:var(--spectrum-clearbutton-medium-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host(:disabled),:host([disabled]){background-color:var(--spectrum-clearbutton-medium-background-color-disabled,var(--spectrum-alias-background-color-transparent));color:var(--spectrum-clearbutton-medium-icon-color-disabled,var(--spectrum-alias-icon-color-disabled))}:host{width:var(--spectrum-clearbutton-medium-width,var(--spectrum-alias-single-line-height));height:var(--spectrum-clearbutton-medium-height,var(--spectrum-alias-single-line-height));border-radius:100%;padding:0;margin:0;border:none}:host>.icon{margin:0 auto}:host([variant=overBackground].focus-visible):after,:host([variant=overBackground].focus-visible):after{margin:calc(var(--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25))*-1)}:host([variant=overBackground].focus-visible):after,:host([variant=overBackground]:focus-visible):after{margin:calc(var(--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25))*-1)}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){:host>.icon{margin:0}}:host([small]){width:var(--spectrum-clearbutton-small-width,var(--spectrum-global-dimension-size-300));height:var(--spectrum-clearbutton-small-height,var(--spectrum-global-dimension-size-300))}:host([variant=overBackground]){background-color:var(--spectrum-button-quiet-over-background-m-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-over-background-m-border-color,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color,var(--spectrum-global-color-static-white))}:host([variant=overBackground].focus-visible),:host([variant=overBackground].focus-visible),:host([variant=overBackground]:hover){background-color:var(--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1));border-color:var(--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white))}:host([variant=overBackground].focus-visible),:host([variant=overBackground]:focus-visible),:host([variant=overBackground]:hover){background-color:var(--spectrum-button-quiet-over-background-m-background-color-hover,hsla(0,0%,100%,.1));border-color:var(--spectrum-button-quiet-over-background-m-border-color-hover,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color-hover,var(--spectrum-global-color-static-white))}:host([variant=overBackground].focus-visible),:host([variant=overBackground].focus-visible){box-shadow:none}:host([variant=overBackground].focus-visible),:host([variant=overBackground]:focus-visible){box-shadow:none}:host([variant=overBackground].focus-visible):after,:host([variant=overBackground].focus-visible):after{box-shadow:0 0 0 var(--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)) var(--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white))}:host([variant=overBackground].focus-visible):after,:host([variant=overBackground]:focus-visible):after{box-shadow:0 0 0 var(--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)) var(--spectrum-button-over-background-m-border-color-key-focus,var(--spectrum-global-color-static-white))}:host([variant=overBackground][active]){background-color:var(--spectrum-button-quiet-over-background-m-background-color-down,hsla(0,0%,100%,.2));border-color:var(--spectrum-button-quiet-over-background-m-border-color-down,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color-down,var(--spectrum-global-color-static-white))}:host([variant=overBackground]:disabled),:host([variant=overBackground][disabled]){background-color:var(--spectrum-button-quiet-over-background-m-background-color-disabled,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-button-quiet-over-background-m-border-color-disabled,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-button-quiet-over-background-m-text-color-disabled,hsla(0,0%,100%,.15))}
`));

let _$v=t=>t,_t$v;const Cross75Icon=()=>{return tag(_t$v||(_t$v=_$v`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"
    />
  </svg>`));};

class IconCross75 extends IconBase{render(){setCustomTemplateLiteralTag(html);return Cross75Icon();}}

customElements.define('sp-icon-cross75',IconCross75);

let _$w=t=>t,_t$w;const styles$e=css(_t$w||(_t$w=_$w`
.spectrum-UIIcon-Cross75{width:var(--spectrum-alias-ui-icon-cross-size-75);height:var(--spectrum-alias-ui-icon-cross-size-75)}.spectrum-UIIcon-Cross100{width:var(--spectrum-alias-ui-icon-cross-size-100);height:var(--spectrum-alias-ui-icon-cross-size-100)}.spectrum-UIIcon-Cross200{width:var(--spectrum-alias-ui-icon-cross-size-200);height:var(--spectrum-alias-ui-icon-cross-size-200)}.spectrum-UIIcon-Cross300{width:var(--spectrum-alias-ui-icon-cross-size-300);height:var(--spectrum-alias-ui-icon-cross-size-300)}.spectrum-UIIcon-Cross400{width:var(--spectrum-alias-ui-icon-cross-size-400);height:var(--spectrum-alias-ui-icon-cross-size-400)}.spectrum-UIIcon-Cross500{width:var(--spectrum-alias-ui-icon-cross-size-500);height:var(--spectrum-alias-ui-icon-cross-size-500)}.spectrum-UIIcon-Cross600{width:var(--spectrum-alias-ui-icon-cross-size-600);height:var(--spectrum-alias-ui-icon-cross-size-600)}
`));

let _$x=t=>t,_t$x;class ClearButton extends ButtonBase{constructor(){super(...arguments);/**
         * The visual variant to apply to this button.
         */this.variant='';}static get styles(){return [...super.styles,styles$d,styles$e];}get buttonContent(){return [html(_t$x||(_t$x=_$x`
                <sp-icon-cross75
                    slot="icon"
                    class="icon spectrum-UIIcon-Cross75"
                ></sp-icon-cross75>
            `))];}}__decorate([property({reflect:true})],ClearButton.prototype,"variant",void 0);

let _$y=t=>t,_t$y;const styles$f=css(_t$y||(_t$y=_$y`
:host{--spectrum-button-line-height:1.3;box-sizing:border-box;align-items:center;justify-content:center;overflow:visible;margin:0;border-style:solid;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;vertical-align:top;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;text-decoration:none;font-family:var(--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base));line-height:var(--spectrum-button-line-height);user-select:none;-webkit-user-select:none;cursor:pointer}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;padding:0;margin-top:-2px;margin-bottom:-2px}:host(:disabled){cursor:default}::slotted([slot=icon]){max-height:100%}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([size=s]){--spectrum-actionbutton-quiet-border-size:var(--spectrum-actionbutton-s-quiet-border-size,var(--spectrum-alias-border-size-thin));--spectrum-actionbutton-quiet-border-radius:var(--spectrum-actionbutton-s-quiet-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-actionbutton-quiet-text-font-weight:var(--spectrum-actionbutton-s-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-actionbutton-quiet-text-size:var(--spectrum-actionbutton-s-quiet-text-size,var(--spectrum-alias-item-text-size-s));--spectrum-actionbutton-border-size:var(--spectrum-actionbutton-s-border-size,var(--spectrum-alias-border-size-thin));--spectrum-actionbutton-border-radius:var(--spectrum-actionbutton-s-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-actionbutton-min-width:var(--spectrum-actionbutton-s-min-width,var(--spectrum-global-dimension-size-400));--spectrum-actionbutton-text-font-weight:var(--spectrum-actionbutton-s-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-actionbutton-text-line-height:var(--spectrum-actionbutton-s-text-line-height,var(--spectrum-alias-component-text-line-height));--spectrum-actionbutton-text-size:var(--spectrum-actionbutton-s-text-size,var(--spectrum-alias-item-text-size-s));--spectrum-actionbutton-icon-gap:var(--spectrum-actionbutton-s-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-s));--spectrum-actionbutton-height:var(--spectrum-actionbutton-s-height,var(--spectrum-alias-item-height-s));--spectrum-actionbutton-padding-left:var(--spectrum-actionbutton-s-padding-left,var(--spectrum-alias-item-workflow-padding-left-s));--spectrum-actionbutton-icononly-padding-left:var(--spectrum-actionbutton-s-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-s));--spectrum-actionbutton-icononly-padding-right:var(--spectrum-actionbutton-s-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-s));--spectrum-actionbutton-textonly-padding-left:var(--spectrum-actionbutton-s-textonly-padding-left,var(--spectrum-alias-item-padding-s));--spectrum-actionbutton-textonly-padding-right:var(--spectrum-actionbutton-s-textonly-padding-right,var(--spectrum-alias-item-padding-s));--spectrum-actionbutton-hold-icon-padding-bottom:var(--spectrum-global-dimension-size-25);--spectrum-actionbutton-hold-icon-padding-right:var(--spectrum-global-dimension-size-25)}:host([size=m]){--spectrum-actionbutton-quiet-border-size:var(--spectrum-actionbutton-m-quiet-border-size,var(--spectrum-alias-border-size-thin));--spectrum-actionbutton-quiet-border-radius:var(--spectrum-actionbutton-m-quiet-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-actionbutton-quiet-text-font-weight:var(--spectrum-actionbutton-m-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-actionbutton-quiet-text-size:var(--spectrum-actionbutton-m-quiet-text-size,var(--spectrum-alias-item-text-size-m));--spectrum-actionbutton-border-size:var(--spectrum-actionbutton-m-border-size,var(--spectrum-alias-border-size-thin));--spectrum-actionbutton-border-radius:var(--spectrum-actionbutton-m-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-actionbutton-min-width:var(--spectrum-actionbutton-m-min-width,var(--spectrum-global-dimension-size-400));--spectrum-actionbutton-text-font-weight:var(--spectrum-actionbutton-m-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-actionbutton-text-line-height:var(--spectrum-actionbutton-m-text-line-height,var(--spectrum-alias-component-text-line-height));--spectrum-actionbutton-text-size:var(--spectrum-actionbutton-m-text-size,var(--spectrum-alias-item-text-size-m));--spectrum-actionbutton-height:var(--spectrum-actionbutton-m-height,var(--spectrum-alias-item-height-m));--spectrum-actionbutton-icon-gap:var(--spectrum-actionbutton-m-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-m));--spectrum-actionbutton-padding-left:var(--spectrum-actionbutton-m-padding-left,var(--spectrum-alias-item-workflow-padding-left-m));--spectrum-actionbutton-icononly-padding-left:var(--spectrum-actionbutton-m-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-m));--spectrum-actionbutton-icononly-padding-right:var(--spectrum-actionbutton-m-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-m));--spectrum-actionbutton-textonly-padding-left:var(--spectrum-actionbutton-m-textonly-padding-left,var(--spectrum-alias-item-padding-m));--spectrum-actionbutton-textonly-padding-right:var(--spectrum-actionbutton-m-textonly-padding-right,var(--spectrum-alias-item-padding-m));--spectrum-actionbutton-hold-icon-padding-bottom:var(--spectrum-global-dimension-size-40);--spectrum-actionbutton-hold-icon-padding-right:var(--spectrum-global-dimension-size-40)}:host([size=l]){--spectrum-actionbutton-quiet-border-size:var(--spectrum-actionbutton-l-quiet-border-size,var(--spectrum-alias-border-size-thin));--spectrum-actionbutton-quiet-border-radius:var(--spectrum-actionbutton-l-quiet-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-actionbutton-quiet-text-font-weight:var(--spectrum-actionbutton-l-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-actionbutton-quiet-text-size:var(--spectrum-actionbutton-l-quiet-text-size,var(--spectrum-alias-item-text-size-l));--spectrum-actionbutton-border-size:var(--spectrum-actionbutton-l-border-size,var(--spectrum-alias-border-size-thin));--spectrum-actionbutton-border-radius:var(--spectrum-actionbutton-l-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-actionbutton-min-width:var(--spectrum-actionbutton-l-min-width,var(--spectrum-global-dimension-size-400));--spectrum-actionbutton-text-font-weight:var(--spectrum-actionbutton-l-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-actionbutton-text-line-height:var(--spectrum-actionbutton-l-text-line-height,var(--spectrum-alias-component-text-line-height));--spectrum-actionbutton-text-size:var(--spectrum-actionbutton-l-text-size,var(--spectrum-alias-item-text-size-l));--spectrum-actionbutton-icon-gap:var(--spectrum-actionbutton-l-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l));--spectrum-actionbutton-height:var(--spectrum-actionbutton-l-height,var(--spectrum-alias-item-height-l));--spectrum-actionbutton-padding-left:var(--spectrum-actionbutton-l-padding-left,var(--spectrum-alias-item-workflow-padding-left-l));--spectrum-actionbutton-icononly-padding-left:var(--spectrum-actionbutton-l-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-l));--spectrum-actionbutton-icononly-padding-right:var(--spectrum-actionbutton-l-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-l));--spectrum-actionbutton-textonly-padding-left:var(--spectrum-actionbutton-l-textonly-padding-left,var(--spectrum-alias-item-padding-l));--spectrum-actionbutton-textonly-padding-right:var(--spectrum-actionbutton-l-textonly-padding-right,var(--spectrum-alias-item-padding-l));--spectrum-actionbutton-hold-icon-padding-bottom:var(--spectrum-global-dimension-size-50);--spectrum-actionbutton-hold-icon-padding-right:var(--spectrum-global-dimension-size-50)}:host([size=xl]){--spectrum-actionbutton-quiet-border-size:var(--spectrum-actionbutton-xl-quiet-border-size,var(--spectrum-alias-border-size-thin));--spectrum-actionbutton-quiet-border-radius:var(--spectrum-actionbutton-xl-quiet-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-actionbutton-quiet-text-font-weight:var(--spectrum-actionbutton-xl-quiet-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-actionbutton-quiet-text-size:var(--spectrum-actionbutton-xl-quiet-text-size,var(--spectrum-alias-item-text-size-xl));--spectrum-actionbutton-border-size:var(--spectrum-actionbutton-xl-border-size,var(--spectrum-alias-border-size-thin));--spectrum-actionbutton-border-radius:var(--spectrum-actionbutton-xl-border-radius,var(--spectrum-alias-border-radius-regular));--spectrum-actionbutton-min-width:var(--spectrum-actionbutton-xl-min-width,var(--spectrum-global-dimension-size-400));--spectrum-actionbutton-text-font-weight:var(--spectrum-actionbutton-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight));--spectrum-actionbutton-text-line-height:var(--spectrum-actionbutton-xl-text-line-height,var(--spectrum-alias-component-text-line-height));--spectrum-actionbutton-icon-gap:var(--spectrum-actionbutton-xl-icon-gap,var(--spectrum-alias-item-workflow-icon-gap-l));--spectrum-actionbutton-text-size:var(--spectrum-actionbutton-xl-text-size,var(--spectrum-alias-item-text-size-xl));--spectrum-actionbutton-height:var(--spectrum-actionbutton-xl-height,var(--spectrum-alias-item-height-xl));--spectrum-actionbutton-padding-left:var(--spectrum-actionbutton-xl-padding-left,var(--spectrum-alias-item-workflow-padding-left-xl));--spectrum-actionbutton-icononly-padding-left:var(--spectrum-actionbutton-xl-icononly-padding-left,var(--spectrum-alias-item-icononly-padding-xl));--spectrum-actionbutton-icononly-padding-right:var(--spectrum-actionbutton-xl-icononly-padding-right,var(--spectrum-alias-item-icononly-padding-xl));--spectrum-actionbutton-textonly-padding-left:var(--spectrum-actionbutton-xl-textonly-padding-left,var(--spectrum-alias-item-padding-xl));--spectrum-actionbutton-textonly-padding-right:var(--spectrum-actionbutton-xl-textonly-padding-right,var(--spectrum-alias-item-padding-xl));--spectrum-actionbutton-hold-icon-padding-bottom:var(--spectrum-global-dimension-size-65);--spectrum-actionbutton-hold-icon-padding-right:var(--spectrum-global-dimension-size-65)}:host{--spectrum-actionbutton-padding-left-adjusted:calc(var(--spectrum-actionbutton-padding-left) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-textonly-padding-left-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-left) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-textonly-padding-right-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-right) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-icononly-padding-left-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-left) - var(--spectrum-actionbutton-border-size));--spectrum-actionbutton-icononly-padding-right-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-right) - var(--spectrum-actionbutton-border-size))}:host([dir=ltr]){padding-left:var(--spectrum-actionbutton-textonly-padding-left-adjusted);padding-right:var(--spectrum-actionbutton-textonly-padding-right-adjusted)}:host([dir=rtl]){padding-right:var(--spectrum-actionbutton-textonly-padding-left-adjusted);padding-left:var(--spectrum-actionbutton-textonly-padding-right-adjusted)}:host{position:relative;height:var(--spectrum-actionbutton-height);min-width:var(--spectrum-actionbutton-min-width);border-width:var(--spectrum-actionbutton-border-size);border-radius:var(--spectrum-actionbutton-border-radius);font-size:var(--spectrum-actionbutton-text-size);font-weight:var(--spectrum-actionbutton-text-font-weight);line-height:var(--spectrum-actionbutton-text-line-height)}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(--spectrum-actionbutton-icon-gap)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(--spectrum-actionbutton-icon-gap)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}#hold-affordance+::slotted([slot=icon]),:host([dir]) slot[icon-only]::slotted([slot=icon]),:host([dir]) slot[icon-only] sp-icon{margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted)));margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted)))}#label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([dir=ltr]) #hold-affordance{right:var(--spectrum-actionbutton-hold-icon-padding-right)}:host([dir=rtl]) #hold-affordance{left:var(--spectrum-actionbutton-hold-icon-padding-right);transform:matrix(-1,0,0,1,0,0)}#hold-affordance{position:absolute;bottom:var(--spectrum-actionbutton-hold-icon-padding-bottom)}:host([quiet]){border-width:var(--spectrum-actionbutton-quiet-border-size);border-radius:var(--spectrum-actionbutton-quiet-border-radius);font-size:var(--spectrum-actionbutton-quiet-text-size);font-weight:var(--spectrum-actionbutton-quiet-text-font-weight)}:host{--spectrum-actionbutton-m-quiet-border-size-key-focus:1px;background-color:var(--spectrum-actionbutton-m-background-color,var(--spectrum-global-color-gray-75));border-color:var(--spectrum-actionbutton-m-border-color,var(--spectrum-alias-border-color));color:var(--spectrum-actionbutton-m-text-color,var(--spectrum-alias-text-color))}::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color,var(--spectrum-alias-icon-color))}#hold-affordance{color:var(--spectrum-actionbutton-m-hold-icon-color,var(--spectrum-alias-icon-color))}:host(:hover){background-color:var(--spectrum-actionbutton-m-background-color-hover,var(--spectrum-global-color-gray-50));border-color:var(--spectrum-actionbutton-m-border-color-hover,var(--spectrum-alias-border-color-hover));color:var(--spectrum-actionbutton-m-text-color-hover,var(--spectrum-alias-text-color-hover))}:host(:hover) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-hover,var(--spectrum-alias-icon-color-hover))}:host(:hover) #hold-affordance{color:var(--spectrum-actionbutton-m-hold-icon-color-hover,var(--spectrum-alias-icon-color-hover))}:host(.focus-visible),:host(.focus-visible){background-color:var(--spectrum-actionbutton-m-background-color-key-focus,var(--spectrum-global-color-gray-50));box-shadow:0 0 0 var(--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)) var(--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-actionbutton-m-text-color-key-focus,var(--spectrum-alias-text-color-hover))}:host(.focus-visible),:host(:focus-visible){background-color:var(--spectrum-actionbutton-m-background-color-key-focus,var(--spectrum-global-color-gray-50));box-shadow:0 0 0 var(--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)) var(--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-actionbutton-m-text-color-key-focus,var(--spectrum-alias-text-color-hover))}:host(.focus-visible),:host(.focus-visible[active]),:host(.focus-visible),:host(.focus-visible[active]){border-color:var(--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus))}:host(.focus-visible),:host(.focus-visible[active]),:host(:focus-visible),:host(:focus-visible[active]){border-color:var(--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus))}:host(.focus-visible) ::slotted([slot=icon]),:host(.focus-visible) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host(.focus-visible) ::slotted([slot=icon]),:host(:focus-visible) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host(.focus-visible) #hold-affordance,:host(.focus-visible) #hold-affordance{color:var(--spectrum-actionbutton-m-hold-icon-color-key-focus,var(--spectrum-alias-icon-color-hover))}:host(.focus-visible) #hold-affordance,:host(:focus-visible) #hold-affordance{color:var(--spectrum-actionbutton-m-hold-icon-color-key-focus,var(--spectrum-alias-icon-color-hover))}:host([active]){background-color:var(--spectrum-actionbutton-m-background-color-down,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-border-color-down,var(--spectrum-alias-border-color-down));color:var(--spectrum-actionbutton-m-text-color-down,var(--spectrum-alias-text-color-down))}:host([active]) #hold-affordance{color:var(--spectrum-actionbutton-m-hold-icon-color-down,var(--spectrum-alias-icon-color-down))}:host(:disabled),:host([disabled]){background-color:var(--spectrum-actionbutton-m-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-border-color-disabled,var(--spectrum-alias-border-color-disabled));color:var(--spectrum-actionbutton-m-text-color-disabled,var(--spectrum-alias-text-color-disabled))}:host(:disabled) ::slotted([slot=icon]),:host([disabled]) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-disabled,var(--spectrum-alias-icon-color-disabled))}:host(:disabled) #hold-affordance,:host([disabled]) #hold-affordance{color:var(--spectrum-actionbutton-m-hold-icon-color-disabled,var(--spectrum-alias-icon-color-disabled))}:host([selected]){background-color:var(--spectrum-actionbutton-m-background-color-selected,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-border-color-selected,var(--spectrum-alias-border-color));color:var(--spectrum-actionbutton-m-text-color-selected,var(--spectrum-alias-text-color))}:host([selected]) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-selected,var(--spectrum-alias-icon-color))}:host([selected].focus-visible),:host([selected].focus-visible){background-color:var(--spectrum-actionbutton-m-background-color-selected-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-border-color-selected-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-actionbutton-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover))}:host([selected].focus-visible),:host([selected]:focus-visible){background-color:var(--spectrum-actionbutton-m-background-color-selected-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-border-color-selected-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-actionbutton-m-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover))}:host([selected].focus-visible[active]),:host([selected].focus-visible[active]){border-color:var(--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus))}:host([selected].focus-visible[active]),:host([selected]:focus-visible[active]){border-color:var(--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus))}:host([selected].focus-visible) ::slotted([slot=icon]),:host([selected].focus-visible) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-selected-key-focus,var(--spectrum-alias-icon-color-hover))}:host([selected].focus-visible) ::slotted([slot=icon]),:host([selected]:focus-visible) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-selected-key-focus,var(--spectrum-alias-icon-color-hover))}:host([selected]:hover){background-color:var(--spectrum-actionbutton-m-background-color-selected-hover,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-border-color-selected-hover,var(--spectrum-alias-border-color-hover));color:var(--spectrum-actionbutton-m-text-color-selected-hover,var(--spectrum-alias-text-color-hover))}:host([selected]:hover) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-selected-hover,var(--spectrum-alias-icon-color-hover))}:host([selected][active]){background-color:var(--spectrum-actionbutton-m-background-color-selected-down,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-border-color-selected-down,var(--spectrum-alias-border-color-down));color:var(--spectrum-actionbutton-m-text-color-selected-down,var(--spectrum-alias-text-color-down))}:host([selected][active]) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-selected-down,var(--spectrum-alias-icon-color-down))}:host([selected]:disabled),:host([selected][disabled]){background-color:var(--spectrum-actionbutton-m-background-color-selected-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-border-color-selected-disabled,var(--spectrum-alias-border-color-disabled));color:var(--spectrum-actionbutton-m-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled))}:host([selected]:disabled) ::slotted([slot=icon]),:host([selected][disabled]) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-icon-color-selected-disabled,var(--spectrum-alias-icon-color-disabled))}:host([emphasized]){background-color:var(--spectrum-actionbutton-m-emphasized-background-color,var(--spectrum-global-color-gray-75));border-color:var(--spectrum-actionbutton-m-emphasized-border-color,var(--spectrum-alias-border-color));color:var(--spectrum-actionbutton-m-emphasized-text-color,var(--spectrum-alias-text-color))}:host([emphasized]) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color,var(--spectrum-alias-icon-color))}:host([emphasized]) #hold-affordance{color:var(--spectrum-actionbutton-m-emphasized-hold-icon-color,var(--spectrum-alias-icon-color))}:host([emphasized][selected]) #hold-affordance{color:var(--spectrum-actionbutton-m-emphasized-hold-icon-color-selected,var(--spectrum-global-color-static-white))}:host([emphasized][selected]:hover) #hold-affordance{color:var(--spectrum-actionbutton-m-emphasized-text-color-selected-hover,var(--spectrum-global-color-static-white))}:host([emphasized]:hover){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-hover,var(--spectrum-global-color-gray-50));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-hover,var(--spectrum-alias-border-color-hover));box-shadow:none;color:var(--spectrum-actionbutton-m-emphasized-text-color-hover,var(--spectrum-alias-text-color-hover))}:host([emphasized]:hover) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-hover,var(--spectrum-alias-icon-color-hover))}:host([emphasized]:hover) #hold-affordance{color:var(--spectrum-actionbutton-m-emphasized-hold-icon-color-hover,var(--spectrum-alias-icon-color-hover))}:host([emphasized].focus-visible),:host([emphasized].focus-visible){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-key-focus,var(--spectrum-global-color-gray-50));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-key-focus,var(--spectrum-alias-border-color-hover));box-shadow:0 0 0 var(--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)) var(--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-actionbutton-m-emphasized-text-color-key-focus,var(--spectrum-alias-text-color-hover))}:host([emphasized].focus-visible),:host([emphasized]:focus-visible){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-key-focus,var(--spectrum-global-color-gray-50));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-key-focus,var(--spectrum-alias-border-color-hover));box-shadow:0 0 0 var(--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)) var(--spectrum-actionbutton-m-border-color-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-actionbutton-m-emphasized-text-color-key-focus,var(--spectrum-alias-text-color-hover))}:host([emphasized].focus-visible) ::slotted([slot=icon]),:host([emphasized].focus-visible) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host([emphasized].focus-visible) ::slotted([slot=icon]),:host([emphasized]:focus-visible) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}:host([emphasized].focus-visible) #hold-affordance,:host([emphasized].focus-visible) #hold-affordance{color:var(--spectrum-actionbutton-m-emphasized-hold-icon-color-key-focus,var(--spectrum-alias-icon-color-hover))}:host([emphasized].focus-visible) #hold-affordance,:host([emphasized]:focus-visible) #hold-affordance{color:var(--spectrum-actionbutton-m-emphasized-hold-icon-color-key-focus,var(--spectrum-alias-icon-color-hover))}:host([emphasized][active]){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-down,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-down,var(--spectrum-alias-border-color-down));box-shadow:none;color:var(--spectrum-actionbutton-m-emphasized-text-color-down,var(--spectrum-alias-text-color-down))}:host([emphasized][active]) #hold-affordance{color:var(--spectrum-actionbutton-m-emphasized-hold-icon-color-down,var(--spectrum-alias-icon-color-down))}:host([emphasized]:disabled),:host([emphasized][disabled]){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-disabled,var(--spectrum-alias-border-color-disabled));color:var(--spectrum-actionbutton-m-emphasized-text-color-disabled,var(--spectrum-alias-text-color-disabled))}:host([emphasized]:disabled) ::slotted([slot=icon]),:host([emphasized][disabled]) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-disabled,var(--spectrum-alias-icon-color-disabled))}:host([emphasized]:disabled) #hold-affordance,:host([emphasized][disabled]) #hold-affordance{color:var(--spectrum-actionbutton-m-emphasized-hold-icon-color-disabled,var(--spectrum-alias-icon-color-disabled))}:host([emphasized][quiet][selected]),:host([emphasized][selected]){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-selected,var(--spectrum-semantic-cta-color-background-default));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-selected,var(--spectrum-semantic-cta-color-background-default));color:var(--spectrum-actionbutton-m-emphasized-text-color-selected,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected]) ::slotted([slot=icon]),:host([emphasized][selected]) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-selected,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected].focus-visible),:host([emphasized][quiet][selected].focus-visible),:host([emphasized][selected].focus-visible),:host([emphasized][selected].focus-visible){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus));color:var(--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected].focus-visible),:host([emphasized][quiet][selected]:focus-visible),:host([emphasized][selected].focus-visible),:host([emphasized][selected]:focus-visible){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus,var(--spectrum-semantic-cta-color-background-key-focus));color:var(--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][selected].focus-visible) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-selected-key-focus,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][quiet][selected]:focus-visible) ::slotted([slot=icon]),:host([emphasized][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][selected]:focus-visible) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-selected-key-focus,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected]:hover),:host([emphasized][selected]:hover){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-selected-hover,var(--spectrum-semantic-cta-color-background-hover));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-selected-hover,var(--spectrum-semantic-cta-color-background-hover));color:var(--spectrum-actionbutton-m-emphasized-text-color-selected-hover,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected]:hover) ::slotted([slot=icon]),:host([emphasized][selected]:hover) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-selected-hover,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected][active]),:host([emphasized][selected][active]){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-selected-down,var(--spectrum-semantic-cta-color-background-down));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-selected-down,var(--spectrum-semantic-cta-color-background-down));color:var(--spectrum-actionbutton-m-emphasized-text-color-selected-down,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected][active]) ::slotted([slot=icon]),:host([emphasized][selected][active]) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-selected-down,var(--spectrum-global-color-static-white))}:host([emphasized][quiet][selected]:disabled),:host([emphasized][quiet][selected][disabled]),:host([emphasized][selected]:disabled),:host([emphasized][selected][disabled]){background-color:var(--spectrum-actionbutton-m-emphasized-background-color-selected-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-emphasized-border-color-selected-disabled,var(--spectrum-alias-border-color-disabled));color:var(--spectrum-actionbutton-m-emphasized-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled))}:host([emphasized][quiet][selected]:disabled) ::slotted([slot=icon]),:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][selected]:disabled) ::slotted([slot=icon]),:host([emphasized][selected][disabled]) ::slotted([slot=icon]){color:var(--spectrum-actionbutton-m-emphasized-icon-color-selected-disabled,var(--spectrum-alias-icon-color-disabled))}:host([quiet]){background-color:var(--spectrum-actionbutton-m-quiet-background-color,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-actionbutton-m-quiet-border-color,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color,var(--spectrum-alias-text-color))}:host([quiet]:hover){background-color:var(--spectrum-actionbutton-m-quiet-background-color-hover,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-actionbutton-m-quiet-border-color-hover,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color-hover,var(--spectrum-alias-text-color-hover))}:host([quiet].focus-visible),:host([quiet].focus-visible){background-color:var(--spectrum-actionbutton-m-quiet-background-color-key-focus,var(--spectrum-alias-background-color-transparent));box-shadow:0 0 0 var(--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)) var(--spectrum-actionbutton-m-quiet-border-color-key-focus,var(--spectrum-alias-border-color-focus));border-color:var(--spectrum-actionbutton-m-quiet-border-color-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-actionbutton-m-quiet-text-color-key-focus,var(--spectrum-alias-text-color-hover))}:host([quiet].focus-visible),:host([quiet]:focus-visible){background-color:var(--spectrum-actionbutton-m-quiet-background-color-key-focus,var(--spectrum-alias-background-color-transparent));box-shadow:0 0 0 var(--spectrum-actionbutton-m-quiet-border-size-key-focus,var(--spectrum-alias-border-size-thick)) var(--spectrum-actionbutton-m-quiet-border-color-key-focus,var(--spectrum-alias-border-color-focus));border-color:var(--spectrum-actionbutton-m-quiet-border-color-key-focus,var(--spectrum-alias-border-color-focus));color:var(--spectrum-actionbutton-m-quiet-text-color-key-focus,var(--spectrum-alias-text-color-hover))}:host([quiet][active]){background-color:var(--spectrum-actionbutton-m-quiet-background-color-down,var(--spectrum-global-color-gray-300));border-color:var(--spectrum-actionbutton-m-quiet-border-color-down,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color-down,var(--spectrum-alias-text-color-down))}:host([quiet]:disabled),:host([quiet][disabled]){background-color:var(--spectrum-actionbutton-m-quiet-background-color-disabled,var(--spectrum-alias-background-color-transparent));border-color:var(--spectrum-actionbutton-m-quiet-border-color-disabled,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color-disabled,var(--spectrum-alias-text-color-disabled))}:host([quiet][selected]){background-color:var(--spectrum-actionbutton-m-quiet-background-color-selected,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-quiet-border-color-selected,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color-selected,var(--spectrum-alias-text-color))}:host([quiet][selected].focus-visible),:host([quiet][selected].focus-visible){background-color:var(--spectrum-actionbutton-m-quiet-background-color-selected-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-quiet-border-color-selected-key-focus,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover))}:host([quiet][selected].focus-visible),:host([quiet][selected]:focus-visible){background-color:var(--spectrum-actionbutton-m-quiet-background-color-selected-key-focus,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-quiet-border-color-selected-key-focus,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color-selected-key-focus,var(--spectrum-alias-text-color-hover))}:host([quiet][selected]:hover){background-color:var(--spectrum-actionbutton-m-quiet-background-color-selected-hover,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-quiet-border-color-selected-hover,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color-selected-hover,var(--spectrum-alias-text-color-hover))}:host([quiet][selected][active]){background-color:var(--spectrum-actionbutton-m-quiet-background-color-selected-down,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-quiet-border-color-selected-down,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color-selected-down,var(--spectrum-alias-text-color-down))}:host([quiet][selected]:disabled),:host([quiet][selected][disabled]){background-color:var(--spectrum-actionbutton-m-quiet-background-color-selected-disabled,var(--spectrum-global-color-gray-200));border-color:var(--spectrum-actionbutton-m-quiet-border-color-selected-disabled,var(--spectrum-alias-border-color-transparent));color:var(--spectrum-actionbutton-m-quiet-text-color-selected-disabled,var(--spectrum-alias-text-color-disabled))}:host{display:inline-flex;flex-direction:row}:host([dir]){-webkit-appearance:none}::slotted([slot=icon]){flex-shrink:0}#button{position:absolute;top:0;right:0;bottom:0;left:0}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-workflow-icon-size-s);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-workflow-icon-size-s);--spectrum-ui-icon-tshirt-size-height:var(--spectrum-alias-ui-icon-cornertriangle-size-75);--spectrum-ui-icon-tshirt-size-width:var(--spectrum-alias-ui-icon-cornertriangle-size-75)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-workflow-icon-size-m);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-workflow-icon-size-m);--spectrum-ui-icon-tshirt-size-height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);--spectrum-ui-icon-tshirt-size-width:var(--spectrum-alias-ui-icon-cornertriangle-size-100)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-workflow-icon-size-l);--spectrum-ui-icon-tshirt-size-height:var(--spectrum-alias-ui-icon-cornertriangle-size-200);--spectrum-ui-icon-tshirt-size-width:var(--spectrum-alias-ui-icon-cornertriangle-size-200)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(--spectrum-alias-workflow-icon-size-xl);--spectrum-icon-tshirt-size-width:var(--spectrum-alias-workflow-icon-size-xl);--spectrum-ui-icon-tshirt-size-height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);--spectrum-ui-icon-tshirt-size-width:var(--spectrum-alias-ui-icon-cornertriangle-size-300)}
`));

let _$z=t=>t,_t$z;const styles$g=css(_t$z||(_t$z=_$z`
.spectrum-UIIcon-CornerTriangle75{width:var(--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65));height:var(--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65))}.spectrum-UIIcon-CornerTriangle100{width:var(--spectrum-alias-ui-icon-cornertriangle-size-100);height:var(--spectrum-alias-ui-icon-cornertriangle-size-100)}.spectrum-UIIcon-CornerTriangle200{width:var(--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75));height:var(--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75))}.spectrum-UIIcon-CornerTriangle300{width:var(--spectrum-alias-ui-icon-cornertriangle-size-300);height:var(--spectrum-alias-ui-icon-cornertriangle-size-300)}
`));

let _$A=t=>t,_t$A;const CornerTriangle300Icon=()=>{return tag(_t$A||(_t$A=_$A`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`));};

class IconCornerTriangle300 extends IconBase{render(){setCustomTemplateLiteralTag(html);return CornerTriangle300Icon();}}

customElements.define('sp-icon-corner-triangle300',IconCornerTriangle300);

let _$B=t=>t,_t$B;const holdAffordanceClass={s:'spectrum-UIIcon-CornerTriangle75',m:'spectrum-UIIcon-CornerTriangle100',l:'spectrum-UIIcon-CornerTriangle200',xl:'spectrum-UIIcon-CornerTriangle300'};const LONGPRESS_DURATION=300;let LONGPRESS_TIMEOUT;/**
 * @element sp-card
 *
 * @fires change - Announces a change in the `selected` property of an action button
 * @fires longpress - Synthesizes a "longpress" interaction that signifies a
 * `pointerdown` event that is >=300ms or a keyboard event wher code is `Space` or code is `ArrowDown`
 * while `altKey===true`.
 */class ActionButton extends SizedMixin$2(ButtonBase){constructor(){super();this.emphasized=false;this.holdAffordance=false;this.quiet=false;this.selected=false;this.toggles=false;this._value='';this.onClick=()=>{if(!this.toggles){return;}this.selected=!this.selected;const applyDefault=this.dispatchEvent(new Event('change',{cancelable:true}));if(!applyDefault){this.selected=!this.selected;}};this.addEventListener('click',this.onClick);this.addEventListener('pointerdown',this.onPointerdown);}static get styles(){return [styles$f,styles$g];}get value(){return this._value||this.itemText;}set value(value){if(value===this._value){return;}this._value=value||'';if(this._value){this.setAttribute('value',this._value);}else {this.removeAttribute('value');}}/**
     * @private
     */get itemText(){return (this.textContent||/* c8 ignore next */'').trim();}onPointerdown(){this.addEventListener('pointerup',this.onPointerup);this.addEventListener('pointercancel',this.onPointerup);LONGPRESS_TIMEOUT=setTimeout(()=>{this.dispatchEvent(new CustomEvent('longpress',{bubbles:true,composed:true,detail:{source:'pointer'}}));},LONGPRESS_DURATION);}onPointerup(){clearTimeout(LONGPRESS_TIMEOUT);this.removeEventListener('pointerup',this.onPointerup);this.removeEventListener('pointercancel',this.onPointerup);}/**
     * @private
     */handleKeydown(event){if(!this.holdAffordance){return super.handleKeydown(event);}const{code,altKey}=event;if(code==='Space'||altKey&&code==='ArrowDown'){event.preventDefault();if(code==='ArrowDown'){event.stopPropagation();event.stopImmediatePropagation();}this.addEventListener('keyup',this.handleKeyup);this.active=true;}}handleKeyup(event){if(!this.holdAffordance){return super.handleKeyup(event);}const{code,altKey}=event;if(code==='Space'||altKey&&code==='ArrowDown'){event.stopPropagation();this.dispatchEvent(new CustomEvent('longpress',{bubbles:true,composed:true,detail:{source:'keyboard'}}));this.active=false;}}get buttonContent(){const buttonContent=super.buttonContent;if(this.holdAffordance){buttonContent.unshift(html(_t$B||(_t$B=_$B`
                <sp-icon-corner-triangle300
                    id="hold-affordance"
                    class="${0}"
                ></sp-icon-corner-triangle300>
            `),holdAffordanceClass[this.size]));}return buttonContent;}updated(changes){super.updated(changes);if(this.toggles&&changes.has('selected')){this.focusElement.setAttribute('aria-pressed',this.selected?'true':'false');}}}__decorate([property({type:Boolean,reflect:true})],ActionButton.prototype,"emphasized",void 0);__decorate([property({type:Boolean,reflect:true,attribute:'hold-affordance'})],ActionButton.prototype,"holdAffordance",void 0);__decorate([property({type:Boolean,reflect:true})],ActionButton.prototype,"quiet",void 0);__decorate([property({type:Boolean,reflect:true})],ActionButton.prototype,"selected",void 0);__decorate([property({type:Boolean,reflect:true})],ActionButton.prototype,"toggles",void 0);__decorate([property({type:String})],ActionButton.prototype,"value",null);

let _$C=t=>t,_t$C;const styles$h=css(_t$C||(_t$C=_$C`
#selected{transform:scale(1);opacity:1}:host([dir=ltr]){border-left:var(--spectrum-listitem-focus-indicator-size) solid transparent}:host([dir=rtl]){border-right:var(--spectrum-listitem-focus-indicator-size) solid transparent}:host{cursor:pointer;position:relative;display:flex;align-items:center;box-sizing:border-box;padding:var(--spectrum-listitem-padding-y) var(--spectrum-listitem-padding-right) var(--spectrum-listitem-padding-y) var(--spectrum-listitem-padding-left);margin:0;min-height:var(--spectrum-listitem-height);font-size:var(--spectrum-listitem-text-size);font-weight:var(--spectrum-listitem-text-font-weight);font-style:normal;text-decoration:none}:host(:focus){outline:none}:host([dir=ltr][selected]){padding-right:calc(var(--spectrum-listitem-padding-right) - var(--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)))}:host([dir=rtl][selected]){padding-left:calc(var(--spectrum-listitem-padding-right) - var(--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)))}:host([selected]) #selected{display:block}.icon,::slotted([slot=icon]){flex-shrink:0;align-self:flex-start}:host([dir=ltr]) .icon+#label,:host([dir=ltr]) slot[name=icon]+#label{margin-left:var(--spectrum-listitem-icon-gap)}:host([dir=rtl]) .icon+#label,:host([dir=rtl]) slot[name=icon]+#label{margin-right:var(--spectrum-listitem-icon-gap)}.icon+#label,slot[name=icon]+#label{width:calc(100% - var(--spectrum-icon-checkmark-medium-width) - var(--spectrum-listitem-icon-gap) - var(--spectrum-listitem-thumbnail-padding-left) - var(--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)))}#label{flex:1 1 auto;line-height:var(--spectrum-listitem-label-line-height);-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;width:calc(100% - var(--spectrum-icon-checkmark-medium-width) - var(--spectrum-listitem-icon-gap))}:host([no-wrap]) #label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#selected{display:none;align-self:flex-start}:host([dir=ltr]) #selected,:host([dir=ltr]) .chevron{margin-left:var(--spectrum-listitem-icon-gap)}:host([dir=rtl]) #selected,:host([dir=rtl]) .chevron{margin-right:var(--spectrum-listitem-icon-gap)}#selected{flex-grow:0;margin-top:var(--spectrum-listitem-icon-margin-top)}:host([dir=rtl]) .chevron{transform:matrix(-1,0,0,1,0,0)}:host{background-color:var(--spectrum-listitem-m-background-color,var(--spectrum-alias-background-color-transparent));color:var(--spectrum-listitem-m-text-color,var(--spectrum-alias-text-color))}:host([dir=ltr].focus-visible),:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus))}:host([dir=ltr].focus-visible),:host([dir=ltr]:focus-visible),:host([dir=ltr][focused]){border-left-color:var(--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus))}:host([dir=rtl].focus-visible),:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus))}:host([dir=rtl].focus-visible),:host([dir=rtl]:focus-visible),:host([dir=rtl][focused]){border-right-color:var(--spectrum-listitem-m-focus-indicator-color,var(--spectrum-alias-border-color-focus))}:host(.focus-visible),:host(.focus-visible),:host([focused]){background-color:var(--spectrum-listitem-m-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay));color:var(--spectrum-listitem-m-text-color-key-focus,var(--spectrum-alias-text-color))}:host(.focus-visible),:host(:focus-visible),:host([focused]){background-color:var(--spectrum-listitem-m-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay));color:var(--spectrum-listitem-m-text-color-key-focus,var(--spectrum-alias-text-color))}:host(.is-highlighted),:host(.is-open),:host(:focus),:host(:hover){background-color:var(--spectrum-listitem-m-background-color-hover,var(--spectrum-alias-background-color-hover-overlay));color:var(--spectrum-listitem-m-text-color-hover,var(--spectrum-alias-text-color))}:host([selected]){color:var(--spectrum-listitem-m-text-color-selected,var(--spectrum-alias-text-color))}:host([selected]) #selected{color:var(--spectrum-listitem-m-icon-color-selected,var(--spectrum-alias-icon-color-selected))}.is-active,:host(:active){background-color:var(--spectrum-listitem-m-background-color-down,var(--spectrum-alias-background-color-hover-overlay))}:host([disabled]){background-color:var(--spectrum-listitem-m-background-color-disabled,var(--spectrum-alias-background-color-transparent));background-image:none;color:var(--spectrum-listitem-m-text-color-disabled,var(--spectrum-alias-text-color-disabled));cursor:default}#button{position:absolute;top:0;right:0;bottom:0;left:0}
`));

let _$D=t=>t,_t$D;const styles$i=css(_t$D||(_t$D=_$D`
.spectrum-UIIcon-Checkmark50{width:var(--spectrum-alias-ui-icon-checkmark-size-50);height:var(--spectrum-alias-ui-icon-checkmark-size-50)}.spectrum-UIIcon-Checkmark75{width:var(--spectrum-alias-ui-icon-checkmark-size-75);height:var(--spectrum-alias-ui-icon-checkmark-size-75)}.spectrum-UIIcon-Checkmark100{width:var(--spectrum-alias-ui-icon-checkmark-size-100);height:var(--spectrum-alias-ui-icon-checkmark-size-100)}.spectrum-UIIcon-Checkmark200{width:var(--spectrum-alias-ui-icon-checkmark-size-200);height:var(--spectrum-alias-ui-icon-checkmark-size-200)}.spectrum-UIIcon-Checkmark300{width:var(--spectrum-alias-ui-icon-checkmark-size-300);height:var(--spectrum-alias-ui-icon-checkmark-size-300)}.spectrum-UIIcon-Checkmark400{width:var(--spectrum-alias-ui-icon-checkmark-size-400);height:var(--spectrum-alias-ui-icon-checkmark-size-400)}.spectrum-UIIcon-Checkmark500{width:var(--spectrum-alias-ui-icon-checkmark-size-500);height:var(--spectrum-alias-ui-icon-checkmark-size-500)}.spectrum-UIIcon-Checkmark600{width:var(--spectrum-alias-ui-icon-checkmark-size-600);height:var(--spectrum-alias-ui-icon-checkmark-size-600)}
`));

let _$E=t=>t,_t$E,_t2$9;/**
 * Spectrum Menu Item Component
 * @element sp-menu-item
 */class MenuItem extends ActionButton{constructor(){super(...arguments);this.focused=false;this.noWrap=false;}static get styles(){return [styles$h,styles$i];}/**
     * Hide this getter from web-component-analyzer until
     * https://github.com/runem/web-component-analyzer/issues/131
     * has been addressed.
     *
     * @private
     */get itemText(){return (this.textContent||/* c8 ignore next */'').trim();}get buttonContent(){const content=super.buttonContent;if(this.selected){content.push(html(_t$E||(_t$E=_$E`
                <sp-icon-checkmark100
                    id="selected"
                    class="spectrum-UIIcon-Checkmark100 icon"
                ></sp-icon-checkmark100>
            `)));}return content;}renderButton(){return html(_t2$9||(_t2$9=_$E`
            ${0}
        `),this.buttonContent);}firstUpdated(changes){this.setAttribute('tabindex','-1');super.firstUpdated(changes);if(!this.hasAttribute('id')){this.id=`sp-menu-item-${MenuItem.instanceCount++}`;}}updated(changes){super.updated(changes);if(this.getAttribute('role')==='option'&&changes.has('selected')){this.setAttribute('aria-selected',this.selected?'true':'false');}}connectedCallback(){super.connectedCallback();if(!this.hasAttribute('role')){const queryRoleEvent=new CustomEvent('sp-menu-item-query-role',{bubbles:true,composed:true,detail:{role:''}});this.dispatchEvent(queryRoleEvent);this.setAttribute('role',queryRoleEvent.detail.role||'menuitem');}}}MenuItem.instanceCount=0;__decorate([property({type:Boolean,reflect:true})],MenuItem.prototype,"focused",void 0);__decorate([property({type:Boolean,reflect:true,attribute:'no-wrap',hasChanged(){return false;}})],MenuItem.prototype,"noWrap",void 0);

customElements.define('sp-menu-item',MenuItem);

let _$F=t=>t,_t$F;const styles$j=css(_t$F||(_t$F=_$F`
:host{box-sizing:initial;overflow:visible;height:var(--spectrum-listitem-divider-size);margin:calc(var(--spectrum-listitem-divider-padding)/2) var(--spectrum-listitem-padding-y);padding:0;border:none;background-color:var(--spectrum-listitem-m-divider-color,var(--spectrum-alias-border-color-extralight));display:block}
`));

/**
 * Spectrum Menu Divider Component
 * @element sp-menu-divider
 *
 */class MenuDivider extends SpectrumElement$2{static get styles(){return [styles$j];}firstUpdated(){this.setAttribute('role','separator');}}

customElements.define('sp-menu-divider',MenuDivider);

let _$G=t=>t,_t$G;const styles$k=css(_t$G||(_t$G=_$G`
.fill-submask-2{animation:spectrum-fill-mask-2 1s linear infinite}@keyframes spectrum-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0deg)}11.86%{transform:rotate(0deg)}13.56%{transform:rotate(0deg)}15.25%{transform:rotate(0deg)}16.95%{transform:rotate(0deg)}18.64%{transform:rotate(0deg)}20.34%{transform:rotate(0deg)}22.03%{transform:rotate(0deg)}23.73%{transform:rotate(0deg)}25.42%{transform:rotate(0deg)}27.12%{transform:rotate(0deg)}28.81%{transform:rotate(0deg)}30.51%{transform:rotate(0deg)}32.2%{transform:rotate(0deg)}33.9%{transform:rotate(0deg)}35.59%{transform:rotate(0deg)}37.29%{transform:rotate(0deg)}38.98%{transform:rotate(0deg)}40.68%{transform:rotate(0deg)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes spectrum-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes spectrum-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host{display:inline-block;position:relative;direction:ltr}.track,:host{width:var(--spectrum-progresscircle-medium-width,var(--spectrum-global-dimension-size-400));height:var(--spectrum-progresscircle-medium-height,var(--spectrum-global-dimension-size-400))}.track{box-sizing:border-box;border-style:solid;border-width:var(--spectrum-progresscircle-medium-border-size);border-radius:var(--spectrum-progresscircle-medium-width,var(--spectrum-global-dimension-size-400))}:host([dir=ltr]) .fills{left:0}:host([dir=rtl]) .fills{right:0}.fills{position:absolute;top:0;width:100%;height:100%}.fill{box-sizing:border-box;width:var(--spectrum-progresscircle-medium-width,var(--spectrum-global-dimension-size-400));height:var(--spectrum-progresscircle-medium-height,var(--spectrum-global-dimension-size-400));border-style:solid;border-width:var(--spectrum-progresscircle-medium-border-size);border-radius:var(--spectrum-progresscircle-medium-width,var(--spectrum-global-dimension-size-400))}.fillMask1,.fillMask2{width:50%;height:100%;transform-origin:100% center;transform:rotate(180deg);overflow:hidden;position:absolute}.fillSubMask1,.fillSubMask2{width:100%;height:100%;transform-origin:100% center;overflow:hidden;transform:rotate(-180deg)}.fillMask2{transform:rotate(0deg)}:host([size=small]),:host([size=small]) .fill,:host([size=small]) .track{width:var(--spectrum-progresscircle-small-width,var(--spectrum-global-dimension-size-200));height:var(--spectrum-progresscircle-small-height,var(--spectrum-global-dimension-size-200))}:host([size=small]) .fill,:host([size=small]) .track{border-style:solid;border-width:var(--spectrum-progresscircle-small-border-size);border-radius:var(--spectrum-progresscircle-small-width,var(--spectrum-global-dimension-size-200))}:host([size=large]),:host([size=large]) .fill,:host([size=large]) .track{width:var(--spectrum-progresscircle-large-width,var(--spectrum-global-dimension-size-800));height:var(--spectrum-progresscircle-large-height,var(--spectrum-global-dimension-size-800))}:host([size=large]) .fill,:host([size=large]) .track{border-style:solid;border-width:var(--spectrum-progresscircle-large-border-size,var(--spectrum-global-dimension-size-50));border-radius:var(--spectrum-progresscircle-large-width,var(--spectrum-global-dimension-size-800))}:host([indeterminate]) .fills{will-change:transform;transform:translateZ(0);animation:spectrum-fills-rotate 1s cubic-bezier(.25,.78,.48,.89) infinite;transform-origin:center}:host([indeterminate]) .fillSubMask1{will-change:transform;transform:translateZ(0);animation:spectrum-fill-mask-1 1s linear infinite}:host([indeterminate]) .fillSubMask2{will-change:transform;transform:translateZ(0);animation:spectrum-fill-mask-2 1s linear infinite}.track{border-color:var(--spectrum-progresscircle-medium-track-color,var(--spectrum-alias-track-color-default))}.fill{border-color:var(--spectrum-progresscircle-medium-track-fill-color,var(--spectrum-global-color-blue-500))}:host([over-background]) .track{border-color:var(--spectrum-progresscircle-medium-over-background-track-color,var(--spectrum-alias-track-color-over-background))}:host([over-background]) .fill{border-color:var(--spectrum-progresscircle-medium-over-background-track-fill-color,var(--spectrum-global-color-static-white))}:host([indeterminate][over-background]) .track{border-color:var(--spectrum-progresscircle-medium-over-background-track-color,var(--spectrum-alias-track-color-over-background))}:host([indeterminate][over-background]) .fill{border-color:var(--spectrum-progresscircle-medium-over-background-track-fill-color,var(--spectrum-global-color-static-white))}
`));

let _$H=t=>t,_t$H,_t2$a;/**
 * @element sp-progress-circle
 */class ProgressCircle extends SpectrumElement$2{constructor(){super(...arguments);this.indeterminate=false;this.label='';this.overBackground=false;this.progress=0;this.size='';}static get styles(){return [styles$k];}makeRotation(rotation){return this.indeterminate?undefined:`transform: rotate(${rotation}deg);`;}render(){const styles=[this.makeRotation(-180+180/50*Math.min(this.progress,50)),this.makeRotation(-180+180/50*Math.max(this.progress-50,0))];const masks=['Mask1','Mask2'];return html(_t$H||(_t$H=_$H`
            <div class="track"></div>
            <div class="fills">
                ${0}
            </div>
        `),masks.map((mask,index)=>html(_t2$a||(_t2$a=_$H`
                        <div class="fill${0}">
                            <div
                                class="fillSub${0}"
                                style=${0}
                            >
                                <div class="fill"></div>
                            </div>
                        </div>
                    `),mask,mask,ifDefined(styles[index]))));}firstUpdated(changes){super.firstUpdated(changes);if(!this.hasAttribute('role')){this.setAttribute('role','progressbar');}}updated(changes){super.updated(changes);if(!this.indeterminate&&changes.has('progress')){this.setAttribute('aria-valuenow',''+this.progress);}else if(this.hasAttribute('aria-valuenow')){this.removeAttribute('aria-valuenow');}if(this.label&&changes.has('label')){this.setAttribute('aria-label',this.label);}}}__decorate([property({type:Boolean,reflect:true})],ProgressCircle.prototype,"indeterminate",void 0);__decorate([property({type:String})],ProgressCircle.prototype,"label",void 0);__decorate([property({type:Boolean,reflect:true,attribute:'over-background'})],ProgressCircle.prototype,"overBackground",void 0);__decorate([property({type:Number})],ProgressCircle.prototype,"progress",void 0);__decorate([property({type:String,reflect:true})],ProgressCircle.prototype,"size",void 0);

customElements.define('sp-progress-circle',ProgressCircle);

class TimelineBaseWidget extends LitElement{constructor(){super(...arguments);this.widthPerMillisecond=400/1000;// 400px per 1000ms
}updated(){for(const child of Array.from(this.children)){// propagate viewport properties down to children of the right type
if(child instanceof TimelineBaseWidget){let baseWidget=child;baseWidget.widthPerMillisecond=this.widthPerMillisecond;}}}}__decorate([property({type:Number})],TimelineBaseWidget.prototype,"widthPerMillisecond",void 0);

let _$I=t=>t,_t$I,_t2$b,_t3$4,_t4$4;class TimelineItem extends TimelineBaseWidget{constructor(name=""){super();this.name='My app';this.itemId='';this.description='';this.subgroup='';this.groupIndent=0;this.highlighted=false;this.name=name;}connectedCallback(){super.connectedCallback();this.requestUpdate();}recoverExpansion(){// see if we can restore this expand state
if(this.itemId!=""){let expanded=window.sessionStorage.getItem('timeline-item-expanded-'+this.itemId)=="expanded";this.setExpanded(expanded);}}_handleExpandClick(){if(this.subgroup=='')return;this.setExpanded(!this.expanded);this.saveExpanded();}_handleSelectClick(){this.highlighted=!this.highlighted;this.timelineView.itemHighlightChanged(this);}get timelineView(){let tlv=this.closest('timeline-view');return tlv;}get expanded(){var target=document.getElementById(this.subgroup);if(target){return !target.hasAttribute('collapsed');}return false;}saveExpanded(){if(this.itemId!=""){window.sessionStorage.setItem('timeline-item-expanded-'+this.itemId,this.expanded?"expanded":"collapsed");}}setExpanded(expanded){var target=document.getElementById(this.subgroup);if(!target)return;if(expanded){target.removeAttribute('collapsed');}else {target.setAttribute('collapsed','true');}this.requestUpdate();}render(){return html(_t$I||(_t$I=_$I`
            <div class="row ${0}" @click="${0}">
            <div class="sidebar ${0}">
                <div class="label" style="margin-left: ${0}px;">
                <span class="expand" @click="${0}">${0}</span>
                <span class="colorbar"></span>
                ${0}
                <span class="description" title="${0}">${0}</span>
                </div>
            </div>
    
            <div class="visual"><slot></slot></div>
            </div>
        `),this.highlighted?'highlighted':'',this._handleSelectClick,this.subgroup==''?'':'expandable',this.groupIndent*20,this._handleExpandClick,this.subgroup==''?'':this.expanded?html(_t2$b||(_t2$b=_$I`&blacktriangledown;`)):html(_t3$4||(_t3$4=_$I`&blacktriangleright;`)),this.name,this.description,this.description);}}TimelineItem.styles=css(_t4$4||(_t4$4=_$I`
      :host {
      }
  
      .row {
        display: grid;
        border-bottom: var(--below-item-bottom-border, 1px) solid #555;
        grid-template-columns: var(--topic-width, 200px) auto;
        width: 20000px;
      }
      
      .row.highlighted .sidebar {
        background-color: #eaf0ff;
      }
      .row.highlighted .visual {
        background-color: #e5f0ff;
      }
  
      .sidebar {
        position: -webkit-sticky;
        position: sticky;
        grid-column: 1;
        left: 0px;
        width: var(--topic-width, 200px);
        height: 100%;
        background-color: #fff;
        border-bottom: var(--below-item-bottom-border, 1px) solid #888;
        border-right: 1px solid #888;
        z-index: 1;
      }
  
      .sidebar.expandable {
        cursor: pointer;
      }
  
      .sidebar.expandable span.expand {
        
      }
  
      .sidebar span.expand {
        display: inline-block;
        width: 10px;
        font-size: 16px;
        color: #666;
      }
      
      .sidebar span.colorbar {
        display: inline-block;
        width: 4px;
        height: 15px;
  
        background-color: var(--trace-span-color, #aaa);
        border-radius: 3px;
        position: relative;
        top: 2px;
        margin: 0 1px;
      }
  
      .sidebar div.label {
        padding: var(--sidebar-label-top-padding, 12px) 6px 0px 6px;
        font-size: 14px;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
      }
  
      .sidebar span.description {
        color: #888;
        font-size: 12px;
        margin-left: 5px;
      }
  
      .visual {
        grid-column: 2;
        background-color: #fff;
        width: 20000px;
        line-height: 0px;
      }
    `));__decorate([property({type:String})],TimelineItem.prototype,"name",void 0);__decorate([property({type:String})],TimelineItem.prototype,"itemId",void 0);__decorate([property({type:String})],TimelineItem.prototype,"description",void 0);__decorate([property({type:String})],TimelineItem.prototype,"subgroup",void 0);__decorate([property({type:Number})],TimelineItem.prototype,"groupIndent",void 0);__decorate([property({type:Boolean})],TimelineItem.prototype,"highlighted",void 0);

let _$J=t=>t,_t$J,_t2$c;class TimelineGroup extends LitElement{constructor(){super(...arguments);this.widthPerMillisecond=800/1000;this.collapsed=false;this.groupIndent=0;this.indent=1;}updated(){for(const child of Array.from(this.children)){// propagate viewport properties down to children of the right type
if(child instanceof TimelineItem){let timelineItem=child;timelineItem.widthPerMillisecond=this.widthPerMillisecond;timelineItem.groupIndent=this.groupIndent+this.indent;}else if(child instanceof TimelineGroup){let timelineItem=child;timelineItem.widthPerMillisecond=this.widthPerMillisecond;timelineItem.groupIndent=this.groupIndent+this.indent;}}}render(){return html(_t$J||(_t$J=_$J`
            <div class="${0}">
            <slot></slot>
            </div>
        `),this.collapsed?'collapsed':'expanded');}}TimelineGroup.styles=css(_t2$c||(_t2$c=_$J`
        .expanded ::slotted(timeline-item) {

        }

        .collapsed {
            display: none;
        }

        div {
            border-bottom: var(--below-group-bottom-border, 0px) solid #555;
        }
    `));__decorate([property({type:Number})],TimelineGroup.prototype,"widthPerMillisecond",void 0);__decorate([property({type:Boolean})],TimelineGroup.prototype,"collapsed",void 0);__decorate([property({type:Number})],TimelineGroup.prototype,"groupIndent",void 0);__decorate([property({type:Number})],TimelineGroup.prototype,"indent",void 0);

let _$K=t=>t,_t$K,_t2$d;class TimelineView extends LitElement{constructor(){super(...arguments);this.widthPerMillisecond=300/1000;// 2000px per 1000ms
this.title='My app';this.loading=true;}updated(){var _a;for(const child of Array.from(this.children)){// propagate viewport properties down to children of the right type
if(child instanceof TimelineItem){let timelineItem=child;timelineItem.widthPerMillisecond=this.widthPerMillisecond;}else if(child instanceof TimelineGroup){let timelineItem=child;timelineItem.widthPerMillisecond=this.widthPerMillisecond;}}var scrubber=(_a=this.shadowRoot)===null||_a===void 0?void 0:_a.getElementById('scrubber');if(scrubber){scrubber.widthPerMillisecond=this.widthPerMillisecond;}}itemHighlightChanged(item){this.querySelectorAll('timeline-item').forEach(el=>{let anotherItem=el;if(anotherItem!=item){anotherItem.highlighted=false;}});let event=new CustomEvent('highlight-changed',{detail:{highlightedItem:item}});this.dispatchEvent(event);}get marker(){var _a;return (_a=this.shadowRoot)===null||_a===void 0?void 0:_a.getElementById('marker');}get sidebarWidth(){var _a,_b;return ((_b=(_a=this.shadowRoot)===null||_a===void 0?void 0:_a.getElementById('sidebar-header'))===null||_b===void 0?void 0:_b.clientWidth)||200;}get containerElement(){var _a;return (_a=this.shadowRoot)===null||_a===void 0?void 0:_a.getElementById('main-container');}_mouseMove(e){var _a,_b,_c,_d;var m=this.marker;if(!m)return;var cr=(_b=(_a=this.shadowRoot)===null||_a===void 0?void 0:_a.getElementById('scroll-container'))===null||_b===void 0?void 0:_b.getBoundingClientRect();if(!cr)return;var x=e.clientX-cr.x;var leftEdge=(_d=(_c=this.shadowRoot)===null||_c===void 0?void 0:_c.getElementById('sidebar-header'))===null||_d===void 0?void 0:_d.clientWidth;if(leftEdge)x-=leftEdge;if(x<0)x=0;// FIXME: work out how to stop the marker from stealing scroll, then remove this.
x++;m.style.top="0px";m.style.left=(leftEdge||0)+x+"px";}render(){return html(_t$K||(_t$K=_$K`
            <main id="main-container" @mousemove="${0}" class="${0}">
            <div id="loader">
                <sp-progress-circle
                    label="A large representation of an unclear amount of work"
                    indeterminate
                    size="large"
                ></sp-progress-circle>
            </div>
            <div id="scroll-container" class="scrollable">
                <div class="row-header">
                <div class="sidebar-header" id="sidebar-header"></div>
                <div class="visual-header">
                    <timeline-scrubber id="scrubber"></timeline-scrubber>
                </div>
                </div>
    
                <slot></slot>
    
                <!-- spacer -->
                <div style="height: 30px;"></div>
            </div>
            <div id="marker"></div>
            </main>
        `),this._mouseMove,this.loading?"loading":"loaded");}get viewDisplayWidth(){var _a;if(!this.containerElement)return 1000;return ((_a=this.containerElement)===null||_a===void 0?void 0:_a.clientWidth)-this.sidebarWidth;}}TimelineView.styles=css(_t2$d||(_t2$d=_$K`
        :host {
        }
    
        main {
            position: relative;
            background-color: #fff;
            border-top: 1px solid #555;
            height: 100%;
        }

        main.loading #loader {
            display: block;
            text-align: center;
            width: 100%;
            height: 400px;
        }

        main.loading #loader sp-progress-circle {
            margin: 100px auto;
        }

        main.loading #marker {
            display: none;
        }

        main.loaded #loader {
            display: none;
        }

        main.loading #scroll-container {
            display: none;
        }

        main.loaded #scroll-container {
        }
    
        .scrollable {
            height: 100%;
            overflow: scroll;
        }
    
        .row-header {
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
            z-index: 20;
        }
    
        .sidebar-header {
            position: -webkit-sticky;
            position: sticky;
            left: 0px;
            width: var(--topic-width, 200px);
            height: 20px;
            background-color: #fff;
            border-bottom: 1px solid #888;
            border-right: 1px solid #888;
            z-index: 20;
        }
    
        .visual-header {
            position: absolute;
            top: 0px;
            margin-left: var(--topic-width, 200px);
            background-color: #fff;
            width: 20000px;
            height: 20px;
            border-bottom: 1px solid #888;
        }
    
        #marker {
            position: absolute;
            width: 1px;
            height: 100%;
            background-color: #000;
            opacity: 0.3;
            z-index: 10;
        }
    `));__decorate([property({type:Number})],TimelineView.prototype,"widthPerMillisecond",void 0);__decorate([property({type:String})],TimelineView.prototype,"title",void 0);__decorate([property({type:Boolean})],TimelineView.prototype,"loading",void 0);

let _$L=t=>t,_t$L,_t2$e,_t3$5,_t4$5;class TimelineScrubber extends TimelineBaseWidget{constructor(){super(...arguments);this.keyframeWidth=200;this.notchPerFrame=10;}pad(n,size){var fmt=Math.floor(n).toString();while(fmt.length<size){fmt="0"+fmt;}return fmt;}millisecondToTimeString(time){var ms=time%1000;var seconds=Math.floor(time/1000);var minutes=Math.floor(seconds/60);seconds%=60;return `${this.pad(minutes,2)}:${this.pad(seconds,2)}.${this.pad(ms,3)}`;}get tickMarks(){var keyframeMilliseconds=this.keyframeWidth/this.widthPerMillisecond;var ticks=[];for(var i=0;i<100;i++){ticks.push(this.millisecondToTimeString(i*keyframeMilliseconds));}return ticks;}render(){return svg(_t$L||(_t$L=_$L`
        <svg height="20" width="${0}">
            ${0}
        </svg>
        `),this.tickMarks.length*this.keyframeWidth,repeat(this.tickMarks,tick=>tick,(tick,index)=>{const tickStart=index*this.keyframeWidth;return svg(_t2$e||(_t2$e=_$L`
                    <text x="${0}" y="10">${0}</text>
                    <line x1="${0}" y1="0" x2="${0}" y2="20" />

                    ${0}
                `),tickStart+2,tick,tickStart+this.keyframeWidth,tickStart+this.keyframeWidth,repeat(Array(this.notchPerFrame).keys(),mark=>mark,(mark,index)=>{const tickX=tickStart+this.keyframeWidth*mark/this.notchPerFrame;return svg(_t3$5||(_t3$5=_$L`
                            <line x1="${0}" y1="15" x2="${0}" y2="20" />
                        `),tickX,tickX);}));}));}}TimelineScrubber.styles=css(_t4$5||(_t4$5=_$L`
        :host {
        }

        text {
            font-size: 11px;
            fill: #888;
        }

        line {
            stroke: #888;
            stroke-width: 1;
        }
    `));__decorate([property({type:Number})],TimelineScrubber.prototype,"keyframeWidth",void 0);__decorate([property({type:Number})],TimelineScrubber.prototype,"notchPerFrame",void 0);

let _$M=t=>t,_t$M,_t2$f;class TimelineGauge extends TimelineBaseWidget{constructor(){super();this.height=40;this.arr=[];var arr=[];for(var i=0;i<1000;i++){arr.push([i*100,0.5+Math.sin(i/10)/3]);}this.arr=arr;}get points(){return this.arr;}get pointsStrings(){return this.points.map(value=>{return Math.round(value[0]*this.widthPerMillisecond).toString()+","+Math.round((1-value[1])*this.height).toString();});}set samples(samples){this.arr=[];let values=samples.data_points.map(sample=>{return sample.value.toNumber();});let max=Math.max(...values);let min=Math.min(...values);let delta=max-min;// pad out by 10% on either side
min-=delta*0.1;max+=delta*0.1;delta=max-min;this.arr=samples.data_points.map(sample=>{return [sample.time.toNumber(),(sample.value.toNumber()-min)/delta];});this.arr.sort((a,b)=>{return a[0]-b[0];});}render(){return svg(_t$M||(_t$M=_$M`
        <svg height="${0}" width="100%">
        <polyline points="${0}" />
        <polygon points="0,${0} ${0} ${0},${0}" />
        </svg>
        `),this.height,this.pointsStrings.join(' '),this.height,this.pointsStrings.join(' '),this.pointsStrings[this.pointsStrings.length-1].split(',')[0],this.height);}}TimelineGauge.styles=css(_t2$f||(_t2$f=_$M`
        :host {
        }

        svg {
            display: block;
        }

        polygon {
            fill: #bbf;
        }

        polyline {
            fill:none;
            stroke: #88a;
            stroke-width: 2;
        }
    `));__decorate([property({type:Number})],TimelineGauge.prototype,"height",void 0);

let _$N=t=>t,_t$N,_t2$g,_t3$6;class TimelineEvents extends TimelineBaseWidget{constructor(){super();this.height=40;this.eventTimes=[];var timeSoFar=0;/*
        for (var i in stackSample.raw_timestamp_deltas) {
            var delta = stackSample.raw_timestamp_deltas[i];

            this.eventTimes.push(timeSoFar / 1000.0); // milliseconds

            timeSoFar += delta;
        }*/}render(){return svg(_t$N||(_t$N=_$N`
        <svg height="${0}" width="100%">
        ${0}
        </svg>
        `),this.height,repeat(this.eventTimes,time=>time,(time,index)=>{return svg(_t2$g||(_t2$g=_$N`<line x1="${0}" y1="0" x2="${0}" y2="${0}" />`),time*this.widthPerMillisecond,time*this.widthPerMillisecond,this.height);}));}}TimelineEvents.styles=css(_t3$6||(_t3$6=_$N`
        :host {
        }

        svg {
            display: block;
            background-color: #fff;
        }

        line {
            stroke: #000;
            stroke-width: 1;
            opacity: 0.2;
        }
    `));__decorate([property({type:Number})],TimelineEvents.prototype,"height",void 0);

let _$O=t=>t,_t$O,_t2$h;class TimelineSpans extends TimelineBaseWidget{render(){return html(_t$O||(_t$O=_$O`
            <div>
            <slot></slot>
            </div>
        `));}}TimelineSpans.styles=css(_t2$h||(_t2$h=_$O`
        div {
        }
    `));

let _$P=t=>t,_t$P,_t2$i;class TimelineSpan extends TimelineBaseWidget{constructor(){super(...arguments);this.start=0;this.duration=0;this.queued=0;}render(){return svg(_t$P||(_t$P=_$P`
            <svg width="100%" height="24">
                <rect x="${0}" y="10" width="${0}" height="4" class="queue" />
                <rect x="${0}" y="6" width="${0}" height="12" class="span" />
                <text x="${0}" y="15">${0} ms ${0}</text>
            </svg>
        `),(this.start-this.queued)*this.widthPerMillisecond,Math.ceil(this.queued*this.widthPerMillisecond),this.start*this.widthPerMillisecond,Math.ceil(this.duration*this.widthPerMillisecond),(this.start+this.duration)*this.widthPerMillisecond+5,this.duration.toFixed(2),this.queued>0?"(queued "+this.queued.toFixed(2)+" ms)":"");}}TimelineSpan.styles=css(_t2$i||(_t2$i=_$P`
        svg {
        }

        rect.queue {
            fill: #eee;
            rx: 0px;
        }

        rect.span {
            fill: var(--trace-span-color, #aaa);
            stroke: none;
            rx: 3px;
        }

        text {
            font-size: 11px;
            fill: var(--trace-span-color, #aaa);
        }
    `));__decorate([property({type:Number})],TimelineSpan.prototype,"start",void 0);__decorate([property({type:Number})],TimelineSpan.prototype,"duration",void 0);__decorate([property({type:Number})],TimelineSpan.prototype,"queued",void 0);

let _$Q=t=>t,_t$Q,_t2$j,_t3$7;class TimelineSpanSummary extends TimelineBaseWidget{constructor(){super(...arguments);this.spanGroupId="";}get spanGroup(){return document.getElementById(this.spanGroupId);}get allSpans(){let group=this.spanGroup;if(!group)return [];let spans=[];for(const child of Array.from(group.children)){if(child instanceof TimelineItem){let span=child.children[0];if(span instanceof TimelineSpan){spans.push(span);}}}return spans;}render(){return svg(_t$Q||(_t$Q=_$Q`
            <svg width="100%" height="24">
            ${0}
            </svg>
        `),repeat(this.allSpans,span=>span,(span,index)=>{return svg(_t2$j||(_t2$j=_$Q`<rect x="${0}" y="6" width="${0}" height="12" />`),span.start*this.widthPerMillisecond,Math.ceil(span.duration*this.widthPerMillisecond));}));}}TimelineSpanSummary.styles=css(_t3$7||(_t3$7=_$Q`
        svg {
        }

        rect {
            fill: var(--trace-span-color, #aaa);
            stroke: none;
            rx: 0px;
        }

        text {
            font-size: 11px;
            fill: var(--trace-span-color, #aaa);
        }
    `));__decorate([property({type:String})],TimelineSpanSummary.prototype,"spanGroupId",void 0);

let _$R=t=>t,_t$R,_t2$k;class TimelineHeading extends LitElement{constructor(heading=""){super();this.heading="";if(heading!="")this.heading=heading;}render(){return html(_t$R||(_t$R=_$R`
            <div>
            ${0}
            </div>
        `),this.heading);}}TimelineHeading.styles=css(_t2$k||(_t2$k=_$R`
        div {
            width: 100%;
            background-color: #fff;
            border-bottom: 1px solid #666;

            font-weight: bold;
            font-size: 80%;
            color: #666;
            padding: 30px 5px 5px 5px;

            position: -webkit-sticky;
            position: sticky;
            left: 0px;
        }
    `));__decorate([property({type:String})],TimelineHeading.prototype,"heading",void 0);

let _$S=t=>t,_t$S,_t2$l;let TimelineDetailInspector=class TimelineDetailInspector extends LitElement{constructor(){super();this.currentValue=0;}get tabContainer(){return this.shadowRoot.querySelector('sp-tabs');}clearTabs(){while(this.firstChild)this.removeChild(this.firstChild);while(this.tabContainer.firstChild)this.tabContainer.removeChild(this.tabContainer.firstChild);this.currentValue=0;}addTab(label,content){let t=new Tab();t.label=label;t.value=this.currentValue.toString();this.tabContainer.append(t);// add the element inside the main element, aka in the slot
content.setAttribute('tab-value',t.value);content.style.display='none';this.append(content);if(this.currentValue==0){// first tab: select it, too
this.tabContainer.selected=t.value;this.tabChanged(null);}this.currentValue++;}tabChanged(e){let selectedValue=this.tabContainer.selected;this.childNodes.forEach(element=>{let el=element;let visible=selectedValue==el.getAttribute('tab-value');el.style.display=visible?'block':'none';});}render(){return html(_t$S||(_t$S=_$S`
        <div style="height: 100%; overflow: hidden;">
        <sp-tabs selected="0" compact @change="${0}">
        </sp-tabs>
        <div style="height: 100%; overflow: hidden; box-sizing: border-box; padding-bottom: 30px;">
        <slot></slot>
        </div>
        </div>
        `),this.tabChanged);}};TimelineDetailInspector.styles=css(_t2$l||(_t2$l=_$S`
        div {
            
        }

        sp-tabs {
            background-color: #fff;
            position: sticky;
            top: 0;
        }
    `));TimelineDetailInspector=__decorate([customElement('timeline-detail-inspector')],TimelineDetailInspector);

class RenderUtils{static longAsMillisecond(time){let us=time.div(1000).toNumber();// this rounds
return us/1000;// this essentially gives 1us of precision as a float of ms
}}

let _$T=t=>t,_t$T,_t2$m,_t3$8;let SpanSummaryDetailTab=class SpanSummaryDetailTab extends LitElement{constructor(spanData){super();this.data=spanData;}render(){return html(_t$T||(_t$T=_$T`
      <div>
      <table border="1" cellpadding="5">
      ${0}
      </table>
      </div>
    `),repeat(this.data,piece=>{var _a,_b,_c;return html(_t2$m||(_t2$m=_$T`<tr><td>${0}</td><td>${0}</td><td>${0} ms</td><td><button @click="${0}}" span-id="${0}">timeslice</button></td></tr>`),piece.track.name,piece.track.description,RenderUtils.longAsMillisecond(piece.spanData.timeRange.duration),this._doTimeslice,(_c=(_b=(_a=piece.track.context)===null||_a===void 0?void 0:_a.span)===null||_b===void 0?void 0:_b.span)===null||_c===void 0?void 0:_c.id);}));}_doTimeslice(e){let event=new CustomEvent('request-timeslice',{detail:{span:e.currentTarget.getAttribute('span-id')}});this.dispatchEvent(event);}};SpanSummaryDetailTab.styles=css(_t3$8||(_t3$8=_$T`
    div {
      padding: 20px;
    }
  `));SpanSummaryDetailTab=__decorate([customElement('span-summary-detail')],SpanSummaryDetailTab);

let _$U=t=>t,_t$U,_t2$n,_t3$9,_t4$6;let SpanDetailTab=class SpanDetailTab extends LitElement{constructor(track,spanData){var _a;super();this.track=track;this.spanData=spanData;// FIXME: this is gross
let context=track.context;let sample=context.span;this.metadata=sample.metadata.sort((a,b)=>{return a.name.localeCompare(b.name);});this.backtrace=[];if((_a=sample.stack)===null||_a===void 0?void 0:_a.stack)this.backtrace=sample.stack.stack;}render(){var _a,_b,_c;return html(_t$U||(_t$U=_$U`
		<div id="main">
		<table border="1" cellpadding="5">
		<tr>
		<td>${0}</td>
		<td>${0}</td>
		<td>${0} ms</td>
		<td><button @click="${0}}" span-id="${0}">timeslice</button></td>
		</tr>
		</table>

        Detail:
        <table border="1" cellpadding="5">
        ${0}
		</table>

		Backtrace:
		<div id="trace">
		<table border="0" cellpadding="0" cellspacing="0">
		${0}
		</table>
		</div>
		</div>
	`),this.track.name,this.track.description,RenderUtils.longAsMillisecond(this.spanData.timeRange.duration),this._doTimeslice,(_c=(_b=(_a=this.track.context)===null||_a===void 0?void 0:_a.span)===null||_b===void 0?void 0:_b.span)===null||_c===void 0?void 0:_c.id,repeat(this.metadata,m=>m.name,(m,index)=>{return html(_t2$n||(_t2$n=_$U`
                <tr>
                <td>${0}</td>
                <td><pre>${0}</pre></td>
                </tr>
            `),m.name,m.metaString);}),repeat(this.backtrace,f=>`${f.package}:${f.file}:${f.line} in ${f.method}`,(f,index)=>{return html(_t3$9||(_t3$9=_$U`<tr><td class="package">${0}</td><td>${0}:${0} in ${0}</td></tr>`),f.package||"",f.file,f.line,f.method);}));}_doTimeslice(e){let event=new CustomEvent('request-timeslice',{detail:{span:e.currentTarget.getAttribute('span-id')}});this.dispatchEvent(event);}};SpanDetailTab.styles=css(_t4$6||(_t4$6=_$U`
	#main {
		padding: 20px;
        overflow: scroll;
        height: 258px;
        box-sizing: border-box;
	}

    #trace td {
        margin: 0;
        white-space: pre-wrap;
		font-family: monospace;
    }
	#trace td.package {
		color: #666;
		padding-right: 10px;
		text-align: right;
	}
	`));SpanDetailTab=__decorate([customElement('span-detail')],SpanDetailTab);

let _2=t=>t,_t$V,_t2$o,_t3$a,_t4$7,_t5$2,_t6$1,_t7;let StackProfileDetailTab=class StackProfileDetailTab extends LitElement{constructor(track,spanData,stackDataSource,stackScope){super();this.inStackCounts=new Map();this.topOfStackCounts=new Map();this.sortByColumn="self";this.sortAscending=false;this.flameStack={name:"root",count:0,children:new Map()};this.track=track;this.spanData=spanData;this.stackDataSource=stackDataSource;this.stackScope=stackScope;this.stackTraces=stackDataSource.getStackSamplesForScope(stackScope);this.stackTraces.forEach(sample=>{var _a,_b;if(!((_a=sample.stack)===null||_a===void 0?void 0:_a.stack))return;let stack=(_b=sample.stack)===null||_b===void 0?void 0:_b.stack;this.parseStackToFlame(stack);let seen={};stack.forEach((frame,i)=>{if(!frame.method)return;if(seen[frame.method])return;seen[frame.method]=true;let v=this.inStackCounts.get(frame.method);if(v===undefined)v=0;this.inStackCounts.set(frame.method,v+1);});let topOfStack=stack[0];if(topOfStack&&topOfStack.method){let v=this.topOfStackCounts.get(topOfStack.method);if(v===undefined)v=0;this.topOfStackCounts.set(topOfStack.method,v+1);}});}parseStackToFlame(stack){let curr=this.flameStack;// reduceRight used like this is essentially like forEach, but reverse through the array
stack.reduceRight((_,frame)=>{let key=frame.method||'unknown method';if(!curr.children.has(key)){curr.children.set(key,{name:key,count:0,children:new Map()});}curr=curr.children.get(key);curr.count++;return {};},{});}get flameSharedBase(){let curr=this.flameStack;while(curr.children.size==1){curr=curr.children.values().next().value;}return curr;}get allMethods(){return Array.from(this.inStackCounts.keys());}getWeights(method){let total=this.inStackCounts.get(method);let self=this.topOfStackCounts.has(method)?this.topOfStackCounts.get(method):0;return {total:total*1.0/this.stackTraces.length,self:self*1.0/this.stackTraces.length};}get sortedMethods(){let direction=this.sortAscending?1:-1;return this.allMethods.sort((a,b)=>{let w_a=this.getWeights(a);let w_b=this.getWeights(b);if(this.sortByColumn=="total"){return (w_a.total-w_b.total)*direction;}else {return (w_a.self-w_b.self)*direction;}});}sortIcon(field){if(this.sortByColumn!=field)return html(_t$V||(_t$V=_2``));if(this.sortAscending){return html(_t2$o||(_t2$o=_2`&uarr;`));}else {return html(_t3$a||(_t3$a=_2`&darr;`));}}toggleSort(field,e){if(this.sortByColumn==field){this.sortAscending=!this.sortAscending;}else {this.sortByColumn=field;this.sortAscending=false;}this.requestUpdate();}render(){return html(_t4$7||(_t4$7=_2`
	<div id="main-detail">
		<link rel="stylesheet" href="/static/node_modules/%40spectrum-css/vars/dist/spectrum-global.css">
  		<link rel="stylesheet" href="/static/node_modules/%40spectrum-css/vars/dist/spectrum-medium.css">
  		<link rel="stylesheet" href="/static/node_modules/%40spectrum-css/vars/dist/spectrum-light.css">
  		<link rel="stylesheet" href="/static/node_modules/%40spectrum-css/table/dist/index-vars.css">
		<link rel="stylesheet" href="/static/node_modules/%40spectrum-css/icon/dist/index-vars.css">

		<sp-split-view horizontal primary-min="600" primary-size="600" style="height: 100%;">
			<div style="overflow: scroll; height: 258px;">
				<table class="spectrum-Table" width="100%">
				<thead class="spectrum-Table-head">
					<tr>
						<th class="spectrum-Table-headCell is-sortable" nowrap="nowrap" @click="${0}">Total ${0}</th>
						<th class="spectrum-Table-headCell is-sortable" nowrap="nowrap" @click="${0}">Self ${0}</th>
						<th class="spectrum-Table-headCell" width="80%">Symbol</th>
					</tr>
				</thead>
				<tbody class="spectrum-Table-body">
					${0}
				</tbody>
				</table>
			</div>

			<div style="overflow: scroll; height: 258px;" id="flame">
				${0}
			</div>
		</sp-split-view>
	</div>
	`),this.toggleSort.bind(this,'total'),this.sortIcon('total'),this.toggleSort.bind(this,'self'),this.sortIcon('self'),repeat(this.sortedMethods,t=>t,(t,index)=>{let w=this.getWeights(t);return html(_t5$2||(_t5$2=_2`
						<tr class="spectrum-Table-row">
							<td class="spectrum-Table-cell" tabindex="0">${0}%</td>
							<td class="spectrum-Table-cell" tabindex="0">${0}%</td>
							<td class="spectrum-Table-cell" tabindex="0">${0}</td>
						</tr>
						`),(w.total*100.0).toFixed(1),(w.self*100.0).toFixed(1),t);}),this.renderFlameTemplate(this.flameSharedBase,1));}renderFlameTemplate(node,weight){return html(_t6$1||(_t6$1=_2`<div class="flame-container" style="width: ${0}%;">
			<div class="flame-item">${0}</div>
			${0}
		</div>`),(weight*100).toFixed(4),node.name,repeat(node.children.keys(),c=>c,(c,index)=>{let childNode=node.children.get(c);return this.renderFlameTemplate(childNode,childNode.count/node.count);}));}};StackProfileDetailTab.styles=css(_t7||(_t7=_2`
	div#main-detail {
		padding: 0px;
		height: 100%;
		--spectrum-table-cell-padding-y: 5px;
	}

	.flame-container {
		float: left;
		box-sizing: border-box;
	}

	.flame-item {
		box-sizing: border-box;
		width: 100%;
		height: 20px;
		background-color: rgba(112, 194, 133, 0.5);
		border-right: 1px solid #fff;
		border-bottom: 1px solid #fff;

		padding: 5px;
		font-size: 10px;
		font-family: monospace;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	`));StackProfileDetailTab=__decorate([customElement('stack-profile-detail-tab')],StackProfileDetailTab);

var PerfDataTrackType;(function(PerfDataTrackType){PerfDataTrackType[PerfDataTrackType["Gauge"]=0]="Gauge";PerfDataTrackType[PerfDataTrackType["Span"]=1]="Span";PerfDataTrackType[PerfDataTrackType["SpanSummary"]=2]="SpanSummary";})(PerfDataTrackType||(PerfDataTrackType={}));class PerfDataTimeRange{constructor(start,end){this.start=start;this.end=end;}contains(time){return this.start.lte(time)&&this.end.gte(time);}overlaps(other){if(!other)return false;return this.contains(other.start)||this.contains(other.end)||other.contains(this.start)||other.contains(this.end);}get duration(){return this.end.sub(this.start);}}

// Common aliases
const $Reader=$protobuf.Reader,$Writer=$protobuf.Writer,$util=$protobuf.util;// Exported root namespace
const $root=$protobuf.roots["default"]||($protobuf.roots["default"]={});const tracecap=$root.tracecap=(()=>{/**
     * Namespace tracecap.
     * @exports tracecap
     * @namespace
     */const tracecap={};/**
     * SampleScope enum.
     * @name tracecap.SampleScope
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} KERNEL=1 KERNEL value
     * @property {number} USERSPACE=2 USERSPACE value
     * @property {number} VM_RUBY=3 VM_RUBY value
     */tracecap.SampleScope=function(){const valuesById={},values=Object.create(valuesById);values[valuesById[0]="UNKNOWN"]=0;values[valuesById[1]="KERNEL"]=1;values[valuesById[2]="USERSPACE"]=2;values[valuesById[3]="VM_RUBY"]=3;return values;}();/**
     * SamplePurpose enum.
     * @name tracecap.SamplePurpose
     * @enum {number}
     * @property {number} MISC=0 MISC value
     * @property {number} TRACE=1 TRACE value
     * @property {number} PROFILE=2 PROFILE value
     */tracecap.SamplePurpose=function(){const valuesById={},values=Object.create(valuesById);values[valuesById[0]="MISC"]=0;values[valuesById[1]="TRACE"]=1;values[valuesById[2]="PROFILE"]=2;return values;}();tracecap.Thread=function(){/**
         * Properties of a Thread.
         * @memberof tracecap
         * @interface IThread
         * @property {Long|null} [internalId] Thread internalId
         * @property {Long|null} [startTime] Thread startTime
         * @property {Long|null} [endTime] Thread endTime
         * @property {number|null} [tid] Thread tid
         */ /**
         * Constructs a new Thread.
         * @memberof tracecap
         * @classdesc Represents a Thread.
         * @implements IThread
         * @constructor
         * @param {tracecap.IThread=} [properties] Properties to set
         */function Thread(properties){if(properties)for(let keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Thread internalId.
         * @member {Long} internalId
         * @memberof tracecap.Thread
         * @instance
         */Thread.prototype.internalId=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * Thread startTime.
         * @member {Long} startTime
         * @memberof tracecap.Thread
         * @instance
         */Thread.prototype.startTime=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * Thread endTime.
         * @member {Long} endTime
         * @memberof tracecap.Thread
         * @instance
         */Thread.prototype.endTime=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * Thread tid.
         * @member {number} tid
         * @memberof tracecap.Thread
         * @instance
         */Thread.prototype.tid=0;/**
         * Creates a new Thread instance using the specified properties.
         * @function create
         * @memberof tracecap.Thread
         * @static
         * @param {tracecap.IThread=} [properties] Properties to set
         * @returns {tracecap.Thread} Thread instance
         */Thread.create=function create(properties){return new Thread(properties);};/**
         * Encodes the specified Thread message. Does not implicitly {@link tracecap.Thread.verify|verify} messages.
         * @function encode
         * @memberof tracecap.Thread
         * @static
         * @param {tracecap.IThread} message Thread message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Thread.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.internalId!=null&&Object.hasOwnProperty.call(message,"internalId"))writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.internalId);if(message.startTime!=null&&Object.hasOwnProperty.call(message,"startTime"))writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.startTime);if(message.endTime!=null&&Object.hasOwnProperty.call(message,"endTime"))writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.endTime);if(message.tid!=null&&Object.hasOwnProperty.call(message,"tid"))writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.tid);return writer;};/**
         * Encodes the specified Thread message, length delimited. Does not implicitly {@link tracecap.Thread.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.Thread
         * @static
         * @param {tracecap.IThread} message Thread message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Thread.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Thread message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.Thread
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.Thread} Thread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Thread.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);let end=length===undefined?reader.len:reader.pos+length,message=new $root.tracecap.Thread();while(reader.pos<end){let tag=reader.uint32();switch(tag>>>3){case 1:message.internalId=reader.uint64();break;case 2:message.startTime=reader.uint64();break;case 3:message.endTime=reader.uint64();break;case 4:message.tid=reader.uint32();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Thread message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.Thread
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.Thread} Thread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Thread.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Thread message.
         * @function verify
         * @memberof tracecap.Thread
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Thread.verify=function verify(message){if(typeof message!=="object"||message===null)return "object expected";if(message.internalId!=null&&message.hasOwnProperty("internalId"))if(!$util.isInteger(message.internalId)&&!(message.internalId&&$util.isInteger(message.internalId.low)&&$util.isInteger(message.internalId.high)))return "internalId: integer|Long expected";if(message.startTime!=null&&message.hasOwnProperty("startTime"))if(!$util.isInteger(message.startTime)&&!(message.startTime&&$util.isInteger(message.startTime.low)&&$util.isInteger(message.startTime.high)))return "startTime: integer|Long expected";if(message.endTime!=null&&message.hasOwnProperty("endTime"))if(!$util.isInteger(message.endTime)&&!(message.endTime&&$util.isInteger(message.endTime.low)&&$util.isInteger(message.endTime.high)))return "endTime: integer|Long expected";if(message.tid!=null&&message.hasOwnProperty("tid"))if(!$util.isInteger(message.tid))return "tid: integer expected";return null;};/**
         * Creates a Thread message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.Thread
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.Thread} Thread
         */Thread.fromObject=function fromObject(object){if(object instanceof $root.tracecap.Thread)return object;let message=new $root.tracecap.Thread();if(object.internalId!=null)if($util.Long)(message.internalId=$util.Long.fromValue(object.internalId)).unsigned=true;else if(typeof object.internalId==="string")message.internalId=parseInt(object.internalId,10);else if(typeof object.internalId==="number")message.internalId=object.internalId;else if(typeof object.internalId==="object")message.internalId=new $util.LongBits(object.internalId.low>>>0,object.internalId.high>>>0).toNumber(true);if(object.startTime!=null)if($util.Long)(message.startTime=$util.Long.fromValue(object.startTime)).unsigned=true;else if(typeof object.startTime==="string")message.startTime=parseInt(object.startTime,10);else if(typeof object.startTime==="number")message.startTime=object.startTime;else if(typeof object.startTime==="object")message.startTime=new $util.LongBits(object.startTime.low>>>0,object.startTime.high>>>0).toNumber(true);if(object.endTime!=null)if($util.Long)(message.endTime=$util.Long.fromValue(object.endTime)).unsigned=true;else if(typeof object.endTime==="string")message.endTime=parseInt(object.endTime,10);else if(typeof object.endTime==="number")message.endTime=object.endTime;else if(typeof object.endTime==="object")message.endTime=new $util.LongBits(object.endTime.low>>>0,object.endTime.high>>>0).toNumber(true);if(object.tid!=null)message.tid=object.tid>>>0;return message;};/**
         * Creates a plain object from a Thread message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.Thread
         * @static
         * @param {tracecap.Thread} message Thread
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Thread.toObject=function toObject(message,options){if(!options)options={};let object={};if(options.defaults){if($util.Long){let long=new $util.Long(0,0,true);object.internalId=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.internalId=options.longs===String?"0":0;if($util.Long){let long=new $util.Long(0,0,true);object.startTime=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.startTime=options.longs===String?"0":0;if($util.Long){let long=new $util.Long(0,0,true);object.endTime=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.endTime=options.longs===String?"0":0;object.tid=0;}if(message.internalId!=null&&message.hasOwnProperty("internalId"))if(typeof message.internalId==="number")object.internalId=options.longs===String?String(message.internalId):message.internalId;else object.internalId=options.longs===String?$util.Long.prototype.toString.call(message.internalId):options.longs===Number?new $util.LongBits(message.internalId.low>>>0,message.internalId.high>>>0).toNumber(true):message.internalId;if(message.startTime!=null&&message.hasOwnProperty("startTime"))if(typeof message.startTime==="number")object.startTime=options.longs===String?String(message.startTime):message.startTime;else object.startTime=options.longs===String?$util.Long.prototype.toString.call(message.startTime):options.longs===Number?new $util.LongBits(message.startTime.low>>>0,message.startTime.high>>>0).toNumber(true):message.startTime;if(message.endTime!=null&&message.hasOwnProperty("endTime"))if(typeof message.endTime==="number")object.endTime=options.longs===String?String(message.endTime):message.endTime;else object.endTime=options.longs===String?$util.Long.prototype.toString.call(message.endTime):options.longs===Number?new $util.LongBits(message.endTime.low>>>0,message.endTime.high>>>0).toNumber(true):message.endTime;if(message.tid!=null&&message.hasOwnProperty("tid"))object.tid=message.tid;return object;};/**
         * Converts this Thread to JSON.
         * @function toJSON
         * @memberof tracecap.Thread
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Thread.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Thread;}();tracecap.Process=function(){/**
         * Properties of a Process.
         * @memberof tracecap
         * @interface IProcess
         * @property {Long|null} [internalId] Process internalId
         * @property {Long|null} [startTime] Process startTime
         * @property {Long|null} [endTime] Process endTime
         * @property {number|null} [pid] Process pid
         * @property {string|null} [execName] Process execName
         * @property {Array.<tracecap.IThread>|null} [threads] Process threads
         */ /**
         * Constructs a new Process.
         * @memberof tracecap
         * @classdesc Represents a Process.
         * @implements IProcess
         * @constructor
         * @param {tracecap.IProcess=} [properties] Properties to set
         */function Process(properties){this.threads=[];if(properties)for(let keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Process internalId.
         * @member {Long} internalId
         * @memberof tracecap.Process
         * @instance
         */Process.prototype.internalId=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * Process startTime.
         * @member {Long} startTime
         * @memberof tracecap.Process
         * @instance
         */Process.prototype.startTime=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * Process endTime.
         * @member {Long} endTime
         * @memberof tracecap.Process
         * @instance
         */Process.prototype.endTime=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * Process pid.
         * @member {number} pid
         * @memberof tracecap.Process
         * @instance
         */Process.prototype.pid=0;/**
         * Process execName.
         * @member {string} execName
         * @memberof tracecap.Process
         * @instance
         */Process.prototype.execName="";/**
         * Process threads.
         * @member {Array.<tracecap.IThread>} threads
         * @memberof tracecap.Process
         * @instance
         */Process.prototype.threads=$util.emptyArray;/**
         * Creates a new Process instance using the specified properties.
         * @function create
         * @memberof tracecap.Process
         * @static
         * @param {tracecap.IProcess=} [properties] Properties to set
         * @returns {tracecap.Process} Process instance
         */Process.create=function create(properties){return new Process(properties);};/**
         * Encodes the specified Process message. Does not implicitly {@link tracecap.Process.verify|verify} messages.
         * @function encode
         * @memberof tracecap.Process
         * @static
         * @param {tracecap.IProcess} message Process message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Process.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.internalId!=null&&Object.hasOwnProperty.call(message,"internalId"))writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.internalId);if(message.startTime!=null&&Object.hasOwnProperty.call(message,"startTime"))writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.startTime);if(message.endTime!=null&&Object.hasOwnProperty.call(message,"endTime"))writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.endTime);if(message.pid!=null&&Object.hasOwnProperty.call(message,"pid"))writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pid);if(message.execName!=null&&Object.hasOwnProperty.call(message,"execName"))writer.uint32(/* id 5, wireType 2 =*/42).string(message.execName);if(message.threads!=null&&message.threads.length)for(let i=0;i<message.threads.length;++i)$root.tracecap.Thread.encode(message.threads[i],writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();return writer;};/**
         * Encodes the specified Process message, length delimited. Does not implicitly {@link tracecap.Process.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.Process
         * @static
         * @param {tracecap.IProcess} message Process message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Process.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Process message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.Process
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.Process} Process
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Process.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);let end=length===undefined?reader.len:reader.pos+length,message=new $root.tracecap.Process();while(reader.pos<end){let tag=reader.uint32();switch(tag>>>3){case 1:message.internalId=reader.uint64();break;case 2:message.startTime=reader.uint64();break;case 3:message.endTime=reader.uint64();break;case 4:message.pid=reader.uint32();break;case 5:message.execName=reader.string();break;case 16:if(!(message.threads&&message.threads.length))message.threads=[];message.threads.push($root.tracecap.Thread.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Process message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.Process
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.Process} Process
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Process.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Process message.
         * @function verify
         * @memberof tracecap.Process
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Process.verify=function verify(message){if(typeof message!=="object"||message===null)return "object expected";if(message.internalId!=null&&message.hasOwnProperty("internalId"))if(!$util.isInteger(message.internalId)&&!(message.internalId&&$util.isInteger(message.internalId.low)&&$util.isInteger(message.internalId.high)))return "internalId: integer|Long expected";if(message.startTime!=null&&message.hasOwnProperty("startTime"))if(!$util.isInteger(message.startTime)&&!(message.startTime&&$util.isInteger(message.startTime.low)&&$util.isInteger(message.startTime.high)))return "startTime: integer|Long expected";if(message.endTime!=null&&message.hasOwnProperty("endTime"))if(!$util.isInteger(message.endTime)&&!(message.endTime&&$util.isInteger(message.endTime.low)&&$util.isInteger(message.endTime.high)))return "endTime: integer|Long expected";if(message.pid!=null&&message.hasOwnProperty("pid"))if(!$util.isInteger(message.pid))return "pid: integer expected";if(message.execName!=null&&message.hasOwnProperty("execName"))if(!$util.isString(message.execName))return "execName: string expected";if(message.threads!=null&&message.hasOwnProperty("threads")){if(!Array.isArray(message.threads))return "threads: array expected";for(let i=0;i<message.threads.length;++i){let error=$root.tracecap.Thread.verify(message.threads[i]);if(error)return "threads."+error;}}return null;};/**
         * Creates a Process message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.Process
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.Process} Process
         */Process.fromObject=function fromObject(object){if(object instanceof $root.tracecap.Process)return object;let message=new $root.tracecap.Process();if(object.internalId!=null)if($util.Long)(message.internalId=$util.Long.fromValue(object.internalId)).unsigned=true;else if(typeof object.internalId==="string")message.internalId=parseInt(object.internalId,10);else if(typeof object.internalId==="number")message.internalId=object.internalId;else if(typeof object.internalId==="object")message.internalId=new $util.LongBits(object.internalId.low>>>0,object.internalId.high>>>0).toNumber(true);if(object.startTime!=null)if($util.Long)(message.startTime=$util.Long.fromValue(object.startTime)).unsigned=true;else if(typeof object.startTime==="string")message.startTime=parseInt(object.startTime,10);else if(typeof object.startTime==="number")message.startTime=object.startTime;else if(typeof object.startTime==="object")message.startTime=new $util.LongBits(object.startTime.low>>>0,object.startTime.high>>>0).toNumber(true);if(object.endTime!=null)if($util.Long)(message.endTime=$util.Long.fromValue(object.endTime)).unsigned=true;else if(typeof object.endTime==="string")message.endTime=parseInt(object.endTime,10);else if(typeof object.endTime==="number")message.endTime=object.endTime;else if(typeof object.endTime==="object")message.endTime=new $util.LongBits(object.endTime.low>>>0,object.endTime.high>>>0).toNumber(true);if(object.pid!=null)message.pid=object.pid>>>0;if(object.execName!=null)message.execName=String(object.execName);if(object.threads){if(!Array.isArray(object.threads))throw TypeError(".tracecap.Process.threads: array expected");message.threads=[];for(let i=0;i<object.threads.length;++i){if(typeof object.threads[i]!=="object")throw TypeError(".tracecap.Process.threads: object expected");message.threads[i]=$root.tracecap.Thread.fromObject(object.threads[i]);}}return message;};/**
         * Creates a plain object from a Process message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.Process
         * @static
         * @param {tracecap.Process} message Process
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Process.toObject=function toObject(message,options){if(!options)options={};let object={};if(options.arrays||options.defaults)object.threads=[];if(options.defaults){if($util.Long){let long=new $util.Long(0,0,true);object.internalId=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.internalId=options.longs===String?"0":0;if($util.Long){let long=new $util.Long(0,0,true);object.startTime=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.startTime=options.longs===String?"0":0;if($util.Long){let long=new $util.Long(0,0,true);object.endTime=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.endTime=options.longs===String?"0":0;object.pid=0;object.execName="";}if(message.internalId!=null&&message.hasOwnProperty("internalId"))if(typeof message.internalId==="number")object.internalId=options.longs===String?String(message.internalId):message.internalId;else object.internalId=options.longs===String?$util.Long.prototype.toString.call(message.internalId):options.longs===Number?new $util.LongBits(message.internalId.low>>>0,message.internalId.high>>>0).toNumber(true):message.internalId;if(message.startTime!=null&&message.hasOwnProperty("startTime"))if(typeof message.startTime==="number")object.startTime=options.longs===String?String(message.startTime):message.startTime;else object.startTime=options.longs===String?$util.Long.prototype.toString.call(message.startTime):options.longs===Number?new $util.LongBits(message.startTime.low>>>0,message.startTime.high>>>0).toNumber(true):message.startTime;if(message.endTime!=null&&message.hasOwnProperty("endTime"))if(typeof message.endTime==="number")object.endTime=options.longs===String?String(message.endTime):message.endTime;else object.endTime=options.longs===String?$util.Long.prototype.toString.call(message.endTime):options.longs===Number?new $util.LongBits(message.endTime.low>>>0,message.endTime.high>>>0).toNumber(true):message.endTime;if(message.pid!=null&&message.hasOwnProperty("pid"))object.pid=message.pid;if(message.execName!=null&&message.hasOwnProperty("execName"))object.execName=message.execName;if(message.threads&&message.threads.length){object.threads=[];for(let j=0;j<message.threads.length;++j)object.threads[j]=$root.tracecap.Thread.toObject(message.threads[j],options);}return object;};/**
         * Converts this Process to JSON.
         * @function toJSON
         * @memberof tracecap.Process
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Process.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Process;}();tracecap.ObjectSpaceSample=function(){/**
         * Properties of an ObjectSpaceSample.
         * @memberof tracecap
         * @interface IObjectSpaceSample
         * @property {Long|null} [total] ObjectSpaceSample total
         * @property {Long|null} [free] ObjectSpaceSample free
         */ /**
         * Constructs a new ObjectSpaceSample.
         * @memberof tracecap
         * @classdesc Represents an ObjectSpaceSample.
         * @implements IObjectSpaceSample
         * @constructor
         * @param {tracecap.IObjectSpaceSample=} [properties] Properties to set
         */function ObjectSpaceSample(properties){if(properties)for(let keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * ObjectSpaceSample total.
         * @member {Long} total
         * @memberof tracecap.ObjectSpaceSample
         * @instance
         */ObjectSpaceSample.prototype.total=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * ObjectSpaceSample free.
         * @member {Long} free
         * @memberof tracecap.ObjectSpaceSample
         * @instance
         */ObjectSpaceSample.prototype.free=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * Creates a new ObjectSpaceSample instance using the specified properties.
         * @function create
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {tracecap.IObjectSpaceSample=} [properties] Properties to set
         * @returns {tracecap.ObjectSpaceSample} ObjectSpaceSample instance
         */ObjectSpaceSample.create=function create(properties){return new ObjectSpaceSample(properties);};/**
         * Encodes the specified ObjectSpaceSample message. Does not implicitly {@link tracecap.ObjectSpaceSample.verify|verify} messages.
         * @function encode
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {tracecap.IObjectSpaceSample} message ObjectSpaceSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */ObjectSpaceSample.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.total!=null&&Object.hasOwnProperty.call(message,"total"))writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.total);if(message.free!=null&&Object.hasOwnProperty.call(message,"free"))writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.free);return writer;};/**
         * Encodes the specified ObjectSpaceSample message, length delimited. Does not implicitly {@link tracecap.ObjectSpaceSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {tracecap.IObjectSpaceSample} message ObjectSpaceSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */ObjectSpaceSample.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes an ObjectSpaceSample message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.ObjectSpaceSample} ObjectSpaceSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */ObjectSpaceSample.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);let end=length===undefined?reader.len:reader.pos+length,message=new $root.tracecap.ObjectSpaceSample();while(reader.pos<end){let tag=reader.uint32();switch(tag>>>3){case 1:message.total=reader.uint64();break;case 2:message.free=reader.uint64();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes an ObjectSpaceSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.ObjectSpaceSample} ObjectSpaceSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */ObjectSpaceSample.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies an ObjectSpaceSample message.
         * @function verify
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */ObjectSpaceSample.verify=function verify(message){if(typeof message!=="object"||message===null)return "object expected";if(message.total!=null&&message.hasOwnProperty("total"))if(!$util.isInteger(message.total)&&!(message.total&&$util.isInteger(message.total.low)&&$util.isInteger(message.total.high)))return "total: integer|Long expected";if(message.free!=null&&message.hasOwnProperty("free"))if(!$util.isInteger(message.free)&&!(message.free&&$util.isInteger(message.free.low)&&$util.isInteger(message.free.high)))return "free: integer|Long expected";return null;};/**
         * Creates an ObjectSpaceSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.ObjectSpaceSample} ObjectSpaceSample
         */ObjectSpaceSample.fromObject=function fromObject(object){if(object instanceof $root.tracecap.ObjectSpaceSample)return object;let message=new $root.tracecap.ObjectSpaceSample();if(object.total!=null)if($util.Long)(message.total=$util.Long.fromValue(object.total)).unsigned=true;else if(typeof object.total==="string")message.total=parseInt(object.total,10);else if(typeof object.total==="number")message.total=object.total;else if(typeof object.total==="object")message.total=new $util.LongBits(object.total.low>>>0,object.total.high>>>0).toNumber(true);if(object.free!=null)if($util.Long)(message.free=$util.Long.fromValue(object.free)).unsigned=true;else if(typeof object.free==="string")message.free=parseInt(object.free,10);else if(typeof object.free==="number")message.free=object.free;else if(typeof object.free==="object")message.free=new $util.LongBits(object.free.low>>>0,object.free.high>>>0).toNumber(true);return message;};/**
         * Creates a plain object from an ObjectSpaceSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {tracecap.ObjectSpaceSample} message ObjectSpaceSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */ObjectSpaceSample.toObject=function toObject(message,options){if(!options)options={};let object={};if(options.defaults){if($util.Long){let long=new $util.Long(0,0,true);object.total=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.total=options.longs===String?"0":0;if($util.Long){let long=new $util.Long(0,0,true);object.free=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.free=options.longs===String?"0":0;}if(message.total!=null&&message.hasOwnProperty("total"))if(typeof message.total==="number")object.total=options.longs===String?String(message.total):message.total;else object.total=options.longs===String?$util.Long.prototype.toString.call(message.total):options.longs===Number?new $util.LongBits(message.total.low>>>0,message.total.high>>>0).toNumber(true):message.total;if(message.free!=null&&message.hasOwnProperty("free"))if(typeof message.free==="number")object.free=options.longs===String?String(message.free):message.free;else object.free=options.longs===String?$util.Long.prototype.toString.call(message.free):options.longs===Number?new $util.LongBits(message.free.low>>>0,message.free.high>>>0).toNumber(true):message.free;return object;};/**
         * Converts this ObjectSpaceSample to JSON.
         * @function toJSON
         * @memberof tracecap.ObjectSpaceSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */ObjectSpaceSample.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ObjectSpaceSample;}();tracecap.StackFrame=function(){/**
         * Properties of a StackFrame.
         * @memberof tracecap
         * @interface IStackFrame
         * @property {string|null} [file] StackFrame file
         * @property {number|null} [line] StackFrame line
         * @property {string|null} [method] StackFrame method
         * @property {string|null} ["package"] StackFrame package
         */ /**
         * Constructs a new StackFrame.
         * @memberof tracecap
         * @classdesc Represents a StackFrame.
         * @implements IStackFrame
         * @constructor
         * @param {tracecap.IStackFrame=} [properties] Properties to set
         */function StackFrame(properties){if(properties)for(let keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * StackFrame file.
         * @member {string} file
         * @memberof tracecap.StackFrame
         * @instance
         */StackFrame.prototype.file="";/**
         * StackFrame line.
         * @member {number} line
         * @memberof tracecap.StackFrame
         * @instance
         */StackFrame.prototype.line=0;/**
         * StackFrame method.
         * @member {string} method
         * @memberof tracecap.StackFrame
         * @instance
         */StackFrame.prototype.method="";/**
         * StackFrame package.
         * @member {string} package
         * @memberof tracecap.StackFrame
         * @instance
         */StackFrame.prototype["package"]="";/**
         * Creates a new StackFrame instance using the specified properties.
         * @function create
         * @memberof tracecap.StackFrame
         * @static
         * @param {tracecap.IStackFrame=} [properties] Properties to set
         * @returns {tracecap.StackFrame} StackFrame instance
         */StackFrame.create=function create(properties){return new StackFrame(properties);};/**
         * Encodes the specified StackFrame message. Does not implicitly {@link tracecap.StackFrame.verify|verify} messages.
         * @function encode
         * @memberof tracecap.StackFrame
         * @static
         * @param {tracecap.IStackFrame} message StackFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */StackFrame.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.file!=null&&Object.hasOwnProperty.call(message,"file"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.file);if(message.line!=null&&Object.hasOwnProperty.call(message,"line"))writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.line);if(message.method!=null&&Object.hasOwnProperty.call(message,"method"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.method);if(message["package"]!=null&&Object.hasOwnProperty.call(message,"package"))writer.uint32(/* id 4, wireType 2 =*/34).string(message["package"]);return writer;};/**
         * Encodes the specified StackFrame message, length delimited. Does not implicitly {@link tracecap.StackFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.StackFrame
         * @static
         * @param {tracecap.IStackFrame} message StackFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */StackFrame.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a StackFrame message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.StackFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.StackFrame} StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */StackFrame.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);let end=length===undefined?reader.len:reader.pos+length,message=new $root.tracecap.StackFrame();while(reader.pos<end){let tag=reader.uint32();switch(tag>>>3){case 1:message.file=reader.string();break;case 2:message.line=reader.uint32();break;case 3:message.method=reader.string();break;case 4:message["package"]=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a StackFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.StackFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.StackFrame} StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */StackFrame.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a StackFrame message.
         * @function verify
         * @memberof tracecap.StackFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */StackFrame.verify=function verify(message){if(typeof message!=="object"||message===null)return "object expected";if(message.file!=null&&message.hasOwnProperty("file"))if(!$util.isString(message.file))return "file: string expected";if(message.line!=null&&message.hasOwnProperty("line"))if(!$util.isInteger(message.line))return "line: integer expected";if(message.method!=null&&message.hasOwnProperty("method"))if(!$util.isString(message.method))return "method: string expected";if(message["package"]!=null&&message.hasOwnProperty("package"))if(!$util.isString(message["package"]))return "package: string expected";return null;};/**
         * Creates a StackFrame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.StackFrame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.StackFrame} StackFrame
         */StackFrame.fromObject=function fromObject(object){if(object instanceof $root.tracecap.StackFrame)return object;let message=new $root.tracecap.StackFrame();if(object.file!=null)message.file=String(object.file);if(object.line!=null)message.line=object.line>>>0;if(object.method!=null)message.method=String(object.method);if(object["package"]!=null)message["package"]=String(object["package"]);return message;};/**
         * Creates a plain object from a StackFrame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.StackFrame
         * @static
         * @param {tracecap.StackFrame} message StackFrame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */StackFrame.toObject=function toObject(message,options){if(!options)options={};let object={};if(options.defaults){object.file="";object.line=0;object.method="";object["package"]="";}if(message.file!=null&&message.hasOwnProperty("file"))object.file=message.file;if(message.line!=null&&message.hasOwnProperty("line"))object.line=message.line;if(message.method!=null&&message.hasOwnProperty("method"))object.method=message.method;if(message["package"]!=null&&message.hasOwnProperty("package"))object["package"]=message["package"];return object;};/**
         * Converts this StackFrame to JSON.
         * @function toJSON
         * @memberof tracecap.StackFrame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */StackFrame.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return StackFrame;}();tracecap.StackSample=function(){/**
         * Properties of a StackSample.
         * @memberof tracecap
         * @interface IStackSample
         * @property {Array.<tracecap.IStackFrame>|null} [stack] StackSample stack
         */ /**
         * Constructs a new StackSample.
         * @memberof tracecap
         * @classdesc Represents a StackSample.
         * @implements IStackSample
         * @constructor
         * @param {tracecap.IStackSample=} [properties] Properties to set
         */function StackSample(properties){this.stack=[];if(properties)for(let keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * StackSample stack.
         * @member {Array.<tracecap.IStackFrame>} stack
         * @memberof tracecap.StackSample
         * @instance
         */StackSample.prototype.stack=$util.emptyArray;/**
         * Creates a new StackSample instance using the specified properties.
         * @function create
         * @memberof tracecap.StackSample
         * @static
         * @param {tracecap.IStackSample=} [properties] Properties to set
         * @returns {tracecap.StackSample} StackSample instance
         */StackSample.create=function create(properties){return new StackSample(properties);};/**
         * Encodes the specified StackSample message. Does not implicitly {@link tracecap.StackSample.verify|verify} messages.
         * @function encode
         * @memberof tracecap.StackSample
         * @static
         * @param {tracecap.IStackSample} message StackSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */StackSample.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.stack!=null&&message.stack.length)for(let i=0;i<message.stack.length;++i)$root.tracecap.StackFrame.encode(message.stack[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();return writer;};/**
         * Encodes the specified StackSample message, length delimited. Does not implicitly {@link tracecap.StackSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.StackSample
         * @static
         * @param {tracecap.IStackSample} message StackSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */StackSample.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a StackSample message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.StackSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.StackSample} StackSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */StackSample.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);let end=length===undefined?reader.len:reader.pos+length,message=new $root.tracecap.StackSample();while(reader.pos<end){let tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.stack&&message.stack.length))message.stack=[];message.stack.push($root.tracecap.StackFrame.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a StackSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.StackSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.StackSample} StackSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */StackSample.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a StackSample message.
         * @function verify
         * @memberof tracecap.StackSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */StackSample.verify=function verify(message){if(typeof message!=="object"||message===null)return "object expected";if(message.stack!=null&&message.hasOwnProperty("stack")){if(!Array.isArray(message.stack))return "stack: array expected";for(let i=0;i<message.stack.length;++i){let error=$root.tracecap.StackFrame.verify(message.stack[i]);if(error)return "stack."+error;}}return null;};/**
         * Creates a StackSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.StackSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.StackSample} StackSample
         */StackSample.fromObject=function fromObject(object){if(object instanceof $root.tracecap.StackSample)return object;let message=new $root.tracecap.StackSample();if(object.stack){if(!Array.isArray(object.stack))throw TypeError(".tracecap.StackSample.stack: array expected");message.stack=[];for(let i=0;i<object.stack.length;++i){if(typeof object.stack[i]!=="object")throw TypeError(".tracecap.StackSample.stack: object expected");message.stack[i]=$root.tracecap.StackFrame.fromObject(object.stack[i]);}}return message;};/**
         * Creates a plain object from a StackSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.StackSample
         * @static
         * @param {tracecap.StackSample} message StackSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */StackSample.toObject=function toObject(message,options){if(!options)options={};let object={};if(options.arrays||options.defaults)object.stack=[];if(message.stack&&message.stack.length){object.stack=[];for(let j=0;j<message.stack.length;++j)object.stack[j]=$root.tracecap.StackFrame.toObject(message.stack[j],options);}return object;};/**
         * Converts this StackSample to JSON.
         * @function toJSON
         * @memberof tracecap.StackSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */StackSample.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return StackSample;}();tracecap.SpanSample=function(){/**
         * Properties of a SpanSample.
         * @memberof tracecap
         * @interface ISpanSample
         * @property {Long|null} [startTime] SpanSample startTime
         * @property {Long|null} [endTime] SpanSample endTime
         * @property {string|null} [id] SpanSample id
         * @property {string|null} [parentId] SpanSample parentId
         * @property {string|null} [componentName] SpanSample componentName
         * @property {string|null} [description] SpanSample description
         * @property {Long|null} [queueTime] SpanSample queueTime
         */ /**
         * Constructs a new SpanSample.
         * @memberof tracecap
         * @classdesc Represents a SpanSample.
         * @implements ISpanSample
         * @constructor
         * @param {tracecap.ISpanSample=} [properties] Properties to set
         */function SpanSample(properties){if(properties)for(let keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * SpanSample startTime.
         * @member {Long} startTime
         * @memberof tracecap.SpanSample
         * @instance
         */SpanSample.prototype.startTime=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * SpanSample endTime.
         * @member {Long} endTime
         * @memberof tracecap.SpanSample
         * @instance
         */SpanSample.prototype.endTime=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * SpanSample id.
         * @member {string} id
         * @memberof tracecap.SpanSample
         * @instance
         */SpanSample.prototype.id="";/**
         * SpanSample parentId.
         * @member {string} parentId
         * @memberof tracecap.SpanSample
         * @instance
         */SpanSample.prototype.parentId="";/**
         * SpanSample componentName.
         * @member {string} componentName
         * @memberof tracecap.SpanSample
         * @instance
         */SpanSample.prototype.componentName="";/**
         * SpanSample description.
         * @member {string} description
         * @memberof tracecap.SpanSample
         * @instance
         */SpanSample.prototype.description="";/**
         * SpanSample queueTime.
         * @member {Long} queueTime
         * @memberof tracecap.SpanSample
         * @instance
         */SpanSample.prototype.queueTime=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * Creates a new SpanSample instance using the specified properties.
         * @function create
         * @memberof tracecap.SpanSample
         * @static
         * @param {tracecap.ISpanSample=} [properties] Properties to set
         * @returns {tracecap.SpanSample} SpanSample instance
         */SpanSample.create=function create(properties){return new SpanSample(properties);};/**
         * Encodes the specified SpanSample message. Does not implicitly {@link tracecap.SpanSample.verify|verify} messages.
         * @function encode
         * @memberof tracecap.SpanSample
         * @static
         * @param {tracecap.ISpanSample} message SpanSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */SpanSample.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.startTime!=null&&Object.hasOwnProperty.call(message,"startTime"))writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.startTime);if(message.endTime!=null&&Object.hasOwnProperty.call(message,"endTime"))writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.endTime);if(message.id!=null&&Object.hasOwnProperty.call(message,"id"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);if(message.parentId!=null&&Object.hasOwnProperty.call(message,"parentId"))writer.uint32(/* id 4, wireType 2 =*/34).string(message.parentId);if(message.componentName!=null&&Object.hasOwnProperty.call(message,"componentName"))writer.uint32(/* id 5, wireType 2 =*/42).string(message.componentName);if(message.description!=null&&Object.hasOwnProperty.call(message,"description"))writer.uint32(/* id 6, wireType 2 =*/50).string(message.description);if(message.queueTime!=null&&Object.hasOwnProperty.call(message,"queueTime"))writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.queueTime);return writer;};/**
         * Encodes the specified SpanSample message, length delimited. Does not implicitly {@link tracecap.SpanSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.SpanSample
         * @static
         * @param {tracecap.ISpanSample} message SpanSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */SpanSample.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a SpanSample message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.SpanSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.SpanSample} SpanSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */SpanSample.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);let end=length===undefined?reader.len:reader.pos+length,message=new $root.tracecap.SpanSample();while(reader.pos<end){let tag=reader.uint32();switch(tag>>>3){case 1:message.startTime=reader.uint64();break;case 2:message.endTime=reader.uint64();break;case 3:message.id=reader.string();break;case 4:message.parentId=reader.string();break;case 5:message.componentName=reader.string();break;case 6:message.description=reader.string();break;case 7:message.queueTime=reader.uint64();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a SpanSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.SpanSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.SpanSample} SpanSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */SpanSample.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a SpanSample message.
         * @function verify
         * @memberof tracecap.SpanSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */SpanSample.verify=function verify(message){if(typeof message!=="object"||message===null)return "object expected";if(message.startTime!=null&&message.hasOwnProperty("startTime"))if(!$util.isInteger(message.startTime)&&!(message.startTime&&$util.isInteger(message.startTime.low)&&$util.isInteger(message.startTime.high)))return "startTime: integer|Long expected";if(message.endTime!=null&&message.hasOwnProperty("endTime"))if(!$util.isInteger(message.endTime)&&!(message.endTime&&$util.isInteger(message.endTime.low)&&$util.isInteger(message.endTime.high)))return "endTime: integer|Long expected";if(message.id!=null&&message.hasOwnProperty("id"))if(!$util.isString(message.id))return "id: string expected";if(message.parentId!=null&&message.hasOwnProperty("parentId"))if(!$util.isString(message.parentId))return "parentId: string expected";if(message.componentName!=null&&message.hasOwnProperty("componentName"))if(!$util.isString(message.componentName))return "componentName: string expected";if(message.description!=null&&message.hasOwnProperty("description"))if(!$util.isString(message.description))return "description: string expected";if(message.queueTime!=null&&message.hasOwnProperty("queueTime"))if(!$util.isInteger(message.queueTime)&&!(message.queueTime&&$util.isInteger(message.queueTime.low)&&$util.isInteger(message.queueTime.high)))return "queueTime: integer|Long expected";return null;};/**
         * Creates a SpanSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.SpanSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.SpanSample} SpanSample
         */SpanSample.fromObject=function fromObject(object){if(object instanceof $root.tracecap.SpanSample)return object;let message=new $root.tracecap.SpanSample();if(object.startTime!=null)if($util.Long)(message.startTime=$util.Long.fromValue(object.startTime)).unsigned=true;else if(typeof object.startTime==="string")message.startTime=parseInt(object.startTime,10);else if(typeof object.startTime==="number")message.startTime=object.startTime;else if(typeof object.startTime==="object")message.startTime=new $util.LongBits(object.startTime.low>>>0,object.startTime.high>>>0).toNumber(true);if(object.endTime!=null)if($util.Long)(message.endTime=$util.Long.fromValue(object.endTime)).unsigned=true;else if(typeof object.endTime==="string")message.endTime=parseInt(object.endTime,10);else if(typeof object.endTime==="number")message.endTime=object.endTime;else if(typeof object.endTime==="object")message.endTime=new $util.LongBits(object.endTime.low>>>0,object.endTime.high>>>0).toNumber(true);if(object.id!=null)message.id=String(object.id);if(object.parentId!=null)message.parentId=String(object.parentId);if(object.componentName!=null)message.componentName=String(object.componentName);if(object.description!=null)message.description=String(object.description);if(object.queueTime!=null)if($util.Long)(message.queueTime=$util.Long.fromValue(object.queueTime)).unsigned=true;else if(typeof object.queueTime==="string")message.queueTime=parseInt(object.queueTime,10);else if(typeof object.queueTime==="number")message.queueTime=object.queueTime;else if(typeof object.queueTime==="object")message.queueTime=new $util.LongBits(object.queueTime.low>>>0,object.queueTime.high>>>0).toNumber(true);return message;};/**
         * Creates a plain object from a SpanSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.SpanSample
         * @static
         * @param {tracecap.SpanSample} message SpanSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */SpanSample.toObject=function toObject(message,options){if(!options)options={};let object={};if(options.defaults){if($util.Long){let long=new $util.Long(0,0,true);object.startTime=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.startTime=options.longs===String?"0":0;if($util.Long){let long=new $util.Long(0,0,true);object.endTime=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.endTime=options.longs===String?"0":0;object.id="";object.parentId="";object.componentName="";object.description="";if($util.Long){let long=new $util.Long(0,0,true);object.queueTime=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.queueTime=options.longs===String?"0":0;}if(message.startTime!=null&&message.hasOwnProperty("startTime"))if(typeof message.startTime==="number")object.startTime=options.longs===String?String(message.startTime):message.startTime;else object.startTime=options.longs===String?$util.Long.prototype.toString.call(message.startTime):options.longs===Number?new $util.LongBits(message.startTime.low>>>0,message.startTime.high>>>0).toNumber(true):message.startTime;if(message.endTime!=null&&message.hasOwnProperty("endTime"))if(typeof message.endTime==="number")object.endTime=options.longs===String?String(message.endTime):message.endTime;else object.endTime=options.longs===String?$util.Long.prototype.toString.call(message.endTime):options.longs===Number?new $util.LongBits(message.endTime.low>>>0,message.endTime.high>>>0).toNumber(true):message.endTime;if(message.id!=null&&message.hasOwnProperty("id"))object.id=message.id;if(message.parentId!=null&&message.hasOwnProperty("parentId"))object.parentId=message.parentId;if(message.componentName!=null&&message.hasOwnProperty("componentName"))object.componentName=message.componentName;if(message.description!=null&&message.hasOwnProperty("description"))object.description=message.description;if(message.queueTime!=null&&message.hasOwnProperty("queueTime"))if(typeof message.queueTime==="number")object.queueTime=options.longs===String?String(message.queueTime):message.queueTime;else object.queueTime=options.longs===String?$util.Long.prototype.toString.call(message.queueTime):options.longs===Number?new $util.LongBits(message.queueTime.low>>>0,message.queueTime.high>>>0).toNumber(true):message.queueTime;return object;};/**
         * Converts this SpanSample to JSON.
         * @function toJSON
         * @memberof tracecap.SpanSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */SpanSample.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return SpanSample;}();tracecap.Metadata=function(){/**
         * Properties of a Metadata.
         * @memberof tracecap
         * @interface IMetadata
         * @property {string|null} [name] Metadata name
         * @property {string|null} [metaString] Metadata metaString
         */ /**
         * Constructs a new Metadata.
         * @memberof tracecap
         * @classdesc Represents a Metadata.
         * @implements IMetadata
         * @constructor
         * @param {tracecap.IMetadata=} [properties] Properties to set
         */function Metadata(properties){if(properties)for(let keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Metadata name.
         * @member {string} name
         * @memberof tracecap.Metadata
         * @instance
         */Metadata.prototype.name="";/**
         * Metadata metaString.
         * @member {string} metaString
         * @memberof tracecap.Metadata
         * @instance
         */Metadata.prototype.metaString="";// OneOf field names bound to virtual getters and setters
let $oneOfFields;/**
         * Metadata value.
         * @member {"metaString"|undefined} value
         * @memberof tracecap.Metadata
         * @instance
         */Object.defineProperty(Metadata.prototype,"value",{get:$util.oneOfGetter($oneOfFields=["metaString"]),set:$util.oneOfSetter($oneOfFields)});/**
         * Creates a new Metadata instance using the specified properties.
         * @function create
         * @memberof tracecap.Metadata
         * @static
         * @param {tracecap.IMetadata=} [properties] Properties to set
         * @returns {tracecap.Metadata} Metadata instance
         */Metadata.create=function create(properties){return new Metadata(properties);};/**
         * Encodes the specified Metadata message. Does not implicitly {@link tracecap.Metadata.verify|verify} messages.
         * @function encode
         * @memberof tracecap.Metadata
         * @static
         * @param {tracecap.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Metadata.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.name!=null&&Object.hasOwnProperty.call(message,"name"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);if(message.metaString!=null&&Object.hasOwnProperty.call(message,"metaString"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.metaString);return writer;};/**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link tracecap.Metadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.Metadata
         * @static
         * @param {tracecap.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Metadata.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Metadata message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Metadata.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);let end=length===undefined?reader.len:reader.pos+length,message=new $root.tracecap.Metadata();while(reader.pos<end){let tag=reader.uint32();switch(tag>>>3){case 1:message.name=reader.string();break;case 2:message.metaString=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Metadata.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Metadata message.
         * @function verify
         * @memberof tracecap.Metadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Metadata.verify=function verify(message){if(typeof message!=="object"||message===null)return "object expected";let properties={};if(message.name!=null&&message.hasOwnProperty("name"))if(!$util.isString(message.name))return "name: string expected";if(message.metaString!=null&&message.hasOwnProperty("metaString")){properties.value=1;if(!$util.isString(message.metaString))return "metaString: string expected";}return null;};/**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.Metadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.Metadata} Metadata
         */Metadata.fromObject=function fromObject(object){if(object instanceof $root.tracecap.Metadata)return object;let message=new $root.tracecap.Metadata();if(object.name!=null)message.name=String(object.name);if(object.metaString!=null)message.metaString=String(object.metaString);return message;};/**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.Metadata
         * @static
         * @param {tracecap.Metadata} message Metadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Metadata.toObject=function toObject(message,options){if(!options)options={};let object={};if(options.defaults)object.name="";if(message.name!=null&&message.hasOwnProperty("name"))object.name=message.name;if(message.metaString!=null&&message.hasOwnProperty("metaString")){object.metaString=message.metaString;if(options.oneofs)object.value="metaString";}return object;};/**
         * Converts this Metadata to JSON.
         * @function toJSON
         * @memberof tracecap.Metadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Metadata.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Metadata;}();tracecap.ThreadSample=function(){/**
         * Properties of a ThreadSample.
         * @memberof tracecap
         * @interface IThreadSample
         * @property {Long|null} [collectionTime] ThreadSample collectionTime
         * @property {Long|null} [threadInternalId] ThreadSample threadInternalId
         * @property {tracecap.SampleScope|null} [scope] ThreadSample scope
         * @property {tracecap.SamplePurpose|null} [purpose] ThreadSample purpose
         * @property {Array.<tracecap.IMetadata>|null} [metadata] ThreadSample metadata
         * @property {tracecap.IObjectSpaceSample|null} [objectSpace] ThreadSample objectSpace
         * @property {tracecap.IStackSample|null} [stack] ThreadSample stack
         * @property {tracecap.ISpanSample|null} [span] ThreadSample span
         */ /**
         * Constructs a new ThreadSample.
         * @memberof tracecap
         * @classdesc Represents a ThreadSample.
         * @implements IThreadSample
         * @constructor
         * @param {tracecap.IThreadSample=} [properties] Properties to set
         */function ThreadSample(properties){this.metadata=[];if(properties)for(let keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * ThreadSample collectionTime.
         * @member {Long} collectionTime
         * @memberof tracecap.ThreadSample
         * @instance
         */ThreadSample.prototype.collectionTime=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * ThreadSample threadInternalId.
         * @member {Long} threadInternalId
         * @memberof tracecap.ThreadSample
         * @instance
         */ThreadSample.prototype.threadInternalId=$util.Long?$util.Long.fromBits(0,0,true):0;/**
         * ThreadSample scope.
         * @member {tracecap.SampleScope} scope
         * @memberof tracecap.ThreadSample
         * @instance
         */ThreadSample.prototype.scope=0;/**
         * ThreadSample purpose.
         * @member {tracecap.SamplePurpose} purpose
         * @memberof tracecap.ThreadSample
         * @instance
         */ThreadSample.prototype.purpose=0;/**
         * ThreadSample metadata.
         * @member {Array.<tracecap.IMetadata>} metadata
         * @memberof tracecap.ThreadSample
         * @instance
         */ThreadSample.prototype.metadata=$util.emptyArray;/**
         * ThreadSample objectSpace.
         * @member {tracecap.IObjectSpaceSample|null|undefined} objectSpace
         * @memberof tracecap.ThreadSample
         * @instance
         */ThreadSample.prototype.objectSpace=null;/**
         * ThreadSample stack.
         * @member {tracecap.IStackSample|null|undefined} stack
         * @memberof tracecap.ThreadSample
         * @instance
         */ThreadSample.prototype.stack=null;/**
         * ThreadSample span.
         * @member {tracecap.ISpanSample|null|undefined} span
         * @memberof tracecap.ThreadSample
         * @instance
         */ThreadSample.prototype.span=null;/**
         * Creates a new ThreadSample instance using the specified properties.
         * @function create
         * @memberof tracecap.ThreadSample
         * @static
         * @param {tracecap.IThreadSample=} [properties] Properties to set
         * @returns {tracecap.ThreadSample} ThreadSample instance
         */ThreadSample.create=function create(properties){return new ThreadSample(properties);};/**
         * Encodes the specified ThreadSample message. Does not implicitly {@link tracecap.ThreadSample.verify|verify} messages.
         * @function encode
         * @memberof tracecap.ThreadSample
         * @static
         * @param {tracecap.IThreadSample} message ThreadSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */ThreadSample.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.collectionTime!=null&&Object.hasOwnProperty.call(message,"collectionTime"))writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.collectionTime);if(message.threadInternalId!=null&&Object.hasOwnProperty.call(message,"threadInternalId"))writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.threadInternalId);if(message.scope!=null&&Object.hasOwnProperty.call(message,"scope"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.scope);if(message.purpose!=null&&Object.hasOwnProperty.call(message,"purpose"))writer.uint32(/* id 4, wireType 0 =*/32).int32(message.purpose);if(message.metadata!=null&&message.metadata.length)for(let i=0;i<message.metadata.length;++i)$root.tracecap.Metadata.encode(message.metadata[i],writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();if(message.objectSpace!=null&&Object.hasOwnProperty.call(message,"objectSpace"))$root.tracecap.ObjectSpaceSample.encode(message.objectSpace,writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();if(message.stack!=null&&Object.hasOwnProperty.call(message,"stack"))$root.tracecap.StackSample.encode(message.stack,writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();if(message.span!=null&&Object.hasOwnProperty.call(message,"span"))$root.tracecap.SpanSample.encode(message.span,writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();return writer;};/**
         * Encodes the specified ThreadSample message, length delimited. Does not implicitly {@link tracecap.ThreadSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.ThreadSample
         * @static
         * @param {tracecap.IThreadSample} message ThreadSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */ThreadSample.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a ThreadSample message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.ThreadSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.ThreadSample} ThreadSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */ThreadSample.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);let end=length===undefined?reader.len:reader.pos+length,message=new $root.tracecap.ThreadSample();while(reader.pos<end){let tag=reader.uint32();switch(tag>>>3){case 1:message.collectionTime=reader.uint64();break;case 2:message.threadInternalId=reader.uint64();break;case 3:message.scope=reader.int32();break;case 4:message.purpose=reader.int32();break;case 10:if(!(message.metadata&&message.metadata.length))message.metadata=[];message.metadata.push($root.tracecap.Metadata.decode(reader,reader.uint32()));break;case 16:message.objectSpace=$root.tracecap.ObjectSpaceSample.decode(reader,reader.uint32());break;case 17:message.stack=$root.tracecap.StackSample.decode(reader,reader.uint32());break;case 18:message.span=$root.tracecap.SpanSample.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a ThreadSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.ThreadSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.ThreadSample} ThreadSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */ThreadSample.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a ThreadSample message.
         * @function verify
         * @memberof tracecap.ThreadSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */ThreadSample.verify=function verify(message){if(typeof message!=="object"||message===null)return "object expected";if(message.collectionTime!=null&&message.hasOwnProperty("collectionTime"))if(!$util.isInteger(message.collectionTime)&&!(message.collectionTime&&$util.isInteger(message.collectionTime.low)&&$util.isInteger(message.collectionTime.high)))return "collectionTime: integer|Long expected";if(message.threadInternalId!=null&&message.hasOwnProperty("threadInternalId"))if(!$util.isInteger(message.threadInternalId)&&!(message.threadInternalId&&$util.isInteger(message.threadInternalId.low)&&$util.isInteger(message.threadInternalId.high)))return "threadInternalId: integer|Long expected";if(message.scope!=null&&message.hasOwnProperty("scope"))switch(message.scope){default:return "scope: enum value expected";case 0:case 1:case 2:case 3:break;}if(message.purpose!=null&&message.hasOwnProperty("purpose"))switch(message.purpose){default:return "purpose: enum value expected";case 0:case 1:case 2:break;}if(message.metadata!=null&&message.hasOwnProperty("metadata")){if(!Array.isArray(message.metadata))return "metadata: array expected";for(let i=0;i<message.metadata.length;++i){let error=$root.tracecap.Metadata.verify(message.metadata[i]);if(error)return "metadata."+error;}}if(message.objectSpace!=null&&message.hasOwnProperty("objectSpace")){let error=$root.tracecap.ObjectSpaceSample.verify(message.objectSpace);if(error)return "objectSpace."+error;}if(message.stack!=null&&message.hasOwnProperty("stack")){let error=$root.tracecap.StackSample.verify(message.stack);if(error)return "stack."+error;}if(message.span!=null&&message.hasOwnProperty("span")){let error=$root.tracecap.SpanSample.verify(message.span);if(error)return "span."+error;}return null;};/**
         * Creates a ThreadSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.ThreadSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.ThreadSample} ThreadSample
         */ThreadSample.fromObject=function fromObject(object){if(object instanceof $root.tracecap.ThreadSample)return object;let message=new $root.tracecap.ThreadSample();if(object.collectionTime!=null)if($util.Long)(message.collectionTime=$util.Long.fromValue(object.collectionTime)).unsigned=true;else if(typeof object.collectionTime==="string")message.collectionTime=parseInt(object.collectionTime,10);else if(typeof object.collectionTime==="number")message.collectionTime=object.collectionTime;else if(typeof object.collectionTime==="object")message.collectionTime=new $util.LongBits(object.collectionTime.low>>>0,object.collectionTime.high>>>0).toNumber(true);if(object.threadInternalId!=null)if($util.Long)(message.threadInternalId=$util.Long.fromValue(object.threadInternalId)).unsigned=true;else if(typeof object.threadInternalId==="string")message.threadInternalId=parseInt(object.threadInternalId,10);else if(typeof object.threadInternalId==="number")message.threadInternalId=object.threadInternalId;else if(typeof object.threadInternalId==="object")message.threadInternalId=new $util.LongBits(object.threadInternalId.low>>>0,object.threadInternalId.high>>>0).toNumber(true);switch(object.scope){case"UNKNOWN":case 0:message.scope=0;break;case"KERNEL":case 1:message.scope=1;break;case"USERSPACE":case 2:message.scope=2;break;case"VM_RUBY":case 3:message.scope=3;break;}switch(object.purpose){case"MISC":case 0:message.purpose=0;break;case"TRACE":case 1:message.purpose=1;break;case"PROFILE":case 2:message.purpose=2;break;}if(object.metadata){if(!Array.isArray(object.metadata))throw TypeError(".tracecap.ThreadSample.metadata: array expected");message.metadata=[];for(let i=0;i<object.metadata.length;++i){if(typeof object.metadata[i]!=="object")throw TypeError(".tracecap.ThreadSample.metadata: object expected");message.metadata[i]=$root.tracecap.Metadata.fromObject(object.metadata[i]);}}if(object.objectSpace!=null){if(typeof object.objectSpace!=="object")throw TypeError(".tracecap.ThreadSample.objectSpace: object expected");message.objectSpace=$root.tracecap.ObjectSpaceSample.fromObject(object.objectSpace);}if(object.stack!=null){if(typeof object.stack!=="object")throw TypeError(".tracecap.ThreadSample.stack: object expected");message.stack=$root.tracecap.StackSample.fromObject(object.stack);}if(object.span!=null){if(typeof object.span!=="object")throw TypeError(".tracecap.ThreadSample.span: object expected");message.span=$root.tracecap.SpanSample.fromObject(object.span);}return message;};/**
         * Creates a plain object from a ThreadSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.ThreadSample
         * @static
         * @param {tracecap.ThreadSample} message ThreadSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */ThreadSample.toObject=function toObject(message,options){if(!options)options={};let object={};if(options.arrays||options.defaults)object.metadata=[];if(options.defaults){if($util.Long){let long=new $util.Long(0,0,true);object.collectionTime=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.collectionTime=options.longs===String?"0":0;if($util.Long){let long=new $util.Long(0,0,true);object.threadInternalId=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.threadInternalId=options.longs===String?"0":0;object.scope=options.enums===String?"UNKNOWN":0;object.purpose=options.enums===String?"MISC":0;object.objectSpace=null;object.stack=null;object.span=null;}if(message.collectionTime!=null&&message.hasOwnProperty("collectionTime"))if(typeof message.collectionTime==="number")object.collectionTime=options.longs===String?String(message.collectionTime):message.collectionTime;else object.collectionTime=options.longs===String?$util.Long.prototype.toString.call(message.collectionTime):options.longs===Number?new $util.LongBits(message.collectionTime.low>>>0,message.collectionTime.high>>>0).toNumber(true):message.collectionTime;if(message.threadInternalId!=null&&message.hasOwnProperty("threadInternalId"))if(typeof message.threadInternalId==="number")object.threadInternalId=options.longs===String?String(message.threadInternalId):message.threadInternalId;else object.threadInternalId=options.longs===String?$util.Long.prototype.toString.call(message.threadInternalId):options.longs===Number?new $util.LongBits(message.threadInternalId.low>>>0,message.threadInternalId.high>>>0).toNumber(true):message.threadInternalId;if(message.scope!=null&&message.hasOwnProperty("scope"))object.scope=options.enums===String?$root.tracecap.SampleScope[message.scope]:message.scope;if(message.purpose!=null&&message.hasOwnProperty("purpose"))object.purpose=options.enums===String?$root.tracecap.SamplePurpose[message.purpose]:message.purpose;if(message.metadata&&message.metadata.length){object.metadata=[];for(let j=0;j<message.metadata.length;++j)object.metadata[j]=$root.tracecap.Metadata.toObject(message.metadata[j],options);}if(message.objectSpace!=null&&message.hasOwnProperty("objectSpace"))object.objectSpace=$root.tracecap.ObjectSpaceSample.toObject(message.objectSpace,options);if(message.stack!=null&&message.hasOwnProperty("stack"))object.stack=$root.tracecap.StackSample.toObject(message.stack,options);if(message.span!=null&&message.hasOwnProperty("span"))object.span=$root.tracecap.SpanSample.toObject(message.span,options);return object;};/**
         * Converts this ThreadSample to JSON.
         * @function toJSON
         * @memberof tracecap.ThreadSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */ThreadSample.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ThreadSample;}();tracecap.TraceFile=function(){/**
         * Properties of a TraceFile.
         * @memberof tracecap
         * @interface ITraceFile
         * @property {Array.<tracecap.IProcess>|null} [processes] TraceFile processes
         * @property {Array.<tracecap.IThreadSample>|null} [samples] TraceFile samples
         */ /**
         * Constructs a new TraceFile.
         * @memberof tracecap
         * @classdesc Represents a TraceFile.
         * @implements ITraceFile
         * @constructor
         * @param {tracecap.ITraceFile=} [properties] Properties to set
         */function TraceFile(properties){this.processes=[];this.samples=[];if(properties)for(let keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * TraceFile processes.
         * @member {Array.<tracecap.IProcess>} processes
         * @memberof tracecap.TraceFile
         * @instance
         */TraceFile.prototype.processes=$util.emptyArray;/**
         * TraceFile samples.
         * @member {Array.<tracecap.IThreadSample>} samples
         * @memberof tracecap.TraceFile
         * @instance
         */TraceFile.prototype.samples=$util.emptyArray;/**
         * Creates a new TraceFile instance using the specified properties.
         * @function create
         * @memberof tracecap.TraceFile
         * @static
         * @param {tracecap.ITraceFile=} [properties] Properties to set
         * @returns {tracecap.TraceFile} TraceFile instance
         */TraceFile.create=function create(properties){return new TraceFile(properties);};/**
         * Encodes the specified TraceFile message. Does not implicitly {@link tracecap.TraceFile.verify|verify} messages.
         * @function encode
         * @memberof tracecap.TraceFile
         * @static
         * @param {tracecap.ITraceFile} message TraceFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */TraceFile.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.processes!=null&&message.processes.length)for(let i=0;i<message.processes.length;++i)$root.tracecap.Process.encode(message.processes[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();if(message.samples!=null&&message.samples.length)for(let i=0;i<message.samples.length;++i)$root.tracecap.ThreadSample.encode(message.samples[i],writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();return writer;};/**
         * Encodes the specified TraceFile message, length delimited. Does not implicitly {@link tracecap.TraceFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.TraceFile
         * @static
         * @param {tracecap.ITraceFile} message TraceFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */TraceFile.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a TraceFile message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.TraceFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.TraceFile} TraceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */TraceFile.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);let end=length===undefined?reader.len:reader.pos+length,message=new $root.tracecap.TraceFile();while(reader.pos<end){let tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.processes&&message.processes.length))message.processes=[];message.processes.push($root.tracecap.Process.decode(reader,reader.uint32()));break;case 2:if(!(message.samples&&message.samples.length))message.samples=[];message.samples.push($root.tracecap.ThreadSample.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a TraceFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.TraceFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.TraceFile} TraceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */TraceFile.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a TraceFile message.
         * @function verify
         * @memberof tracecap.TraceFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */TraceFile.verify=function verify(message){if(typeof message!=="object"||message===null)return "object expected";if(message.processes!=null&&message.hasOwnProperty("processes")){if(!Array.isArray(message.processes))return "processes: array expected";for(let i=0;i<message.processes.length;++i){let error=$root.tracecap.Process.verify(message.processes[i]);if(error)return "processes."+error;}}if(message.samples!=null&&message.hasOwnProperty("samples")){if(!Array.isArray(message.samples))return "samples: array expected";for(let i=0;i<message.samples.length;++i){let error=$root.tracecap.ThreadSample.verify(message.samples[i]);if(error)return "samples."+error;}}return null;};/**
         * Creates a TraceFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.TraceFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.TraceFile} TraceFile
         */TraceFile.fromObject=function fromObject(object){if(object instanceof $root.tracecap.TraceFile)return object;let message=new $root.tracecap.TraceFile();if(object.processes){if(!Array.isArray(object.processes))throw TypeError(".tracecap.TraceFile.processes: array expected");message.processes=[];for(let i=0;i<object.processes.length;++i){if(typeof object.processes[i]!=="object")throw TypeError(".tracecap.TraceFile.processes: object expected");message.processes[i]=$root.tracecap.Process.fromObject(object.processes[i]);}}if(object.samples){if(!Array.isArray(object.samples))throw TypeError(".tracecap.TraceFile.samples: array expected");message.samples=[];for(let i=0;i<object.samples.length;++i){if(typeof object.samples[i]!=="object")throw TypeError(".tracecap.TraceFile.samples: object expected");message.samples[i]=$root.tracecap.ThreadSample.fromObject(object.samples[i]);}}return message;};/**
         * Creates a plain object from a TraceFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.TraceFile
         * @static
         * @param {tracecap.TraceFile} message TraceFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */TraceFile.toObject=function toObject(message,options){if(!options)options={};let object={};if(options.arrays||options.defaults){object.processes=[];object.samples=[];}if(message.processes&&message.processes.length){object.processes=[];for(let j=0;j<message.processes.length;++j)object.processes[j]=$root.tracecap.Process.toObject(message.processes[j],options);}if(message.samples&&message.samples.length){object.samples=[];for(let j=0;j<message.samples.length;++j)object.samples[j]=$root.tracecap.ThreadSample.toObject(message.samples[j],options);}return object;};/**
         * Converts this TraceFile to JSON.
         * @function toJSON
         * @memberof tracecap.TraceFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */TraceFile.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return TraceFile;}();return tracecap;})();

class BasePerfDataSource{constructor(traceFile){var _a;this.threadIdToProcess={};this.startCollectionTime=null;this.processIdComponents={};this.componentColors={};this.componentColorIndex=0;this.objectSpaceSamples={};this.data=traceFile;this.earliestTime=null;this.latestTime=null;(_a=this.data.processes)===null||_a===void 0?void 0:_a.forEach(process=>{var _a;(_a=process.threads)===null||_a===void 0?void 0:_a.forEach(thread=>{this.threadIdToProcess[thread.internalId.toNumber()]=process;});});this.data.samples.forEach(sample=>{var _a,_b;var _c,_d;let processId=(_a=this.threadIdToProcess[sample.threadInternalId.toNumber()].internalId)===null||_a===void 0?void 0:_a.toNumber();if(this.startCollectionTime==null||((_b=sample.collectionTime)===null||_b===void 0?void 0:_b.lessThan(this.startCollectionTime))){this.startCollectionTime=sample.collectionTime;}if(sample.span){// remember the oldest/newest times
let start=sample.span.startTime;let end=sample.span.endTime;this.earliestTime||(this.earliestTime=start);this.latestTime||(this.latestTime=end);if(start.lt(this.earliestTime))this.earliestTime=start;if(end.gt(this.latestTime))this.latestTime=end;// collect a list components for each process
let component=sample.span.componentName;if(processId&&component){(_c=this.processIdComponents)[processId]||(_c[processId]=[]);if(!this.processIdComponents[processId].includes(component))this.processIdComponents[processId].push(component);}if(component){if(!this.componentColors[component]){this.componentColors[component]=this.componentColorIndex;this.componentColorIndex++;}}}if(sample.objectSpace&&processId){(_d=this.objectSpaceSamples)[processId]||(_d[processId]=[]);this.objectSpaceSamples[processId].push(sample);}});}getTimeBounds(view){return new PerfDataTimeRange(this.earliestTime,this.latestTime);}colorForComponent(component){if(this.componentColors[component]){return `item-color-${this.componentColors[component]%10}`;}return undefined;}getSections(view){var _a;let sections=[];sections.push({id:'system',title:'System'});let procSections=(_a=this.data.processes)===null||_a===void 0?void 0:_a.map(process=>{return {id:`pid-${process.pid}`,title:`PID ${process.pid}: ${process.execName}`,context:process};});return sections.concat(procSections||[]);}getTracksForSection(view,section,under){var _a,_b,_c,_d;if(under){let context=under.context;let children=[];let process=section.context;let parentSpan=context.span;let parentSpanId=(_a=parentSpan===null||parentSpan===void 0?void 0:parentSpan.span)===null||_a===void 0?void 0:_a.id;if(context.type=="timeline-tree"||context.type=="span-child"){(_b=this.data.samples)===null||_b===void 0?void 0:_b.forEach(sample=>{let span=sample.span;if(span&&this.threadIdToProcess[sample.threadInternalId.toNumber()]==process){if(context.type=="timeline-tree"&&span.parentId)return;if(context.type=="span-child"&&span.parentId!=parentSpanId)return;children.push({id:`timeline-tree-${span.id}`,color:this.colorForComponent(span.componentName),name:span.componentName,description:span.description||undefined,trackType:PerfDataTrackType.Span,context:{type:'span-child',span:sample}});}});}else if(context.type=="component"){(_c=this.data.samples)===null||_c===void 0?void 0:_c.forEach(sample=>{let span=sample.span;if(span&&this.threadIdToProcess[sample.threadInternalId.toNumber()]==process){if(context.component!=span.componentName)return;children.push({id:`component-item-${span.id}`,color:this.colorForComponent(span.componentName),name:span.componentName,description:span.description||undefined,trackType:PerfDataTrackType.Span,context:{type:'span',span:sample}});}});}children=children.sort((a,b)=>{var _a,_b,_c,_d;let aSample=(_a=a.context)===null||_a===void 0?void 0:_a.span;let bSample=(_b=b.context)===null||_b===void 0?void 0:_b.span;if(!aSample||!bSample)return 0;let aTime=(_c=aSample.span)===null||_c===void 0?void 0:_c.startTime;let bTime=(_d=bSample.span)===null||_d===void 0?void 0:_d.startTime;if(!aTime||!bTime)return 0;return aTime.toSigned().sub(bTime).toNumber();});return children;}let tracks=[];let process=section.context;let processId=(_d=process===null||process===void 0?void 0:process.internalId)===null||_d===void 0?void 0:_d.toNumber();if(processId){let objectSpaceSamples=this.objectSpaceSamples[processId];if(objectSpaceSamples){tracks.push({id:`process-${processId}-object-space`,name:'Objects (Used)',trackType:PerfDataTrackType.Gauge,context:{type:'object-space',samples:objectSpaceSamples}});}let processComponents=this.processIdComponents[processId];processComponents===null||processComponents===void 0?void 0:processComponents.forEach(component=>{tracks.push({id:`process-${processId}-component-${component}`,color:this.colorForComponent(component),name:component,trackType:PerfDataTrackType.SpanSummary,context:{type:'component',component:component}});});tracks.push({id:`process-${processId}-timeline-tree`,name:'Timeline Tree',trackType:PerfDataTrackType.SpanSummary,context:{type:'timeline-tree'}});}return tracks;}getSpanDataForTrack(view,section,track){let context=track.context;let sample=context.span;if(sample){let span=sample.span;let ret={timeRange:new PerfDataTimeRange(span.startTime,span.endTime)};if(span.queueTime){ret.queueTime=span.queueTime;}return ret;}return {timeRange:new PerfDataTimeRange(Long.fromNumber(0),Long.fromNumber(0))};}getTimeseriesDataForTrack(view,section,track){let timeseries={data_points:[]};let context=track.context;let samples=context.samples;if(samples){samples.forEach(sample=>{let objectSpaceSample=sample.objectSpace;let total=objectSpaceSample.total||Long.fromNumber(0);let free=objectSpaceSample.free||Long.fromNumber(0);let used=total.sub(free);timeseries.data_points.push({time:sample.collectionTime,value:used});});}return timeseries;}getSamplesForTimeRange(threadInternalId,timeRange){var _a;return (_a=this.data.samples)===null||_a===void 0?void 0:_a.filter(sample=>{if(!sample.collectionTime)return false;if(!threadInternalId.eq(sample.threadInternalId))return false;return timeRange.contains(sample.collectionTime);});}getStackDataForTrack(view,section,track){let process=section.context;let context=track.context;let sample=context.span;if(!sample){return new class{getStackScopes(){return [];}getStackSamplesForScope(scope){throw new Error('Method not implemented.');}}();}let spanData=this.getSpanDataForTrack(view,section,track);let timeRange=spanData.timeRange;let samples=this.getSamplesForTimeRange(sample.threadInternalId,timeRange);var groupedSamples=new Map();samples.forEach(sample=>{var _a;if(!sample.scope)return;if(sample.purpose!=tracecap.SamplePurpose.PROFILE)return;if(!sample.stack)return;if(!groupedSamples.has(sample.scope)){groupedSamples.set(sample.scope,[]);}(_a=groupedSamples.get(sample.scope))===null||_a===void 0?void 0:_a.push(sample);});return new class{getStackScopes(){return Array.from(groupedSamples.keys());}getStackSamplesForScope(scope){return groupedSamples.get(scope);// we know this key existed from the call above
}}();}}

class SlicedPerfDataSource{constructor(base,traceFile,command){this.base=base;this.timeRange=null;if(command.args[0].startsWith('span.id=')){let args=command.args[0].split('=',2);traceFile.samples.forEach(sample=>{if(sample.span){let span=sample.span;if(span.id==args[1]){this.timeRange=new PerfDataTimeRange(span.startTime,span.endTime);}}});}}getTimeBounds(view){if(this.timeRange){return this.timeRange;}return this.base.getTimeBounds(view);}getSections(view){return this.base.getSections(view);}getTracksForSection(view,section,under){let tracks=this.base.getTracksForSection(view,section,under);if(this.timeRange&&tracks){tracks=tracks.filter(track=>{if(track.trackType==PerfDataTrackType.Span){let spanData=this.getSpanDataForTrack(view,section,track);return spanData.timeRange.overlaps(this.timeRange);}return true;});}return tracks;}getSpanDataForTrack(view,section,track){return this.base.getSpanDataForTrack(view,section,track);}getTimeseriesDataForTrack(view,section,track){let ts=this.base.getTimeseriesDataForTrack(view,section,track);// if (this.earliestTime && this.latestTime) {
//     ts.data_points = ts.data_points.filter(value => {
//         return value.time.gte(this.earliestTime!) && value.time.lte(this.latestTime!)
//     });
// }
return ts;}getStackDataForTrack(view,section,track){return this.base.getStackDataForTrack(view,section,track);}}

let _$V=t=>t,_t$W,_t2$p;class QueryPipeline extends LitElement{constructor(){super();this.query='';window.addEventListener("popstate",e=>{if(e.state)this.setQuery(e.state.q);this.runQueryDelayed(false);});}firstUpdated(){let urlParams=new URLSearchParams(window.location.search);if(urlParams.has('q')){this.setQuery(urlParams.get('q'));this.runQuery();}}getParsedQuery(){let query=this.inputElement().value;return query.split('|').map(command=>{let commandParts=command.trim().split(' ');return {command:commandParts[0],args:commandParts.slice(1)};});}inputElement(){return this.shadowRoot.querySelector('textarea');}_handleRunQuery(e){this.setQuery(this.inputElement().value);this.runQuery();}setQuery(query){let el=this.inputElement();if(el)el.value=query;else this.query=query;}appendQueryPipe(pipeCommand){let el=this.inputElement();el.value=el.value+' | '+pipeCommand;this.runQueryDelayed();}runQueryDelayed(saveState=true){setTimeout(()=>{this.runQuery(saveState);},0);}runQuery(saveState=true){let event=new CustomEvent('run-query',{detail:{parsedQuery:this.getParsedQuery()}});this.dispatchEvent(event);if(saveState){let q=this.inputElement().value;window.history.pushState({q:q},q,window.location.pathname+'?q='+encodeURIComponent(q));}}render(){return html(_t$W||(_t$W=_$V`
    <div class="query-pipeline">
      <button @click=${0}>Run Query</button>
      <div style="margin-right: 100px;">
        <textarea>${0}</textarea>
      </div>
    </div>
    `),this._handleRunQuery,this.query);}}QueryPipeline.styles=css(_t2$p||(_t2$p=_$V`
    .query-pipeline {
      padding: 20px;
    }

    .query-pipeline button {
      float: right;
      padding: 7px;
      font-size: 14px;
      height: 32px;
      width: 90px;
    }

    .query-pipeline textarea {
      width: 100%;
      padding: 8px;
      font-size: 14px;
      height: 32px;
      box-sizing: border-box;
      
      resize: vertical;
    }
  `));__decorate([property({type:String})],QueryPipeline.prototype,"query",void 0);

/*! pako 2.0.3 https://github.com/nodeca/pako @license (MIT AND Zlib) */ // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
/* eslint-disable space-unary-ops */ /* Public constants ==========================================================*/ /* ===========================================================================*/ //const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const Z_FIXED=4;//const Z_DEFAULT_STRATEGY  = 0;
/* Possible values of the data_type field (though see inflate()) */const Z_BINARY=0;const Z_TEXT=1;//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN=2;/*============================================================================*/function zero(buf){let len=buf.length;while(--len>=0){buf[len]=0;}}// From zutil.h
const STORED_BLOCK=0;const STATIC_TREES=1;const DYN_TREES=2;/* The three kinds of block type */const MIN_MATCH=3;const MAX_MATCH=258;/* The minimum and maximum match lengths */ // From deflate.h
/* ===========================================================================
 * Internal compression state.
 */const LENGTH_CODES=29;/* number of length codes, not counting the special END_BLOCK code */const LITERALS=256;/* number of literal bytes 0..255 */const L_CODES=LITERALS+1+LENGTH_CODES;/* number of Literal or Length codes, including the END_BLOCK code */const D_CODES=30;/* number of distance codes */const BL_CODES=19;/* number of codes used to transfer the bit lengths */const HEAP_SIZE=2*L_CODES+1;/* maximum heap size */const MAX_BITS=15;/* All codes must not exceed MAX_BITS bits */const Buf_size=16;/* size of bit buffer in bi_buf */ /* ===========================================================================
 * Constants
 */const MAX_BL_BITS=7;/* Bit length codes must not exceed MAX_BL_BITS bits */const END_BLOCK=256;/* end of block literal code */const REP_3_6=16;/* repeat previous bit length 3-6 times (2 bits of repeat count) */const REPZ_3_10=17;/* repeat a zero length 3-10 times  (3 bits of repeat count) */const REPZ_11_138=18;/* repeat a zero length 11-138 times  (7 bits of repeat count) */ /* eslint-disable comma-spacing,array-bracket-spacing */const extra_lbits=/* extra bits for each length code */new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]);const extra_dbits=/* extra bits for each distance code */new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);const extra_blbits=/* extra bits for each bit length code */new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]);const bl_order=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);/* eslint-enable comma-spacing,array-bracket-spacing */ /* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */ /* ===========================================================================
 * Local data. These are initialized only once.
 */ // We pre-fill arrays with 0 to avoid uninitialized gaps
const DIST_CODE_LEN=512;/* see definition of array dist_code below */ // !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree=new Array((L_CODES+2)*2);zero(static_ltree);/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */const static_dtree=new Array(D_CODES*2);zero(static_dtree);/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */const _dist_code=new Array(DIST_CODE_LEN);zero(_dist_code);/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */const _length_code=new Array(MAX_MATCH-MIN_MATCH+1);zero(_length_code);/* length code for each normalized match length (0 == MIN_MATCH) */const base_length=new Array(LENGTH_CODES);zero(base_length);/* First normalized length for each code (0 = MIN_MATCH) */const base_dist=new Array(D_CODES);zero(base_dist);/* First normalized distance for each code (0 = distance of 1) */function StaticTreeDesc(static_tree,extra_bits,extra_base,elems,max_length){this.static_tree=static_tree;/* static tree or NULL */this.extra_bits=extra_bits;/* extra bits for each code or NULL */this.extra_base=extra_base;/* base index for extra_bits */this.elems=elems;/* max number of elements in the tree */this.max_length=max_length;/* max bit length for the codes */ // show if `static_tree` has data or dummy - needed for monomorphic objects
this.has_stree=static_tree&&static_tree.length;}let static_l_desc;let static_d_desc;let static_bl_desc;function TreeDesc(dyn_tree,stat_desc){this.dyn_tree=dyn_tree;/* the dynamic tree */this.max_code=0;/* largest code with non zero frequency */this.stat_desc=stat_desc;/* the corresponding static tree */}const d_code=dist=>{return dist<256?_dist_code[dist]:_dist_code[256+(dist>>>7)];};/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */const put_short=(s,w)=>{//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
s.pending_buf[s.pending++]=w&0xff;s.pending_buf[s.pending++]=w>>>8&0xff;};/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */const send_bits=(s,value,length)=>{if(s.bi_valid>Buf_size-length){s.bi_buf|=value<<s.bi_valid&0xffff;put_short(s,s.bi_buf);s.bi_buf=value>>Buf_size-s.bi_valid;s.bi_valid+=length-Buf_size;}else {s.bi_buf|=value<<s.bi_valid&0xffff;s.bi_valid+=length;}};const send_code=(s,c,tree)=>{send_bits(s,tree[c*2]/*.Code*/,tree[c*2+1]/*.Len*/);};/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */const bi_reverse=(code,len)=>{let res=0;do{res|=code&1;code>>>=1;res<<=1;}while(--len>0);return res>>>1;};/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */const bi_flush=s=>{if(s.bi_valid===16){put_short(s,s.bi_buf);s.bi_buf=0;s.bi_valid=0;}else if(s.bi_valid>=8){s.pending_buf[s.pending++]=s.bi_buf&0xff;s.bi_buf>>=8;s.bi_valid-=8;}};/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */const gen_bitlen=(s,desc)=>//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{const tree=desc.dyn_tree;const max_code=desc.max_code;const stree=desc.stat_desc.static_tree;const has_stree=desc.stat_desc.has_stree;const extra=desc.stat_desc.extra_bits;const base=desc.stat_desc.extra_base;const max_length=desc.stat_desc.max_length;let h;/* heap index */let n,m;/* iterate over the tree elements */let bits;/* bit length */let xbits;/* extra bits */let f;/* frequency */let overflow=0;/* number of elements with bit length too large */for(bits=0;bits<=MAX_BITS;bits++){s.bl_count[bits]=0;}/* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */tree[s.heap[s.heap_max]*2+1]/*.Len*/=0;/* root of the heap */for(h=s.heap_max+1;h<HEAP_SIZE;h++){n=s.heap[h];bits=tree[tree[n*2+1]/*.Dad*/*2+1]/*.Len*/+1;if(bits>max_length){bits=max_length;overflow++;}tree[n*2+1]/*.Len*/=bits;/* We overwrite tree[n].Dad which is no longer needed */if(n>max_code){continue;}/* not a leaf node */s.bl_count[bits]++;xbits=0;if(n>=base){xbits=extra[n-base];}f=tree[n*2]/*.Freq*/;s.opt_len+=f*(bits+xbits);if(has_stree){s.static_len+=f*(stree[n*2+1]/*.Len*/+xbits);}}if(overflow===0){return;}// Trace((stderr,"\nbit length overflow\n"));
/* This happens for example on obj2 and pic of the Calgary corpus */ /* Find the first bit length which could increase: */do{bits=max_length-1;while(s.bl_count[bits]===0){bits--;}s.bl_count[bits]--;/* move one leaf down the tree */s.bl_count[bits+1]+=2;/* move one overflow item as its brother */s.bl_count[max_length]--;/* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */overflow-=2;}while(overflow>0);/* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */for(bits=max_length;bits!==0;bits--){n=s.bl_count[bits];while(n!==0){m=s.heap[--h];if(m>max_code){continue;}if(tree[m*2+1]/*.Len*/!==bits){// Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
s.opt_len+=(bits-tree[m*2+1]/*.Len*/)*tree[m*2]/*.Freq*/;tree[m*2+1]/*.Len*/=bits;}n--;}}};/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */const gen_codes=(tree,max_code,bl_count)=>//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{const next_code=new Array(MAX_BITS+1);/* next code value for each bit length */let code=0;/* running code value */let bits;/* bit index */let n;/* code index */ /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */for(bits=1;bits<=MAX_BITS;bits++){next_code[bits]=code=code+bl_count[bits-1]<<1;}/* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */ //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
//        "inconsistent bit counts");
//Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
for(n=0;n<=max_code;n++){let len=tree[n*2+1]/*.Len*/;if(len===0){continue;}/* Now reverse the bits */tree[n*2]/*.Code*/=bi_reverse(next_code[len]++,len);//Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
//     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
}};/* ===========================================================================
 * Initialize the various 'constant' tables.
 */const tr_static_init=()=>{let n;/* iterates over tree elements */let bits;/* bit counter */let length;/* length value */let code;/* code value */let dist;/* distance index */const bl_count=new Array(MAX_BITS+1);/* number of codes at each bit length for an optimal tree */ // do check in _tr_init()
//if (static_init_done) return;
/* For some embedded targets, global variables are not initialized: */ /*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/ /* Initialize the mapping length (0..255) -> length code (0..28) */length=0;for(code=0;code<LENGTH_CODES-1;code++){base_length[code]=length;for(n=0;n<1<<extra_lbits[code];n++){_length_code[length++]=code;}}//Assert (length == 256, "tr_static_init: length != 256");
/* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */_length_code[length-1]=code;/* Initialize the mapping dist (0..32K) -> dist code (0..29) */dist=0;for(code=0;code<16;code++){base_dist[code]=dist;for(n=0;n<1<<extra_dbits[code];n++){_dist_code[dist++]=code;}}//Assert (dist == 256, "tr_static_init: dist != 256");
dist>>=7;/* from now on, all distances are divided by 128 */for(;code<D_CODES;code++){base_dist[code]=dist<<7;for(n=0;n<1<<extra_dbits[code]-7;n++){_dist_code[256+dist++]=code;}}//Assert (dist == 256, "tr_static_init: 256+dist != 512");
/* Construct the codes of the static literal tree */for(bits=0;bits<=MAX_BITS;bits++){bl_count[bits]=0;}n=0;while(n<=143){static_ltree[n*2+1]/*.Len*/=8;n++;bl_count[8]++;}while(n<=255){static_ltree[n*2+1]/*.Len*/=9;n++;bl_count[9]++;}while(n<=279){static_ltree[n*2+1]/*.Len*/=7;n++;bl_count[7]++;}while(n<=287){static_ltree[n*2+1]/*.Len*/=8;n++;bl_count[8]++;}/* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */gen_codes(static_ltree,L_CODES+1,bl_count);/* The static distance tree is trivial: */for(n=0;n<D_CODES;n++){static_dtree[n*2+1]/*.Len*/=5;static_dtree[n*2]/*.Code*/=bi_reverse(n,5);}// Now data ready and we can init static trees
static_l_desc=new StaticTreeDesc(static_ltree,extra_lbits,LITERALS+1,L_CODES,MAX_BITS);static_d_desc=new StaticTreeDesc(static_dtree,extra_dbits,0,D_CODES,MAX_BITS);static_bl_desc=new StaticTreeDesc(new Array(0),extra_blbits,0,BL_CODES,MAX_BL_BITS);//static_init_done = true;
};/* ===========================================================================
 * Initialize a new block.
 */const init_block=s=>{let n;/* iterates over tree elements */ /* Initialize the trees. */for(n=0;n<L_CODES;n++){s.dyn_ltree[n*2]/*.Freq*/=0;}for(n=0;n<D_CODES;n++){s.dyn_dtree[n*2]/*.Freq*/=0;}for(n=0;n<BL_CODES;n++){s.bl_tree[n*2]/*.Freq*/=0;}s.dyn_ltree[END_BLOCK*2]/*.Freq*/=1;s.opt_len=s.static_len=0;s.last_lit=s.matches=0;};/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */const bi_windup=s=>{if(s.bi_valid>8){put_short(s,s.bi_buf);}else if(s.bi_valid>0){//put_byte(s, (Byte)s->bi_buf);
s.pending_buf[s.pending++]=s.bi_buf;}s.bi_buf=0;s.bi_valid=0;};/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */const copy_block=(s,buf,len,header)=>//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{bi_windup(s);/* align on byte boundary */if(header){put_short(s,len);put_short(s,~len);}//  while (len--) {
//    put_byte(s, *buf++);
//  }
s.pending_buf.set(s.window.subarray(buf,buf+len),s.pending);s.pending+=len;};/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */const smaller=(tree,n,m,depth)=>{const _n2=n*2;const _m2=m*2;return tree[_n2]/*.Freq*/<tree[_m2]/*.Freq*/||tree[_n2]/*.Freq*/===tree[_m2]/*.Freq*/&&depth[n]<=depth[m];};/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */const pqdownheap=(s,tree,k)=>//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{const v=s.heap[k];let j=k<<1;/* left son of k */while(j<=s.heap_len){/* Set j to the smallest of the two sons: */if(j<s.heap_len&&smaller(tree,s.heap[j+1],s.heap[j],s.depth)){j++;}/* Exit if v is smaller than both sons */if(smaller(tree,v,s.heap[j],s.depth)){break;}/* Exchange v with the smallest son */s.heap[k]=s.heap[j];k=j;/* And continue down the tree, setting j to the left son of k */j<<=1;}s.heap[k]=v;};// inlined manually
// const SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */const compress_block=(s,ltree,dtree)=>//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{let dist;/* distance of matched string */let lc;/* match length or unmatched char (if dist == 0) */let lx=0;/* running index in l_buf */let code;/* the code to send */let extra;/* number of extra bits to send */if(s.last_lit!==0){do{dist=s.pending_buf[s.d_buf+lx*2]<<8|s.pending_buf[s.d_buf+lx*2+1];lc=s.pending_buf[s.l_buf+lx];lx++;if(dist===0){send_code(s,lc,ltree);/* send a literal byte */ //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
}else {/* Here, lc is the match length - MIN_MATCH */code=_length_code[lc];send_code(s,code+LITERALS+1,ltree);/* send the length code */extra=extra_lbits[code];if(extra!==0){lc-=base_length[code];send_bits(s,lc,extra);/* send the extra length bits */}dist--;/* dist is now the match distance - 1 */code=d_code(dist);//Assert (code < D_CODES, "bad d_code");
send_code(s,code,dtree);/* send the distance code */extra=extra_dbits[code];if(extra!==0){dist-=base_dist[code];send_bits(s,dist,extra);/* send the extra distance bits */}}/* literal or match pair ? */ /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */ //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
//       "pendingBuf overflow");
}while(lx<s.last_lit);}send_code(s,END_BLOCK,ltree);};/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */const build_tree=(s,desc)=>//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{const tree=desc.dyn_tree;const stree=desc.stat_desc.static_tree;const has_stree=desc.stat_desc.has_stree;const elems=desc.stat_desc.elems;let n,m;/* iterate over heap elements */let max_code=-1;/* largest code with non zero frequency */let node;/* new node being created */ /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */s.heap_len=0;s.heap_max=HEAP_SIZE;for(n=0;n<elems;n++){if(tree[n*2]/*.Freq*/!==0){s.heap[++s.heap_len]=max_code=n;s.depth[n]=0;}else {tree[n*2+1]/*.Len*/=0;}}/* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */while(s.heap_len<2){node=s.heap[++s.heap_len]=max_code<2?++max_code:0;tree[node*2]/*.Freq*/=1;s.depth[node]=0;s.opt_len--;if(has_stree){s.static_len-=stree[node*2+1]/*.Len*/;}/* node is 0 or 1 so it does not have extra bits */}desc.max_code=max_code;/* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */for(n=s.heap_len>>1/*int /2*/;n>=1;n--){pqdownheap(s,tree,n);}/* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */node=elems;/* next internal node of the tree */do{//pqremove(s, tree, n);  /* n = node of least frequency */
/*** pqremove ***/n=s.heap[1/*SMALLEST*/];s.heap[1/*SMALLEST*/]=s.heap[s.heap_len--];pqdownheap(s,tree,1/*SMALLEST*/);/***/m=s.heap[1/*SMALLEST*/];/* m = node of next least frequency */s.heap[--s.heap_max]=n;/* keep the nodes sorted by frequency */s.heap[--s.heap_max]=m;/* Create a new node father of n and m */tree[node*2]/*.Freq*/=tree[n*2]/*.Freq*/+tree[m*2]/*.Freq*/;s.depth[node]=(s.depth[n]>=s.depth[m]?s.depth[n]:s.depth[m])+1;tree[n*2+1]/*.Dad*/=tree[m*2+1]/*.Dad*/=node;/* and insert the new node in the heap */s.heap[1/*SMALLEST*/]=node++;pqdownheap(s,tree,1/*SMALLEST*/);}while(s.heap_len>=2);s.heap[--s.heap_max]=s.heap[1/*SMALLEST*/];/* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */gen_bitlen(s,desc);/* The field len is now set, we can generate the bit codes */gen_codes(tree,max_code,s.bl_count);};/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */const scan_tree=(s,tree,max_code)=>//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{let n;/* iterates over all tree elements */let prevlen=-1;/* last emitted length */let curlen;/* length of current code */let nextlen=tree[0*2+1]/*.Len*/;/* length of next code */let count=0;/* repeat count of the current code */let max_count=7;/* max repeat count */let min_count=4;/* min repeat count */if(nextlen===0){max_count=138;min_count=3;}tree[(max_code+1)*2+1]/*.Len*/=0xffff;/* guard */for(n=0;n<=max_code;n++){curlen=nextlen;nextlen=tree[(n+1)*2+1]/*.Len*/;if(++count<max_count&&curlen===nextlen){continue;}else if(count<min_count){s.bl_tree[curlen*2]/*.Freq*/+=count;}else if(curlen!==0){if(curlen!==prevlen){s.bl_tree[curlen*2]/*.Freq*/++;}s.bl_tree[REP_3_6*2]/*.Freq*/++;}else if(count<=10){s.bl_tree[REPZ_3_10*2]/*.Freq*/++;}else {s.bl_tree[REPZ_11_138*2]/*.Freq*/++;}count=0;prevlen=curlen;if(nextlen===0){max_count=138;min_count=3;}else if(curlen===nextlen){max_count=6;min_count=3;}else {max_count=7;min_count=4;}}};/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */const send_tree=(s,tree,max_code)=>//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{let n;/* iterates over all tree elements */let prevlen=-1;/* last emitted length */let curlen;/* length of current code */let nextlen=tree[0*2+1]/*.Len*/;/* length of next code */let count=0;/* repeat count of the current code */let max_count=7;/* max repeat count */let min_count=4;/* min repeat count */ /* tree[max_code+1].Len = -1; */ /* guard already set */if(nextlen===0){max_count=138;min_count=3;}for(n=0;n<=max_code;n++){curlen=nextlen;nextlen=tree[(n+1)*2+1]/*.Len*/;if(++count<max_count&&curlen===nextlen){continue;}else if(count<min_count){do{send_code(s,curlen,s.bl_tree);}while(--count!==0);}else if(curlen!==0){if(curlen!==prevlen){send_code(s,curlen,s.bl_tree);count--;}//Assert(count >= 3 && count <= 6, " 3_6?");
send_code(s,REP_3_6,s.bl_tree);send_bits(s,count-3,2);}else if(count<=10){send_code(s,REPZ_3_10,s.bl_tree);send_bits(s,count-3,3);}else {send_code(s,REPZ_11_138,s.bl_tree);send_bits(s,count-11,7);}count=0;prevlen=curlen;if(nextlen===0){max_count=138;min_count=3;}else if(curlen===nextlen){max_count=6;min_count=3;}else {max_count=7;min_count=4;}}};/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */const build_bl_tree=s=>{let max_blindex;/* index of last bit length code of non zero freq */ /* Determine the bit length frequencies for literal and distance trees */scan_tree(s,s.dyn_ltree,s.l_desc.max_code);scan_tree(s,s.dyn_dtree,s.d_desc.max_code);/* Build the bit length tree: */build_tree(s,s.bl_desc);/* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */ /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */for(max_blindex=BL_CODES-1;max_blindex>=3;max_blindex--){if(s.bl_tree[bl_order[max_blindex]*2+1]/*.Len*/!==0){break;}}/* Update opt_len to include the bit length tree and counts */s.opt_len+=3*(max_blindex+1)+5+5+4;//Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
//        s->opt_len, s->static_len));
return max_blindex;};/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */const send_all_trees=(s,lcodes,dcodes,blcodes)=>//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{let rank;/* index in bl_order */ //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
//Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
//        "too many codes");
//Tracev((stderr, "\nbl counts: "));
send_bits(s,lcodes-257,5);/* not +255 as stated in appnote.txt */send_bits(s,dcodes-1,5);send_bits(s,blcodes-4,4);/* not -3 as stated in appnote.txt */for(rank=0;rank<blcodes;rank++){//Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
send_bits(s,s.bl_tree[bl_order[rank]*2+1]/*.Len*/,3);}//Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
send_tree(s,s.dyn_ltree,lcodes-1);/* literal tree */ //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
send_tree(s,s.dyn_dtree,dcodes-1);/* distance tree */ //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */const detect_data_type=s=>{/* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */let black_mask=0xf3ffc07f;let n;/* Check for non-textual ("black-listed") bytes. */for(n=0;n<=31;n++,black_mask>>>=1){if(black_mask&1&&s.dyn_ltree[n*2]/*.Freq*/!==0){return Z_BINARY;}}/* Check for textual ("white-listed") bytes. */if(s.dyn_ltree[9*2]/*.Freq*/!==0||s.dyn_ltree[10*2]/*.Freq*/!==0||s.dyn_ltree[13*2]/*.Freq*/!==0){return Z_TEXT;}for(n=32;n<LITERALS;n++){if(s.dyn_ltree[n*2]/*.Freq*/!==0){return Z_TEXT;}}/* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */return Z_BINARY;};let static_init_done=false;/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */const _tr_init=s=>{if(!static_init_done){tr_static_init();static_init_done=true;}s.l_desc=new TreeDesc(s.dyn_ltree,static_l_desc);s.d_desc=new TreeDesc(s.dyn_dtree,static_d_desc);s.bl_desc=new TreeDesc(s.bl_tree,static_bl_desc);s.bi_buf=0;s.bi_valid=0;/* Initialize the first block of the first file: */init_block(s);};/* ===========================================================================
 * Send a stored block
 */const _tr_stored_block=(s,buf,stored_len,last)=>//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{send_bits(s,(STORED_BLOCK<<1)+(last?1:0),3);/* send block type */copy_block(s,buf,stored_len,true);/* with header */};/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */const _tr_align=s=>{send_bits(s,STATIC_TREES<<1,3);send_code(s,END_BLOCK,static_ltree);bi_flush(s);};/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */const _tr_flush_block=(s,buf,stored_len,last)=>//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{let opt_lenb,static_lenb;/* opt_len and static_len in bytes */let max_blindex=0;/* index of last bit length code of non zero freq */ /* Build the Huffman trees unless a stored block is forced */if(s.level>0){/* Check if the file is binary or text */if(s.strm.data_type===Z_UNKNOWN){s.strm.data_type=detect_data_type(s);}/* Construct the literal and distance trees */build_tree(s,s.l_desc);// Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
//        s->static_len));
build_tree(s,s.d_desc);// Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
//        s->static_len));
/* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */ /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */max_blindex=build_bl_tree(s);/* Determine the best encoding. Compute the block lengths in bytes. */opt_lenb=s.opt_len+3+7>>>3;static_lenb=s.static_len+3+7>>>3;// Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
//        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
//        s->last_lit));
if(static_lenb<=opt_lenb){opt_lenb=static_lenb;}}else {// Assert(buf != (char*)0, "lost buf");
opt_lenb=static_lenb=stored_len+5;/* force a stored block */}if(stored_len+4<=opt_lenb&&buf!==-1){/* 4: two words for the lengths */ /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */_tr_stored_block(s,buf,stored_len,last);}else if(s.strategy===Z_FIXED||static_lenb===opt_lenb){send_bits(s,(STATIC_TREES<<1)+(last?1:0),3);compress_block(s,static_ltree,static_dtree);}else {send_bits(s,(DYN_TREES<<1)+(last?1:0),3);send_all_trees(s,s.l_desc.max_code+1,s.d_desc.max_code+1,max_blindex+1);compress_block(s,s.dyn_ltree,s.dyn_dtree);}// Assert (s->compressed_len == s->bits_sent, "bad compressed size");
/* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */init_block(s);if(last){bi_windup(s);}// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
};/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */const _tr_tally=(s,dist,lc)=>//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{//let out_length, in_length, dcode;
s.pending_buf[s.d_buf+s.last_lit*2]=dist>>>8&0xff;s.pending_buf[s.d_buf+s.last_lit*2+1]=dist&0xff;s.pending_buf[s.l_buf+s.last_lit]=lc&0xff;s.last_lit++;if(dist===0){/* lc is the unmatched char */s.dyn_ltree[lc*2]/*.Freq*/++;}else {s.matches++;/* Here, lc is the match length - MIN_MATCH */dist--;/* dist = match distance - 1 */ //Assert((ush)dist < (ush)MAX_DIST(s) &&
//       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
//       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
s.dyn_ltree[(_length_code[lc]+LITERALS+1)*2]/*.Freq*/++;s.dyn_dtree[d_code(dist)*2]/*.Freq*/++;}// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif
return s.last_lit===s.lit_bufsize-1;/* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */};var _tr_init_1=_tr_init;var _tr_stored_block_1=_tr_stored_block;var _tr_flush_block_1=_tr_flush_block;var _tr_tally_1=_tr_tally;var _tr_align_1=_tr_align;var trees={_tr_init:_tr_init_1,_tr_stored_block:_tr_stored_block_1,_tr_flush_block:_tr_flush_block_1,_tr_tally:_tr_tally_1,_tr_align:_tr_align_1};// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const adler32=(adler,buf,len,pos)=>{let s1=adler&0xffff|0,s2=adler>>>16&0xffff|0,n=0;while(len!==0){// Set limit ~ twice less than 5552, to keep
// s2 in 31-bits, because we force signed ints.
// in other case %= will fail.
n=len>2000?2000:len;len-=n;do{s1=s1+buf[pos++]|0;s2=s2+s1|0;}while(--n);s1%=65521;s2%=65521;}return s1|s2<<16|0;};var adler32_1=adler32;// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here
const makeTable=()=>{let c,table=[];for(var n=0;n<256;n++){c=n;for(var k=0;k<8;k++){c=c&1?0xEDB88320^c>>>1:c>>>1;}table[n]=c;}return table;};// Create table on load. Just 255 signed longs. Not a problem.
const crcTable=new Uint32Array(makeTable());const crc32=(crc,buf,len,pos)=>{const t=crcTable;const end=pos+len;crc^=-1;for(let i=pos;i<end;i++){crc=crc>>>8^t[(crc^buf[i])&0xFF];}return crc^-1;// >>> 0;
};var crc32_1=crc32;// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var messages={2:'need dictionary',/* Z_NEED_DICT       2  */1:'stream end',/* Z_STREAM_END      1  */0:'',/* Z_OK              0  */'-1':'file error',/* Z_ERRNO         (-1) */'-2':'stream error',/* Z_STREAM_ERROR  (-2) */'-3':'data error',/* Z_DATA_ERROR    (-3) */'-4':'insufficient memory',/* Z_MEM_ERROR     (-4) */'-5':'buffer error',/* Z_BUF_ERROR     (-5) */'-6':'incompatible version'/* Z_VERSION_ERROR (-6) */};// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var constants={/* Allowed flush values; see deflate() and inflate() below for details */Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,/* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,//Z_VERSION_ERROR: -6,
/* compression levels */Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,/* Possible values of the data_type field (though see inflate()) */Z_BINARY:0,Z_TEXT:1,//Z_ASCII:                1, // = Z_TEXT (deprecated)
Z_UNKNOWN:2,/* The deflate compression method */Z_DEFLATED:8//Z_NULL:                 null // Use -1 or null inline, depending on var type
};// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const{_tr_init:_tr_init$1,_tr_stored_block:_tr_stored_block$1,_tr_flush_block:_tr_flush_block$1,_tr_tally:_tr_tally$1,_tr_align:_tr_align$1}=trees;/* Public constants ==========================================================*/ /* ===========================================================================*/const{Z_NO_FLUSH,Z_PARTIAL_FLUSH,Z_FULL_FLUSH,Z_FINISH,Z_BLOCK,Z_OK,Z_STREAM_END,Z_STREAM_ERROR,Z_DATA_ERROR,Z_BUF_ERROR,Z_DEFAULT_COMPRESSION,Z_FILTERED,Z_HUFFMAN_ONLY,Z_RLE,Z_FIXED:Z_FIXED$1,Z_DEFAULT_STRATEGY,Z_UNKNOWN:Z_UNKNOWN$1,Z_DEFLATED}=constants;/*============================================================================*/const MAX_MEM_LEVEL=9;/* Maximum value for memLevel in deflateInit2 */const MAX_WBITS=15;/* 32K LZ77 window */const DEF_MEM_LEVEL=8;const LENGTH_CODES$1=29;/* number of length codes, not counting the special END_BLOCK code */const LITERALS$1=256;/* number of literal bytes 0..255 */const L_CODES$1=LITERALS$1+1+LENGTH_CODES$1;/* number of Literal or Length codes, including the END_BLOCK code */const D_CODES$1=30;/* number of distance codes */const BL_CODES$1=19;/* number of codes used to transfer the bit lengths */const HEAP_SIZE$1=2*L_CODES$1+1;/* maximum heap size */const MAX_BITS$1=15;/* All codes must not exceed MAX_BITS bits */const MIN_MATCH$1=3;const MAX_MATCH$1=258;const MIN_LOOKAHEAD=MAX_MATCH$1+MIN_MATCH$1+1;const PRESET_DICT=0x20;const INIT_STATE=42;const EXTRA_STATE=69;const NAME_STATE=73;const COMMENT_STATE=91;const HCRC_STATE=103;const BUSY_STATE=113;const FINISH_STATE=666;const BS_NEED_MORE=1;/* block not completed, need more input or more output */const BS_BLOCK_DONE=2;/* block flush performed */const BS_FINISH_STARTED=3;/* finish started, need only more output at next deflate */const BS_FINISH_DONE=4;/* finish done, accept no more input or output */const OS_CODE=0x03;// Unix :) . Don't detect, use this default.
const err=(strm,errorCode)=>{strm.msg=messages[errorCode];return errorCode;};const rank=f=>{return (f<<1)-(f>4?9:0);};const zero$1=buf=>{let len=buf.length;while(--len>=0){buf[len]=0;}};/* eslint-disable new-cap */let HASH_ZLIB=(s,prev,data)=>(prev<<s.hash_shift^data)&s.hash_mask;// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH=HASH_ZLIB;/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */const flush_pending=strm=>{const s=strm.state;//_tr_flush_bits(s);
let len=s.pending;if(len>strm.avail_out){len=strm.avail_out;}if(len===0){return;}strm.output.set(s.pending_buf.subarray(s.pending_out,s.pending_out+len),strm.next_out);strm.next_out+=len;s.pending_out+=len;strm.total_out+=len;strm.avail_out-=len;s.pending-=len;if(s.pending===0){s.pending_out=0;}};const flush_block_only=(s,last)=>{_tr_flush_block$1(s,s.block_start>=0?s.block_start:-1,s.strstart-s.block_start,last);s.block_start=s.strstart;flush_pending(s.strm);};const put_byte=(s,b)=>{s.pending_buf[s.pending++]=b;};/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */const putShortMSB=(s,b)=>{//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
s.pending_buf[s.pending++]=b>>>8&0xff;s.pending_buf[s.pending++]=b&0xff;};/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */const read_buf=(strm,buf,start,size)=>{let len=strm.avail_in;if(len>size){len=size;}if(len===0){return 0;}strm.avail_in-=len;// zmemcpy(buf, strm->next_in, len);
buf.set(strm.input.subarray(strm.next_in,strm.next_in+len),start);if(strm.state.wrap===1){strm.adler=adler32_1(strm.adler,buf,len,start);}else if(strm.state.wrap===2){strm.adler=crc32_1(strm.adler,buf,len,start);}strm.next_in+=len;strm.total_in+=len;return len;};/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */const longest_match=(s,cur_match)=>{let chain_length=s.max_chain_length;/* max hash chain length */let scan=s.strstart;/* current string */let match;/* matched string */let len;/* length of current match */let best_len=s.prev_length;/* best match length so far */let nice_match=s.nice_match;/* stop if match long enough */const limit=s.strstart>s.w_size-MIN_LOOKAHEAD?s.strstart-(s.w_size-MIN_LOOKAHEAD):0/*NIL*/;const _win=s.window;// shortcut
const wmask=s.w_mask;const prev=s.prev;/* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */const strend=s.strstart+MAX_MATCH$1;let scan_end1=_win[scan+best_len-1];let scan_end=_win[scan+best_len];/* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */ // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
/* Do not waste too much time if we already have a good match: */if(s.prev_length>=s.good_match){chain_length>>=2;}/* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */if(nice_match>s.lookahead){nice_match=s.lookahead;}// Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
do{// Assert(cur_match < s->strstart, "no future");
match=cur_match;/* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */if(_win[match+best_len]!==scan_end||_win[match+best_len-1]!==scan_end1||_win[match]!==_win[scan]||_win[++match]!==_win[scan+1]){continue;}/* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */scan+=2;match++;// Assert(*scan == *match, "match[2]?");
/* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */do{/*jshint noempty:false*/}while(_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&scan<strend);// Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
len=MAX_MATCH$1-(strend-scan);scan=strend-MAX_MATCH$1;if(len>best_len){s.match_start=cur_match;best_len=len;if(len>=nice_match){break;}scan_end1=_win[scan+best_len-1];scan_end=_win[scan+best_len];}}while((cur_match=prev[cur_match&wmask])>limit&&--chain_length!==0);if(best_len<=s.lookahead){return best_len;}return s.lookahead;};/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */const fill_window=s=>{const _w_size=s.w_size;let p,n,m,more,str;//Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
do{more=s.window_size-s.lookahead-s.strstart;// JS ints have 32 bit, block below not needed
/* Deal with !@#$% 64K limit: */ //if (sizeof(int) <= 2) {
//    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
//        more = wsize;
//
//  } else if (more == (unsigned)(-1)) {
//        /* Very unlikely, but possible on 16 bit machine if
//         * strstart == 0 && lookahead == 1 (input done a byte at time)
//         */
//        more--;
//    }
//}
/* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */if(s.strstart>=_w_size+(_w_size-MIN_LOOKAHEAD)){s.window.set(s.window.subarray(_w_size,_w_size+_w_size),0);s.match_start-=_w_size;s.strstart-=_w_size;/* we now have strstart >= MAX_DIST */s.block_start-=_w_size;/* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */n=s.hash_size;p=n;do{m=s.head[--p];s.head[p]=m>=_w_size?m-_w_size:0;}while(--n);n=_w_size;p=n;do{m=s.prev[--p];s.prev[p]=m>=_w_size?m-_w_size:0;/* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */}while(--n);more+=_w_size;}if(s.strm.avail_in===0){break;}/* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */ //Assert(more >= 2, "more < 2");
n=read_buf(s.strm,s.window,s.strstart+s.lookahead,more);s.lookahead+=n;/* Initialize the hash value now that we have some input: */if(s.lookahead+s.insert>=MIN_MATCH$1){str=s.strstart-s.insert;s.ins_h=s.window[str];/* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */s.ins_h=HASH(s,s.ins_h,s.window[str+1]);//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
while(s.insert){/* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */s.ins_h=HASH(s,s.ins_h,s.window[str+MIN_MATCH$1-1]);s.prev[str&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=str;str++;s.insert--;if(s.lookahead+s.insert<MIN_MATCH$1){break;}}}/* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */}while(s.lookahead<MIN_LOOKAHEAD&&s.strm.avail_in!==0);/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */ //  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */const deflate_stored=(s,flush)=>{/* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */let max_block_size=0xffff;if(max_block_size>s.pending_buf_size-5){max_block_size=s.pending_buf_size-5;}/* Copy as much as possible from input to output: */for(;;){/* Fill the window as much as possible: */if(s.lookahead<=1){//Assert(s->strstart < s->w_size+MAX_DIST(s) ||
//  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }
fill_window(s);if(s.lookahead===0&&flush===Z_NO_FLUSH){return BS_NEED_MORE;}if(s.lookahead===0){break;}/* flush the current block */}//Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");
s.strstart+=s.lookahead;s.lookahead=0;/* Emit a stored block if pending_buf will be full: */const max_start=s.block_start+max_block_size;if(s.strstart===0||s.strstart>=max_start){/* strstart == 0 is possible when wraparound on 16-bit machine */s.lookahead=s.strstart-max_start;s.strstart=max_start;/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}/* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */if(s.strstart-s.block_start>=s.w_size-MIN_LOOKAHEAD){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}s.insert=0;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.strstart>s.block_start){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_NEED_MORE;};/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */const deflate_fast=(s,flush)=>{let hash_head;/* head of the hash chain */let bflush;/* set if current block must be flushed */for(;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */if(s.lookahead<MIN_LOOKAHEAD){fill_window(s);if(s.lookahead<MIN_LOOKAHEAD&&flush===Z_NO_FLUSH){return BS_NEED_MORE;}if(s.lookahead===0){break;/* flush the current block */}}/* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */hash_head=0/*NIL*/;if(s.lookahead>=MIN_MATCH$1){/*** INSERT_STRING(s, s.strstart, hash_head); ***/s.ins_h=HASH(s,s.ins_h,s.window[s.strstart+MIN_MATCH$1-1]);hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart;/***/}/* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */if(hash_head!==0/*NIL*/&&s.strstart-hash_head<=s.w_size-MIN_LOOKAHEAD){/* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */s.match_length=longest_match(s,hash_head);/* longest_match() sets match_start */}if(s.match_length>=MIN_MATCH$1){// check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
/*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/bflush=_tr_tally$1(s,s.strstart-s.match_start,s.match_length-MIN_MATCH$1);s.lookahead-=s.match_length;/* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */if(s.match_length<=s.max_lazy_match/*max_insert_length*/&&s.lookahead>=MIN_MATCH$1){s.match_length--;/* string at strstart already in table */do{s.strstart++;/*** INSERT_STRING(s, s.strstart, hash_head); ***/s.ins_h=HASH(s,s.ins_h,s.window[s.strstart+MIN_MATCH$1-1]);hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart;/***/ /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */}while(--s.match_length!==0);s.strstart++;}else {s.strstart+=s.match_length;s.match_length=0;s.ins_h=s.window[s.strstart];/* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */s.ins_h=HASH(s,s.ins_h,s.window[s.strstart+1]);//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
/* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */}}else {/* No match, output a literal byte */ //Tracevv((stderr,"%c", s.window[s.strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/bflush=_tr_tally$1(s,0,s.window[s.strstart]);s.lookahead--;s.strstart++;}if(bflush){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}s.insert=s.strstart<MIN_MATCH$1-1?s.strstart:MIN_MATCH$1-1;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.last_lit){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_BLOCK_DONE;};/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */const deflate_slow=(s,flush)=>{let hash_head;/* head of hash chain */let bflush;/* set if current block must be flushed */let max_insert;/* Process the input block. */for(;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */if(s.lookahead<MIN_LOOKAHEAD){fill_window(s);if(s.lookahead<MIN_LOOKAHEAD&&flush===Z_NO_FLUSH){return BS_NEED_MORE;}if(s.lookahead===0){break;}/* flush the current block */}/* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */hash_head=0/*NIL*/;if(s.lookahead>=MIN_MATCH$1){/*** INSERT_STRING(s, s.strstart, hash_head); ***/s.ins_h=HASH(s,s.ins_h,s.window[s.strstart+MIN_MATCH$1-1]);hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart;/***/}/* Find the longest match, discarding those <= prev_length.
     */s.prev_length=s.match_length;s.prev_match=s.match_start;s.match_length=MIN_MATCH$1-1;if(hash_head!==0/*NIL*/&&s.prev_length<s.max_lazy_match&&s.strstart-hash_head<=s.w_size-MIN_LOOKAHEAD/*MAX_DIST(s)*/){/* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */s.match_length=longest_match(s,hash_head);/* longest_match() sets match_start */if(s.match_length<=5&&(s.strategy===Z_FILTERED||s.match_length===MIN_MATCH$1&&s.strstart-s.match_start>4096/*TOO_FAR*/)){/* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */s.match_length=MIN_MATCH$1-1;}}/* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */if(s.prev_length>=MIN_MATCH$1&&s.match_length<=s.prev_length){max_insert=s.strstart+s.lookahead-MIN_MATCH$1;/* Do not insert strings in hash table beyond this. */ //check_match(s, s.strstart-1, s.prev_match, s.prev_length);
/***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/bflush=_tr_tally$1(s,s.strstart-1-s.prev_match,s.prev_length-MIN_MATCH$1);/* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */s.lookahead-=s.prev_length-1;s.prev_length-=2;do{if(++s.strstart<=max_insert){/*** INSERT_STRING(s, s.strstart, hash_head); ***/s.ins_h=HASH(s,s.ins_h,s.window[s.strstart+MIN_MATCH$1-1]);hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart;/***/}}while(--s.prev_length!==0);s.match_available=0;s.match_length=MIN_MATCH$1-1;s.strstart++;if(bflush){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}else if(s.match_available){/* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */ //Tracevv((stderr,"%c", s->window[s->strstart-1]));
/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/bflush=_tr_tally$1(s,0,s.window[s.strstart-1]);if(bflush){/*** FLUSH_BLOCK_ONLY(s, 0) ***/flush_block_only(s,false);/***/}s.strstart++;s.lookahead--;if(s.strm.avail_out===0){return BS_NEED_MORE;}}else {/* There is no previous match to compare with, wait for
       * the next step to decide.
       */s.match_available=1;s.strstart++;s.lookahead--;}}//Assert (flush != Z_NO_FLUSH, "no flush?");
if(s.match_available){//Tracevv((stderr,"%c", s->window[s->strstart-1]));
/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/bflush=_tr_tally$1(s,0,s.window[s.strstart-1]);s.match_available=0;}s.insert=s.strstart<MIN_MATCH$1-1?s.strstart:MIN_MATCH$1-1;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.last_lit){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_BLOCK_DONE;};/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */const deflate_rle=(s,flush)=>{let bflush;/* set if current block must be flushed */let prev;/* byte at distance one to match */let scan,strend;/* scan goes up to strend for length of run */const _win=s.window;for(;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */if(s.lookahead<=MAX_MATCH$1){fill_window(s);if(s.lookahead<=MAX_MATCH$1&&flush===Z_NO_FLUSH){return BS_NEED_MORE;}if(s.lookahead===0){break;}/* flush the current block */}/* See how many times the previous byte repeats */s.match_length=0;if(s.lookahead>=MIN_MATCH$1&&s.strstart>0){scan=s.strstart-1;prev=_win[scan];if(prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]){strend=s.strstart+MAX_MATCH$1;do{/*jshint noempty:false*/}while(prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&scan<strend);s.match_length=MAX_MATCH$1-(strend-scan);if(s.match_length>s.lookahead){s.match_length=s.lookahead;}}//Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
}/* Emit match if have run of MIN_MATCH or longer, else emit literal */if(s.match_length>=MIN_MATCH$1){//check_match(s, s.strstart, s.strstart - 1, s.match_length);
/*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/bflush=_tr_tally$1(s,1,s.match_length-MIN_MATCH$1);s.lookahead-=s.match_length;s.strstart+=s.match_length;s.match_length=0;}else {/* No match, output a literal byte */ //Tracevv((stderr,"%c", s->window[s->strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/bflush=_tr_tally$1(s,0,s.window[s.strstart]);s.lookahead--;s.strstart++;}if(bflush){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}s.insert=0;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.last_lit){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_BLOCK_DONE;};/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */const deflate_huff=(s,flush)=>{let bflush;/* set if current block must be flushed */for(;;){/* Make sure that we have a literal to write. */if(s.lookahead===0){fill_window(s);if(s.lookahead===0){if(flush===Z_NO_FLUSH){return BS_NEED_MORE;}break;/* flush the current block */}}/* Output a literal byte */s.match_length=0;//Tracevv((stderr,"%c", s->window[s->strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/bflush=_tr_tally$1(s,0,s.window[s.strstart]);s.lookahead--;s.strstart++;if(bflush){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}}s.insert=0;if(flush===Z_FINISH){/*** FLUSH_BLOCK(s, 1); ***/flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED;}/***/return BS_FINISH_DONE;}if(s.last_lit){/*** FLUSH_BLOCK(s, 0); ***/flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE;}/***/}return BS_BLOCK_DONE;};/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */function Config(good_length,max_lazy,nice_length,max_chain,func){this.good_length=good_length;this.max_lazy=max_lazy;this.nice_length=nice_length;this.max_chain=max_chain;this.func=func;}const configuration_table=[/*      good lazy nice chain */new Config(0,0,0,0,deflate_stored),/* 0 store only */new Config(4,4,8,4,deflate_fast),/* 1 max speed, no lazy matches */new Config(4,5,16,8,deflate_fast),/* 2 */new Config(4,6,32,32,deflate_fast),/* 3 */new Config(4,4,16,16,deflate_slow),/* 4 lazy matches */new Config(8,16,32,32,deflate_slow),/* 5 */new Config(8,16,128,128,deflate_slow),/* 6 */new Config(8,32,128,256,deflate_slow),/* 7 */new Config(32,128,258,1024,deflate_slow),/* 8 */new Config(32,258,258,4096,deflate_slow)/* 9 max compression */];/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */const lm_init=s=>{s.window_size=2*s.w_size;/*** CLEAR_HASH(s); ***/zero$1(s.head);// Fill with NIL (= 0);
/* Set the default configuration parameters:
   */s.max_lazy_match=configuration_table[s.level].max_lazy;s.good_match=configuration_table[s.level].good_length;s.nice_match=configuration_table[s.level].nice_length;s.max_chain_length=configuration_table[s.level].max_chain;s.strstart=0;s.block_start=0;s.lookahead=0;s.insert=0;s.match_length=s.prev_length=MIN_MATCH$1-1;s.match_available=0;s.ins_h=0;};function DeflateState(){this.strm=null;/* pointer back to this zlib stream */this.status=0;/* as the name implies */this.pending_buf=null;/* output still pending */this.pending_buf_size=0;/* size of pending_buf */this.pending_out=0;/* next pending byte to output to the stream */this.pending=0;/* nb of bytes in the pending buffer */this.wrap=0;/* bit 0 true for zlib, bit 1 true for gzip */this.gzhead=null;/* gzip header information to write */this.gzindex=0;/* where in extra, name, or comment */this.method=Z_DEFLATED;/* can only be DEFLATED */this.last_flush=-1;/* value of flush param for previous deflate call */this.w_size=0;/* LZ77 window size (32K by default) */this.w_bits=0;/* log2(w_size)  (8..16) */this.w_mask=0;/* w_size - 1 */this.window=null;/* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */this.window_size=0;/* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */this.prev=null;/* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */this.head=null;/* Heads of the hash chains or NIL. */this.ins_h=0;/* hash index of string to be inserted */this.hash_size=0;/* number of elements in hash table */this.hash_bits=0;/* log2(hash_size) */this.hash_mask=0;/* hash_size-1 */this.hash_shift=0;/* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */this.block_start=0;/* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */this.match_length=0;/* length of best match */this.prev_match=0;/* previous match */this.match_available=0;/* set if previous match exists */this.strstart=0;/* start of string to insert */this.match_start=0;/* start of matching string */this.lookahead=0;/* number of valid bytes ahead in window */this.prev_length=0;/* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */this.max_chain_length=0;/* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */this.max_lazy_match=0;/* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */ // That's alias to max_lazy_match, don't use directly
//this.max_insert_length = 0;
/* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */this.level=0;/* compression level (1..9) */this.strategy=0;/* favor or force Huffman coding*/this.good_match=0;/* Use a faster search when the previous match is longer than this */this.nice_match=0;/* Stop searching when current match exceeds this */ /* used by trees.c: */ /* Didn't use ct_data typedef below to suppress compiler warning */ // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
// struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
// struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
// Use flat array of DOUBLE size, with interleaved fata,
// because JS does not support effective
this.dyn_ltree=new Uint16Array(HEAP_SIZE$1*2);this.dyn_dtree=new Uint16Array((2*D_CODES$1+1)*2);this.bl_tree=new Uint16Array((2*BL_CODES$1+1)*2);zero$1(this.dyn_ltree);zero$1(this.dyn_dtree);zero$1(this.bl_tree);this.l_desc=null;/* desc. for literal tree */this.d_desc=null;/* desc. for distance tree */this.bl_desc=null;/* desc. for bit length tree */ //ush bl_count[MAX_BITS+1];
this.bl_count=new Uint16Array(MAX_BITS$1+1);/* number of codes at each bit length for an optimal tree */ //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
this.heap=new Uint16Array(2*L_CODES$1+1);/* heap used to build the Huffman trees */zero$1(this.heap);this.heap_len=0;/* number of elements in the heap */this.heap_max=0;/* element of largest frequency */ /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */this.depth=new Uint16Array(2*L_CODES$1+1);//uch depth[2*L_CODES+1];
zero$1(this.depth);/* Depth of each subtree used as tie breaker for trees of equal frequency
   */this.l_buf=0;/* buffer index for literals or lengths */this.lit_bufsize=0;/* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */this.last_lit=0;/* running index in l_buf */this.d_buf=0;/* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */this.opt_len=0;/* bit length of current block with optimal trees */this.static_len=0;/* bit length of current block with static trees */this.matches=0;/* number of string matches in current block */this.insert=0;/* bytes at end of window left to insert */this.bi_buf=0;/* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */this.bi_valid=0;/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */ // Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */}const deflateResetKeep=strm=>{if(!strm||!strm.state){return err(strm,Z_STREAM_ERROR);}strm.total_in=strm.total_out=0;strm.data_type=Z_UNKNOWN$1;const s=strm.state;s.pending=0;s.pending_out=0;if(s.wrap<0){s.wrap=-s.wrap;/* was made negative by deflate(..., Z_FINISH); */}s.status=s.wrap?INIT_STATE:BUSY_STATE;strm.adler=s.wrap===2?0// crc32(0, Z_NULL, 0)
:1;// adler32(0, Z_NULL, 0)
s.last_flush=Z_NO_FLUSH;_tr_init$1(s);return Z_OK;};const deflateReset=strm=>{const ret=deflateResetKeep(strm);if(ret===Z_OK){lm_init(strm.state);}return ret;};const deflateSetHeader=(strm,head)=>{if(!strm||!strm.state){return Z_STREAM_ERROR;}if(strm.state.wrap!==2){return Z_STREAM_ERROR;}strm.state.gzhead=head;return Z_OK;};const deflateInit2=(strm,level,method,windowBits,memLevel,strategy)=>{if(!strm){// === Z_NULL
return Z_STREAM_ERROR;}let wrap=1;if(level===Z_DEFAULT_COMPRESSION){level=6;}if(windowBits<0){/* suppress zlib wrapper */wrap=0;windowBits=-windowBits;}else if(windowBits>15){wrap=2;/* write gzip wrapper instead */windowBits-=16;}if(memLevel<1||memLevel>MAX_MEM_LEVEL||method!==Z_DEFLATED||windowBits<8||windowBits>15||level<0||level>9||strategy<0||strategy>Z_FIXED$1){return err(strm,Z_STREAM_ERROR);}if(windowBits===8){windowBits=9;}/* until 256-byte window bug fixed */const s=new DeflateState();strm.state=s;s.strm=strm;s.wrap=wrap;s.gzhead=null;s.w_bits=windowBits;s.w_size=1<<s.w_bits;s.w_mask=s.w_size-1;s.hash_bits=memLevel+7;s.hash_size=1<<s.hash_bits;s.hash_mask=s.hash_size-1;s.hash_shift=~~((s.hash_bits+MIN_MATCH$1-1)/MIN_MATCH$1);s.window=new Uint8Array(s.w_size*2);s.head=new Uint16Array(s.hash_size);s.prev=new Uint16Array(s.w_size);// Don't need mem init magic for JS.
//s.high_water = 0;  /* nothing written to s->window yet */
s.lit_bufsize=1<<memLevel+6;/* 16K elements by default */s.pending_buf_size=s.lit_bufsize*4;//overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
//s->pending_buf = (uchf *) overlay;
s.pending_buf=new Uint8Array(s.pending_buf_size);// It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
//s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
s.d_buf=1*s.lit_bufsize;//s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
s.l_buf=(1+2)*s.lit_bufsize;s.level=level;s.strategy=strategy;s.method=method;return deflateReset(strm);};const deflateInit=(strm,level)=>{return deflateInit2(strm,level,Z_DEFLATED,MAX_WBITS,DEF_MEM_LEVEL,Z_DEFAULT_STRATEGY);};const deflate=(strm,flush)=>{let beg,val;// for gzip header write only
if(!strm||!strm.state||flush>Z_BLOCK||flush<0){return strm?err(strm,Z_STREAM_ERROR):Z_STREAM_ERROR;}const s=strm.state;if(!strm.output||!strm.input&&strm.avail_in!==0||s.status===FINISH_STATE&&flush!==Z_FINISH){return err(strm,strm.avail_out===0?Z_BUF_ERROR:Z_STREAM_ERROR);}s.strm=strm;/* just in case */const old_flush=s.last_flush;s.last_flush=flush;/* Write the header */if(s.status===INIT_STATE){if(s.wrap===2){// GZIP header
strm.adler=0;//crc32(0L, Z_NULL, 0);
put_byte(s,31);put_byte(s,139);put_byte(s,8);if(!s.gzhead){// s->gzhead == Z_NULL
put_byte(s,0);put_byte(s,0);put_byte(s,0);put_byte(s,0);put_byte(s,0);put_byte(s,s.level===9?2:s.strategy>=Z_HUFFMAN_ONLY||s.level<2?4:0);put_byte(s,OS_CODE);s.status=BUSY_STATE;}else {put_byte(s,(s.gzhead.text?1:0)+(s.gzhead.hcrc?2:0)+(!s.gzhead.extra?0:4)+(!s.gzhead.name?0:8)+(!s.gzhead.comment?0:16));put_byte(s,s.gzhead.time&0xff);put_byte(s,s.gzhead.time>>8&0xff);put_byte(s,s.gzhead.time>>16&0xff);put_byte(s,s.gzhead.time>>24&0xff);put_byte(s,s.level===9?2:s.strategy>=Z_HUFFMAN_ONLY||s.level<2?4:0);put_byte(s,s.gzhead.os&0xff);if(s.gzhead.extra&&s.gzhead.extra.length){put_byte(s,s.gzhead.extra.length&0xff);put_byte(s,s.gzhead.extra.length>>8&0xff);}if(s.gzhead.hcrc){strm.adler=crc32_1(strm.adler,s.pending_buf,s.pending,0);}s.gzindex=0;s.status=EXTRA_STATE;}}else// DEFLATE header
{let header=Z_DEFLATED+(s.w_bits-8<<4)<<8;let level_flags=-1;if(s.strategy>=Z_HUFFMAN_ONLY||s.level<2){level_flags=0;}else if(s.level<6){level_flags=1;}else if(s.level===6){level_flags=2;}else {level_flags=3;}header|=level_flags<<6;if(s.strstart!==0){header|=PRESET_DICT;}header+=31-header%31;s.status=BUSY_STATE;putShortMSB(s,header);/* Save the adler32 of the preset dictionary: */if(s.strstart!==0){putShortMSB(s,strm.adler>>>16);putShortMSB(s,strm.adler&0xffff);}strm.adler=1;// adler32(0L, Z_NULL, 0);
}}//#ifdef GZIP
if(s.status===EXTRA_STATE){if(s.gzhead.extra/* != Z_NULL*/){beg=s.pending;/* start of bytes to update crc */while(s.gzindex<(s.gzhead.extra.length&0xffff)){if(s.pending===s.pending_buf_size){if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32_1(strm.adler,s.pending_buf,s.pending-beg,beg);}flush_pending(strm);beg=s.pending;if(s.pending===s.pending_buf_size){break;}}put_byte(s,s.gzhead.extra[s.gzindex]&0xff);s.gzindex++;}if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32_1(strm.adler,s.pending_buf,s.pending-beg,beg);}if(s.gzindex===s.gzhead.extra.length){s.gzindex=0;s.status=NAME_STATE;}}else {s.status=NAME_STATE;}}if(s.status===NAME_STATE){if(s.gzhead.name/* != Z_NULL*/){beg=s.pending;/* start of bytes to update crc */ //int val;
do{if(s.pending===s.pending_buf_size){if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32_1(strm.adler,s.pending_buf,s.pending-beg,beg);}flush_pending(strm);beg=s.pending;if(s.pending===s.pending_buf_size){val=1;break;}}// JS specific: little magic to add zero terminator to end of string
if(s.gzindex<s.gzhead.name.length){val=s.gzhead.name.charCodeAt(s.gzindex++)&0xff;}else {val=0;}put_byte(s,val);}while(val!==0);if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32_1(strm.adler,s.pending_buf,s.pending-beg,beg);}if(val===0){s.gzindex=0;s.status=COMMENT_STATE;}}else {s.status=COMMENT_STATE;}}if(s.status===COMMENT_STATE){if(s.gzhead.comment/* != Z_NULL*/){beg=s.pending;/* start of bytes to update crc */ //int val;
do{if(s.pending===s.pending_buf_size){if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32_1(strm.adler,s.pending_buf,s.pending-beg,beg);}flush_pending(strm);beg=s.pending;if(s.pending===s.pending_buf_size){val=1;break;}}// JS specific: little magic to add zero terminator to end of string
if(s.gzindex<s.gzhead.comment.length){val=s.gzhead.comment.charCodeAt(s.gzindex++)&0xff;}else {val=0;}put_byte(s,val);}while(val!==0);if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32_1(strm.adler,s.pending_buf,s.pending-beg,beg);}if(val===0){s.status=HCRC_STATE;}}else {s.status=HCRC_STATE;}}if(s.status===HCRC_STATE){if(s.gzhead.hcrc){if(s.pending+2>s.pending_buf_size){flush_pending(strm);}if(s.pending+2<=s.pending_buf_size){put_byte(s,strm.adler&0xff);put_byte(s,strm.adler>>8&0xff);strm.adler=0;//crc32(0L, Z_NULL, 0);
s.status=BUSY_STATE;}}else {s.status=BUSY_STATE;}}//#endif
/* Flush as much pending output as possible */if(s.pending!==0){flush_pending(strm);if(strm.avail_out===0){/* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */s.last_flush=-1;return Z_OK;}/* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */}else if(strm.avail_in===0&&rank(flush)<=rank(old_flush)&&flush!==Z_FINISH){return err(strm,Z_BUF_ERROR);}/* User must not provide more input after the first FINISH: */if(s.status===FINISH_STATE&&strm.avail_in!==0){return err(strm,Z_BUF_ERROR);}/* Start a new block or continue the current one.
   */if(strm.avail_in!==0||s.lookahead!==0||flush!==Z_NO_FLUSH&&s.status!==FINISH_STATE){let bstate=s.strategy===Z_HUFFMAN_ONLY?deflate_huff(s,flush):s.strategy===Z_RLE?deflate_rle(s,flush):configuration_table[s.level].func(s,flush);if(bstate===BS_FINISH_STARTED||bstate===BS_FINISH_DONE){s.status=FINISH_STATE;}if(bstate===BS_NEED_MORE||bstate===BS_FINISH_STARTED){if(strm.avail_out===0){s.last_flush=-1;/* avoid BUF_ERROR next call, see above */}return Z_OK;/* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */}if(bstate===BS_BLOCK_DONE){if(flush===Z_PARTIAL_FLUSH){_tr_align$1(s);}else if(flush!==Z_BLOCK){/* FULL_FLUSH or SYNC_FLUSH */_tr_stored_block$1(s,0,0,false);/* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */if(flush===Z_FULL_FLUSH){/*** CLEAR_HASH(s); ***/ /* forget history */zero$1(s.head);// Fill with NIL (= 0);
if(s.lookahead===0){s.strstart=0;s.block_start=0;s.insert=0;}}}flush_pending(strm);if(strm.avail_out===0){s.last_flush=-1;/* avoid BUF_ERROR at next call, see above */return Z_OK;}}}//Assert(strm->avail_out > 0, "bug2");
//if (strm.avail_out <= 0) { throw new Error("bug2");}
if(flush!==Z_FINISH){return Z_OK;}if(s.wrap<=0){return Z_STREAM_END;}/* Write the trailer */if(s.wrap===2){put_byte(s,strm.adler&0xff);put_byte(s,strm.adler>>8&0xff);put_byte(s,strm.adler>>16&0xff);put_byte(s,strm.adler>>24&0xff);put_byte(s,strm.total_in&0xff);put_byte(s,strm.total_in>>8&0xff);put_byte(s,strm.total_in>>16&0xff);put_byte(s,strm.total_in>>24&0xff);}else {putShortMSB(s,strm.adler>>>16);putShortMSB(s,strm.adler&0xffff);}flush_pending(strm);/* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */if(s.wrap>0){s.wrap=-s.wrap;}/* write the trailer only once! */return s.pending!==0?Z_OK:Z_STREAM_END;};const deflateEnd=strm=>{if(!strm/*== Z_NULL*/||!strm.state/*== Z_NULL*/){return Z_STREAM_ERROR;}const status=strm.state.status;if(status!==INIT_STATE&&status!==EXTRA_STATE&&status!==NAME_STATE&&status!==COMMENT_STATE&&status!==HCRC_STATE&&status!==BUSY_STATE&&status!==FINISH_STATE){return err(strm,Z_STREAM_ERROR);}strm.state=null;return status===BUSY_STATE?err(strm,Z_DATA_ERROR):Z_OK;};/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */const deflateSetDictionary=(strm,dictionary)=>{let dictLength=dictionary.length;if(!strm/*== Z_NULL*/||!strm.state/*== Z_NULL*/){return Z_STREAM_ERROR;}const s=strm.state;const wrap=s.wrap;if(wrap===2||wrap===1&&s.status!==INIT_STATE||s.lookahead){return Z_STREAM_ERROR;}/* when using zlib wrappers, compute Adler-32 for provided dictionary */if(wrap===1){/* adler32(strm->adler, dictionary, dictLength); */strm.adler=adler32_1(strm.adler,dictionary,dictLength,0);}s.wrap=0;/* avoid computing Adler-32 in read_buf */ /* if dictionary would fill window, just replace the history */if(dictLength>=s.w_size){if(wrap===0){/* already empty otherwise */ /*** CLEAR_HASH(s); ***/zero$1(s.head);// Fill with NIL (= 0);
s.strstart=0;s.block_start=0;s.insert=0;}/* use the tail */ // dictionary = dictionary.slice(dictLength - s.w_size);
let tmpDict=new Uint8Array(s.w_size);tmpDict.set(dictionary.subarray(dictLength-s.w_size,dictLength),0);dictionary=tmpDict;dictLength=s.w_size;}/* insert dictionary into window and hash */const avail=strm.avail_in;const next=strm.next_in;const input=strm.input;strm.avail_in=dictLength;strm.next_in=0;strm.input=dictionary;fill_window(s);while(s.lookahead>=MIN_MATCH$1){let str=s.strstart;let n=s.lookahead-(MIN_MATCH$1-1);do{/* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */s.ins_h=HASH(s,s.ins_h,s.window[str+MIN_MATCH$1-1]);s.prev[str&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=str;str++;}while(--n);s.strstart=str;s.lookahead=MIN_MATCH$1-1;fill_window(s);}s.strstart+=s.lookahead;s.block_start=s.strstart;s.insert=s.lookahead;s.lookahead=0;s.match_length=s.prev_length=MIN_MATCH$1-1;s.match_available=0;strm.next_in=next;strm.input=input;strm.avail_in=avail;s.wrap=wrap;return Z_OK;};var deflateInit_1=deflateInit;var deflateInit2_1=deflateInit2;var deflateReset_1=deflateReset;var deflateResetKeep_1=deflateResetKeep;var deflateSetHeader_1=deflateSetHeader;var deflate_2=deflate;var deflateEnd_1=deflateEnd;var deflateSetDictionary_1=deflateSetDictionary;var deflateInfo='pako deflate (from Nodeca project)';/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/var deflate_1={deflateInit:deflateInit_1,deflateInit2:deflateInit2_1,deflateReset:deflateReset_1,deflateResetKeep:deflateResetKeep_1,deflateSetHeader:deflateSetHeader_1,deflate:deflate_2,deflateEnd:deflateEnd_1,deflateSetDictionary:deflateSetDictionary_1,deflateInfo:deflateInfo};const _has=(obj,key)=>{return Object.prototype.hasOwnProperty.call(obj,key);};var assign=function(obj/*from1, from2, from3, ...*/){const sources=Array.prototype.slice.call(arguments,1);while(sources.length){const source=sources.shift();if(!source){continue;}if(typeof source!=='object'){throw new TypeError(source+'must be non-object');}for(const p in source){if(_has(source,p)){obj[p]=source[p];}}}return obj;};// Join array of chunks to single array.
var flattenChunks=chunks=>{// calculate data length
let len=0;for(let i=0,l=chunks.length;i<l;i++){len+=chunks[i].length;}// join chunks
const result=new Uint8Array(len);for(let i=0,pos=0,l=chunks.length;i<l;i++){let chunk=chunks[i];result.set(chunk,pos);pos+=chunk.length;}return result;};var common={assign:assign,flattenChunks:flattenChunks};// String encode/decode helpers
// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK=true;try{String.fromCharCode.apply(null,new Uint8Array(1));}catch(__){STR_APPLY_UIA_OK=false;}// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len=new Uint8Array(256);for(let q=0;q<256;q++){_utf8len[q]=q>=252?6:q>=248?5:q>=240?4:q>=224?3:q>=192?2:1;}_utf8len[254]=_utf8len[254]=1;// Invalid sequence start
// convert string to array (typed, when possible)
var string2buf=str=>{let buf,c,c2,m_pos,i,str_len=str.length,buf_len=0;// count binary size
for(m_pos=0;m_pos<str_len;m_pos++){c=str.charCodeAt(m_pos);if((c&0xfc00)===0xd800&&m_pos+1<str_len){c2=str.charCodeAt(m_pos+1);if((c2&0xfc00)===0xdc00){c=0x10000+(c-0xd800<<10)+(c2-0xdc00);m_pos++;}}buf_len+=c<0x80?1:c<0x800?2:c<0x10000?3:4;}// allocate buffer
buf=new Uint8Array(buf_len);// convert
for(i=0,m_pos=0;i<buf_len;m_pos++){c=str.charCodeAt(m_pos);if((c&0xfc00)===0xd800&&m_pos+1<str_len){c2=str.charCodeAt(m_pos+1);if((c2&0xfc00)===0xdc00){c=0x10000+(c-0xd800<<10)+(c2-0xdc00);m_pos++;}}if(c<0x80){/* one byte */buf[i++]=c;}else if(c<0x800){/* two bytes */buf[i++]=0xC0|c>>>6;buf[i++]=0x80|c&0x3f;}else if(c<0x10000){/* three bytes */buf[i++]=0xE0|c>>>12;buf[i++]=0x80|c>>>6&0x3f;buf[i++]=0x80|c&0x3f;}else {/* four bytes */buf[i++]=0xf0|c>>>18;buf[i++]=0x80|c>>>12&0x3f;buf[i++]=0x80|c>>>6&0x3f;buf[i++]=0x80|c&0x3f;}}return buf;};// Helper
const buf2binstring=(buf,len)=>{// On Chrome, the arguments in a function call that are allowed is `65534`.
// If the length of the buffer is smaller than that, we can use this optimization,
// otherwise we will take a slower path.
if(len<65534){if(buf.subarray&&STR_APPLY_UIA_OK){return String.fromCharCode.apply(null,buf.length===len?buf:buf.subarray(0,len));}}let result='';for(let i=0;i<len;i++){result+=String.fromCharCode(buf[i]);}return result;};// convert array to string
var buf2string=(buf,max)=>{let i,out;const len=max||buf.length;// Reserve max possible length (2 words per char)
// NB: by unknown reasons, Array is significantly faster for
//     String.fromCharCode.apply than Uint16Array.
const utf16buf=new Array(len*2);for(out=0,i=0;i<len;){let c=buf[i++];// quick process ascii
if(c<0x80){utf16buf[out++]=c;continue;}let c_len=_utf8len[c];// skip 5 & 6 byte codes
if(c_len>4){utf16buf[out++]=0xfffd;i+=c_len-1;continue;}// apply mask on first byte
c&=c_len===2?0x1f:c_len===3?0x0f:0x07;// join the rest
while(c_len>1&&i<len){c=c<<6|buf[i++]&0x3f;c_len--;}// terminated by end of string?
if(c_len>1){utf16buf[out++]=0xfffd;continue;}if(c<0x10000){utf16buf[out++]=c;}else {c-=0x10000;utf16buf[out++]=0xd800|c>>10&0x3ff;utf16buf[out++]=0xdc00|c&0x3ff;}}return buf2binstring(utf16buf,out);};// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border=(buf,max)=>{max=max||buf.length;if(max>buf.length){max=buf.length;}// go back from last position, until start of sequence found
let pos=max-1;while(pos>=0&&(buf[pos]&0xC0)===0x80){pos--;}// Very small and broken sequence,
// return max, because we should return something anyway.
if(pos<0){return max;}// If we came to start of buffer - that means buffer is too small,
// return max too.
if(pos===0){return max;}return pos+_utf8len[buf[pos]]>max?pos:max;};var strings={string2buf:string2buf,buf2string:buf2string,utf8border:utf8border};// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function ZStream(){/* next input byte */this.input=null;// JS specific, because we have no pointers
this.next_in=0;/* number of bytes available at input */this.avail_in=0;/* total number of input bytes read so far */this.total_in=0;/* next output byte should be put there */this.output=null;// JS specific, because we have no pointers
this.next_out=0;/* remaining free space at output */this.avail_out=0;/* total number of bytes output so far */this.total_out=0;/* last error message, NULL if no error */this.msg=''/*Z_NULL*/;/* not visible by applications */this.state=null;/* best guess about the data type: binary or text */this.data_type=2/*Z_UNKNOWN*/;/* adler32 value of the uncompressed data */this.adler=0;}var zstream=ZStream;const toString=Object.prototype.toString;/* Public constants ==========================================================*/ /* ===========================================================================*/const{Z_NO_FLUSH:Z_NO_FLUSH$1,Z_SYNC_FLUSH,Z_FULL_FLUSH:Z_FULL_FLUSH$1,Z_FINISH:Z_FINISH$1,Z_OK:Z_OK$1,Z_STREAM_END:Z_STREAM_END$1,Z_DEFAULT_COMPRESSION:Z_DEFAULT_COMPRESSION$1,Z_DEFAULT_STRATEGY:Z_DEFAULT_STRATEGY$1,Z_DEFLATED:Z_DEFLATED$1}=constants;/* ===========================================================================*/ /**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/ /* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/ /**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/ /**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/ /**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/function Deflate(options){this.options=common.assign({level:Z_DEFAULT_COMPRESSION$1,method:Z_DEFLATED$1,chunkSize:16384,windowBits:15,memLevel:8,strategy:Z_DEFAULT_STRATEGY$1},options||{});let opt=this.options;if(opt.raw&&opt.windowBits>0){opt.windowBits=-opt.windowBits;}else if(opt.gzip&&opt.windowBits>0&&opt.windowBits<16){opt.windowBits+=16;}this.err=0;// error code, if happens (0 = Z_OK)
this.msg='';// error message
this.ended=false;// used to avoid multiple onEnd() calls
this.chunks=[];// chunks of compressed data
this.strm=new zstream();this.strm.avail_out=0;let status=deflate_1.deflateInit2(this.strm,opt.level,opt.method,opt.windowBits,opt.memLevel,opt.strategy);if(status!==Z_OK$1){throw new Error(messages[status]);}if(opt.header){deflate_1.deflateSetHeader(this.strm,opt.header);}if(opt.dictionary){let dict;// Convert data if needed
if(typeof opt.dictionary==='string'){// If we need to compress text, change encoding to utf8.
dict=strings.string2buf(opt.dictionary);}else if(toString.call(opt.dictionary)==='[object ArrayBuffer]'){dict=new Uint8Array(opt.dictionary);}else {dict=opt.dictionary;}status=deflate_1.deflateSetDictionary(this.strm,dict);if(status!==Z_OK$1){throw new Error(messages[status]);}this._dict_set=true;}}/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/Deflate.prototype.push=function(data,flush_mode){const strm=this.strm;const chunkSize=this.options.chunkSize;let status,_flush_mode;if(this.ended){return false;}if(flush_mode===~~flush_mode)_flush_mode=flush_mode;else _flush_mode=flush_mode===true?Z_FINISH$1:Z_NO_FLUSH$1;// Convert data if needed
if(typeof data==='string'){// If we need to compress text, change encoding to utf8.
strm.input=strings.string2buf(data);}else if(toString.call(data)==='[object ArrayBuffer]'){strm.input=new Uint8Array(data);}else {strm.input=data;}strm.next_in=0;strm.avail_in=strm.input.length;for(;;){if(strm.avail_out===0){strm.output=new Uint8Array(chunkSize);strm.next_out=0;strm.avail_out=chunkSize;}// Make sure avail_out > 6 to avoid repeating markers
if((_flush_mode===Z_SYNC_FLUSH||_flush_mode===Z_FULL_FLUSH$1)&&strm.avail_out<=6){this.onData(strm.output.subarray(0,strm.next_out));strm.avail_out=0;continue;}status=deflate_1.deflate(strm,_flush_mode);// Ended => flush and finish
if(status===Z_STREAM_END$1){if(strm.next_out>0){this.onData(strm.output.subarray(0,strm.next_out));}status=deflate_1.deflateEnd(this.strm);this.onEnd(status);this.ended=true;return status===Z_OK$1;}// Flush if out buffer full
if(strm.avail_out===0){this.onData(strm.output);continue;}// Flush if requested and has data
if(_flush_mode>0&&strm.next_out>0){this.onData(strm.output.subarray(0,strm.next_out));strm.avail_out=0;continue;}if(strm.avail_in===0)break;}return true;};/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/Deflate.prototype.onData=function(chunk){this.chunks.push(chunk);};/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/Deflate.prototype.onEnd=function(status){// On success - join
if(status===Z_OK$1){this.result=common.flattenChunks(this.chunks);}this.chunks=[];this.err=status;this.msg=this.strm.msg;};/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/function deflate$1(input,options){const deflator=new Deflate(options);deflator.push(input,true);// That will never happens, if you don't cheat with options :)
if(deflator.err){throw deflator.msg||messages[deflator.err];}return deflator.result;}/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/function deflateRaw(input,options){options=options||{};options.raw=true;return deflate$1(input,options);}/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/function gzip(input,options){options=options||{};options.gzip=true;return deflate$1(input,options);}var Deflate_1=Deflate;var deflate_2$1=deflate$1;var deflateRaw_1=deflateRaw;var gzip_1=gzip;var constants$1=constants;var deflate_1$1={Deflate:Deflate_1,deflate:deflate_2$1,deflateRaw:deflateRaw_1,gzip:gzip_1,constants:constants$1};// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// See state defs from inflate.js
const BAD=30;/* got a data error -- remain here until reset */const TYPE=12;/* i: waiting for type bits, including last-flag bit */ /*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */var inffast=function inflate_fast(strm,start){let _in;/* local strm.input */let last;/* have enough input while in < last */let _out;/* local strm.output */let beg;/* inflate()'s initial strm.output */let end;/* while out < end, enough space available */ //#ifdef INFLATE_STRICT
let dmax;/* maximum distance from zlib header */ //#endif
let wsize;/* window size or zero if not using window */let whave;/* valid bytes in the window */let wnext;/* window write index */ // Use `s_window` instead `window`, avoid conflict with instrumentation tools
let s_window;/* allocated sliding window, if wsize != 0 */let hold;/* local strm.hold */let bits;/* local strm.bits */let lcode;/* local strm.lencode */let dcode;/* local strm.distcode */let lmask;/* mask for first level of length codes */let dmask;/* mask for first level of distance codes */let here;/* retrieved table entry */let op;/* code bits, operation, extra bits, or */ /*  window position, window bytes to copy */let len;/* match length, unused bytes */let dist;/* match distance */let from;/* where to copy match from */let from_source;let input,output;// JS specific, because we have no pointers
/* copy state to local variables */const state=strm.state;//here = state.here;
_in=strm.next_in;input=strm.input;last=_in+(strm.avail_in-5);_out=strm.next_out;output=strm.output;beg=_out-(start-strm.avail_out);end=_out+(strm.avail_out-257);//#ifdef INFLATE_STRICT
dmax=state.dmax;//#endif
wsize=state.wsize;whave=state.whave;wnext=state.wnext;s_window=state.window;hold=state.hold;bits=state.bits;lcode=state.lencode;dcode=state.distcode;lmask=(1<<state.lenbits)-1;dmask=(1<<state.distbits)-1;/* decode literals and length/distances until end-of-block or not enough
     input data or output space */top:do{if(bits<15){hold+=input[_in++]<<bits;bits+=8;hold+=input[_in++]<<bits;bits+=8;}here=lcode[hold&lmask];dolen:for(;;){// Goto emulation
op=here>>>24/*here.bits*/;hold>>>=op;bits-=op;op=here>>>16&0xff/*here.op*/;if(op===0){/* literal */ //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
//        "inflate:         literal '%c'\n" :
//        "inflate:         literal 0x%02x\n", here.val));
output[_out++]=here&0xffff/*here.val*/;}else if(op&16){/* length base */len=here&0xffff/*here.val*/;op&=15;/* number of extra bits */if(op){if(bits<op){hold+=input[_in++]<<bits;bits+=8;}len+=hold&(1<<op)-1;hold>>>=op;bits-=op;}//Tracevv((stderr, "inflate:         length %u\n", len));
if(bits<15){hold+=input[_in++]<<bits;bits+=8;hold+=input[_in++]<<bits;bits+=8;}here=dcode[hold&dmask];dodist:for(;;){// goto emulation
op=here>>>24/*here.bits*/;hold>>>=op;bits-=op;op=here>>>16&0xff/*here.op*/;if(op&16){/* distance base */dist=here&0xffff/*here.val*/;op&=15;/* number of extra bits */if(bits<op){hold+=input[_in++]<<bits;bits+=8;if(bits<op){hold+=input[_in++]<<bits;bits+=8;}}dist+=hold&(1<<op)-1;//#ifdef INFLATE_STRICT
if(dist>dmax){strm.msg='invalid distance too far back';state.mode=BAD;break top;}//#endif
hold>>>=op;bits-=op;//Tracevv((stderr, "inflate:         distance %u\n", dist));
op=_out-beg;/* max distance in output */if(dist>op){/* see if copy from window */op=dist-op;/* distance back in window */if(op>whave){if(state.sane){strm.msg='invalid distance too far back';state.mode=BAD;break top;}// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
}from=0;// window index
from_source=s_window;if(wnext===0){/* very common case */from+=wsize-op;if(op<len){/* some from window */len-=op;do{output[_out++]=s_window[from++];}while(--op);from=_out-dist;/* rest from output */from_source=output;}}else if(wnext<op){/* wrap around window */from+=wsize+wnext-op;op-=wnext;if(op<len){/* some from end of window */len-=op;do{output[_out++]=s_window[from++];}while(--op);from=0;if(wnext<len){/* some from start of window */op=wnext;len-=op;do{output[_out++]=s_window[from++];}while(--op);from=_out-dist;/* rest from output */from_source=output;}}}else {/* contiguous in window */from+=wnext-op;if(op<len){/* some from window */len-=op;do{output[_out++]=s_window[from++];}while(--op);from=_out-dist;/* rest from output */from_source=output;}}while(len>2){output[_out++]=from_source[from++];output[_out++]=from_source[from++];output[_out++]=from_source[from++];len-=3;}if(len){output[_out++]=from_source[from++];if(len>1){output[_out++]=from_source[from++];}}}else {from=_out-dist;/* copy direct from output */do{/* minimum length is three */output[_out++]=output[from++];output[_out++]=output[from++];output[_out++]=output[from++];len-=3;}while(len>2);if(len){output[_out++]=output[from++];if(len>1){output[_out++]=output[from++];}}}}else if((op&64)===0){/* 2nd level distance code */here=dcode[(here&0xffff)+(/*here.val*/hold&(1<<op)-1)];continue dodist;}else {strm.msg='invalid distance code';state.mode=BAD;break top;}break;// need to emulate goto via "continue"
}}else if((op&64)===0){/* 2nd level length code */here=lcode[(here&0xffff)+(/*here.val*/hold&(1<<op)-1)];continue dolen;}else if(op&32){/* end-of-block */ //Tracevv((stderr, "inflate:         end of block\n"));
state.mode=TYPE;break top;}else {strm.msg='invalid literal/length code';state.mode=BAD;break top;}break;// need to emulate goto via "continue"
}}while(_in<last&&_out<end);/* return unused bytes (on entry, bits < 8, so in won't go too far back) */len=bits>>3;_in-=len;bits-=len<<3;hold&=(1<<bits)-1;/* update state and return */strm.next_in=_in;strm.next_out=_out;strm.avail_in=_in<last?5+(last-_in):5-(_in-last);strm.avail_out=_out<end?257+(end-_out):257-(_out-end);state.hold=hold;state.bits=bits;return;};// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const MAXBITS=15;const ENOUGH_LENS=852;const ENOUGH_DISTS=592;//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
const CODES=0;const LENS=1;const DISTS=2;const lbase=new Uint16Array([/* Length codes 257..285 base */3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]);const lext=new Uint8Array([/* Length codes 257..285 extra */16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]);const dbase=new Uint16Array([/* Distance codes 0..29 base */1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]);const dext=new Uint8Array([/* Distance codes 0..29 extra */16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);const inflate_table=(type,lens,lens_index,codes,table,table_index,work,opts)=>{const bits=opts.bits;//here = opts.here; /* table entry for duplication */
let len=0;/* a code's length in bits */let sym=0;/* index of code symbols */let min=0,max=0;/* minimum and maximum code lengths */let root=0;/* number of index bits for root table */let curr=0;/* number of index bits for current table */let drop=0;/* code bits to drop for sub-table */let left=0;/* number of prefix codes available */let used=0;/* code entries in table used */let huff=0;/* Huffman code */let incr;/* for incrementing code, index */let fill;/* index for replicating entries */let low;/* low bits for current root entry */let mask;/* mask for low root bits */let next;/* next available space in table */let base=null;/* base value table to use */let base_index=0;//  let shoextra;    /* extra bits table to use */
let end;/* use base and extra for symbol > end */const count=new Uint16Array(MAXBITS+1);//[MAXBITS+1];    /* number of codes of each length */
const offs=new Uint16Array(MAXBITS+1);//[MAXBITS+1];     /* offsets in table for each length */
let extra=null;let extra_index=0;let here_bits,here_op,here_val;/*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */ /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */for(len=0;len<=MAXBITS;len++){count[len]=0;}for(sym=0;sym<codes;sym++){count[lens[lens_index+sym]]++;}/* bound code lengths, force root to be within code lengths */root=bits;for(max=MAXBITS;max>=1;max--){if(count[max]!==0){break;}}if(root>max){root=max;}if(max===0){/* no symbols to code at all */ //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
//table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
//table.val[opts.table_index++] = 0;   //here.val = (var short)0;
table[table_index++]=1<<24|64<<16|0;//table.op[opts.table_index] = 64;
//table.bits[opts.table_index] = 1;
//table.val[opts.table_index++] = 0;
table[table_index++]=1<<24|64<<16|0;opts.bits=1;return 0;/* no symbols, but wait for decoding to report error */}for(min=1;min<max;min++){if(count[min]!==0){break;}}if(root<min){root=min;}/* check for an over-subscribed or incomplete set of lengths */left=1;for(len=1;len<=MAXBITS;len++){left<<=1;left-=count[len];if(left<0){return -1;}/* over-subscribed */}if(left>0&&(type===CODES||max!==1)){return -1;/* incomplete set */}/* generate offsets into symbol table for each length for sorting */offs[1]=0;for(len=1;len<MAXBITS;len++){offs[len+1]=offs[len]+count[len];}/* sort symbols by length, by symbol order within each length */for(sym=0;sym<codes;sym++){if(lens[lens_index+sym]!==0){work[offs[lens[lens_index+sym]]++]=sym;}}/*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */ /* set up for code type */ // poor man optimization - use if-else instead of switch,
// to avoid deopts in old v8
if(type===CODES){base=extra=work;/* dummy value--not used */end=19;}else if(type===LENS){base=lbase;base_index-=257;extra=lext;extra_index-=257;end=256;}else {/* DISTS */base=dbase;extra=dext;end=-1;}/* initialize opts for loop */huff=0;/* starting code */sym=0;/* starting code symbol */len=min;/* starting code length */next=table_index;/* current table to fill in */curr=root;/* current table index bits */drop=0;/* current bits to drop from code for index */low=-1;/* trigger new sub-table when len > root */used=1<<root;/* use root table entries */mask=used-1;/* mask for comparing low */ /* check available table space */if(type===LENS&&used>ENOUGH_LENS||type===DISTS&&used>ENOUGH_DISTS){return 1;}/* process all codes and make table entries */for(;;){/* create table entry */here_bits=len-drop;if(work[sym]<end){here_op=0;here_val=work[sym];}else if(work[sym]>end){here_op=extra[extra_index+work[sym]];here_val=base[base_index+work[sym]];}else {here_op=32+64;/* end of block */here_val=0;}/* replicate for those indices with low len bits equal to huff */incr=1<<len-drop;fill=1<<curr;min=fill;/* save offset to next table */do{fill-=incr;table[next+(huff>>drop)+fill]=here_bits<<24|here_op<<16|here_val|0;}while(fill!==0);/* backwards increment the len-bit code huff */incr=1<<len-1;while(huff&incr){incr>>=1;}if(incr!==0){huff&=incr-1;huff+=incr;}else {huff=0;}/* go to next symbol, update count, len */sym++;if(--count[len]===0){if(len===max){break;}len=lens[lens_index+work[sym]];}/* create new sub-table if needed */if(len>root&&(huff&mask)!==low){/* if first time, transition to sub-tables */if(drop===0){drop=root;}/* increment past last table */next+=min;/* here min is 1 << curr */ /* determine length of next table */curr=len-drop;left=1<<curr;while(curr+drop<max){left-=count[curr+drop];if(left<=0){break;}curr++;left<<=1;}/* check for enough space */used+=1<<curr;if(type===LENS&&used>ENOUGH_LENS||type===DISTS&&used>ENOUGH_DISTS){return 1;}/* point entry in root table to sub-table */low=huff&mask;/*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/table[low]=root<<24|curr<<16|next-table_index|0;}}/* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */if(huff!==0){//table.op[next + huff] = 64;            /* invalid code marker */
//table.bits[next + huff] = len - drop;
//table.val[next + huff] = 0;
table[next+huff]=len-drop<<24|64<<16|0;}/* set return parameters */ //opts.table_index += used;
opts.bits=root;return 0;};var inftrees=inflate_table;// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const CODES$1=0;const LENS$1=1;const DISTS$1=2;/* Public constants ==========================================================*/ /* ===========================================================================*/const{Z_FINISH:Z_FINISH$2,Z_BLOCK:Z_BLOCK$1,Z_TREES,Z_OK:Z_OK$2,Z_STREAM_END:Z_STREAM_END$2,Z_NEED_DICT,Z_STREAM_ERROR:Z_STREAM_ERROR$1,Z_DATA_ERROR:Z_DATA_ERROR$1,Z_MEM_ERROR,Z_BUF_ERROR:Z_BUF_ERROR$1,Z_DEFLATED:Z_DEFLATED$2}=constants;/* STATES ====================================================================*/ /* ===========================================================================*/const HEAD=1;/* i: waiting for magic header */const FLAGS=2;/* i: waiting for method and flags (gzip) */const TIME=3;/* i: waiting for modification time (gzip) */const OS=4;/* i: waiting for extra flags and operating system (gzip) */const EXLEN=5;/* i: waiting for extra length (gzip) */const EXTRA=6;/* i: waiting for extra bytes (gzip) */const NAME=7;/* i: waiting for end of file name (gzip) */const COMMENT=8;/* i: waiting for end of comment (gzip) */const HCRC=9;/* i: waiting for header crc (gzip) */const DICTID=10;/* i: waiting for dictionary check value */const DICT=11;/* waiting for inflateSetDictionary() call */const TYPE$1=12;/* i: waiting for type bits, including last-flag bit */const TYPEDO=13;/* i: same, but skip check to exit inflate on new block */const STORED=14;/* i: waiting for stored size (length and complement) */const COPY_=15;/* i/o: same as COPY below, but only first time in */const COPY=16;/* i/o: waiting for input or output to copy stored block */const TABLE=17;/* i: waiting for dynamic block table lengths */const LENLENS=18;/* i: waiting for code length code lengths */const CODELENS=19;/* i: waiting for length/lit and distance code lengths */const LEN_=20;/* i: same as LEN below, but only first time in */const LEN=21;/* i: waiting for length/lit/eob code */const LENEXT=22;/* i: waiting for length extra bits */const DIST=23;/* i: waiting for distance code */const DISTEXT=24;/* i: waiting for distance extra bits */const MATCH=25;/* o: waiting for output space to copy string */const LIT=26;/* o: waiting for output space to write literal */const CHECK=27;/* i: waiting for 32-bit check value */const LENGTH=28;/* i: waiting for 32-bit length (gzip) */const DONE=29;/* finished check, done -- remain here until reset */const BAD$1=30;/* got a data error -- remain here until reset */const MEM=31;/* got an inflate() memory error -- remain here until reset */const SYNC=32;/* looking for synchronization bytes to restart inflate() */ /* ===========================================================================*/const ENOUGH_LENS$1=852;const ENOUGH_DISTS$1=592;//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
const MAX_WBITS$1=15;/* 32K LZ77 window */const DEF_WBITS=MAX_WBITS$1;const zswap32=q=>{return (q>>>24&0xff)+(q>>>8&0xff00)+((q&0xff00)<<8)+((q&0xff)<<24);};function InflateState(){this.mode=0;/* current inflate mode */this.last=false;/* true if processing last block */this.wrap=0;/* bit 0 true for zlib, bit 1 true for gzip */this.havedict=false;/* true if dictionary provided */this.flags=0;/* gzip header method and flags (0 if zlib) */this.dmax=0;/* zlib header max distance (INFLATE_STRICT) */this.check=0;/* protected copy of check value */this.total=0;/* protected copy of output count */ // TODO: may be {}
this.head=null;/* where to save gzip header information */ /* sliding window */this.wbits=0;/* log base 2 of requested window size */this.wsize=0;/* window size or zero if not using window */this.whave=0;/* valid bytes in the window */this.wnext=0;/* window write index */this.window=null;/* allocated sliding window, if needed */ /* bit accumulator */this.hold=0;/* input bit accumulator */this.bits=0;/* number of bits in "in" */ /* for string and stored block copying */this.length=0;/* literal or length of data to copy */this.offset=0;/* distance back to copy string from */ /* for table and code decoding */this.extra=0;/* extra bits needed */ /* fixed and dynamic code tables */this.lencode=null;/* starting table for length/literal codes */this.distcode=null;/* starting table for distance codes */this.lenbits=0;/* index bits for lencode */this.distbits=0;/* index bits for distcode */ /* dynamic table building */this.ncode=0;/* number of code length code lengths */this.nlen=0;/* number of length code lengths */this.ndist=0;/* number of distance code lengths */this.have=0;/* number of code lengths in lens[] */this.next=null;/* next available space in codes[] */this.lens=new Uint16Array(320);/* temporary storage for code lengths */this.work=new Uint16Array(288);/* work area for code table building */ /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */ //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
this.lendyn=null;/* dynamic table for length/literal codes (JS specific) */this.distdyn=null;/* dynamic table for distance codes (JS specific) */this.sane=0;/* if false, allow invalid distance too far */this.back=0;/* bits back of last unprocessed length/lit */this.was=0;/* initial length of match */}const inflateResetKeep=strm=>{if(!strm||!strm.state){return Z_STREAM_ERROR$1;}const state=strm.state;strm.total_in=strm.total_out=state.total=0;strm.msg='';/*Z_NULL*/if(state.wrap){/* to support ill-conceived Java test suite */strm.adler=state.wrap&1;}state.mode=HEAD;state.last=0;state.havedict=0;state.dmax=32768;state.head=null/*Z_NULL*/;state.hold=0;state.bits=0;//state.lencode = state.distcode = state.next = state.codes;
state.lencode=state.lendyn=new Int32Array(ENOUGH_LENS$1);state.distcode=state.distdyn=new Int32Array(ENOUGH_DISTS$1);state.sane=1;state.back=-1;//Tracev((stderr, "inflate: reset\n"));
return Z_OK$2;};const inflateReset=strm=>{if(!strm||!strm.state){return Z_STREAM_ERROR$1;}const state=strm.state;state.wsize=0;state.whave=0;state.wnext=0;return inflateResetKeep(strm);};const inflateReset2=(strm,windowBits)=>{let wrap;/* get the state */if(!strm||!strm.state){return Z_STREAM_ERROR$1;}const state=strm.state;/* extract wrap request from windowBits parameter */if(windowBits<0){wrap=0;windowBits=-windowBits;}else {wrap=(windowBits>>4)+1;if(windowBits<48){windowBits&=15;}}/* set number of window bits, free window if different */if(windowBits&&(windowBits<8||windowBits>15)){return Z_STREAM_ERROR$1;}if(state.window!==null&&state.wbits!==windowBits){state.window=null;}/* update state and reset the rest of it */state.wrap=wrap;state.wbits=windowBits;return inflateReset(strm);};const inflateInit2=(strm,windowBits)=>{if(!strm){return Z_STREAM_ERROR$1;}//strm.msg = Z_NULL;                 /* in case we return an error */
const state=new InflateState();//if (state === Z_NULL) return Z_MEM_ERROR;
//Tracev((stderr, "inflate: allocated\n"));
strm.state=state;state.window=null/*Z_NULL*/;const ret=inflateReset2(strm,windowBits);if(ret!==Z_OK$2){strm.state=null/*Z_NULL*/;}return ret;};const inflateInit=strm=>{return inflateInit2(strm,DEF_WBITS);};/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */let virgin=true;let lenfix,distfix;// We have no pointers in JS, so keep tables separate
const fixedtables=state=>{/* build fixed huffman tables if first call (may not be thread safe) */if(virgin){lenfix=new Int32Array(512);distfix=new Int32Array(32);/* literal/length table */let sym=0;while(sym<144){state.lens[sym++]=8;}while(sym<256){state.lens[sym++]=9;}while(sym<280){state.lens[sym++]=7;}while(sym<288){state.lens[sym++]=8;}inftrees(LENS$1,state.lens,0,288,lenfix,0,state.work,{bits:9});/* distance table */sym=0;while(sym<32){state.lens[sym++]=5;}inftrees(DISTS$1,state.lens,0,32,distfix,0,state.work,{bits:5});/* do this just once */virgin=false;}state.lencode=lenfix;state.lenbits=9;state.distcode=distfix;state.distbits=5;};/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */const updatewindow=(strm,src,end,copy)=>{let dist;const state=strm.state;/* if it hasn't been done already, allocate space for the window */if(state.window===null){state.wsize=1<<state.wbits;state.wnext=0;state.whave=0;state.window=new Uint8Array(state.wsize);}/* copy state->wsize or less output bytes into the circular window */if(copy>=state.wsize){state.window.set(src.subarray(end-state.wsize,end),0);state.wnext=0;state.whave=state.wsize;}else {dist=state.wsize-state.wnext;if(dist>copy){dist=copy;}//zmemcpy(state->window + state->wnext, end - copy, dist);
state.window.set(src.subarray(end-copy,end-copy+dist),state.wnext);copy-=dist;if(copy){//zmemcpy(state->window, end - copy, copy);
state.window.set(src.subarray(end-copy,end),0);state.wnext=copy;state.whave=state.wsize;}else {state.wnext+=dist;if(state.wnext===state.wsize){state.wnext=0;}if(state.whave<state.wsize){state.whave+=dist;}}}return 0;};const inflate=(strm,flush)=>{let state;let input,output;// input/output buffers
let next;/* next input INDEX */let put;/* next output INDEX */let have,left;/* available input and output */let hold;/* bit buffer */let bits;/* bits in bit buffer */let _in,_out;/* save starting available input and output */let copy;/* number of stored or match bytes to copy */let from;/* where to copy match bytes from */let from_source;let here=0;/* current decoding table entry */let here_bits,here_op,here_val;// paked "here" denormalized (JS specific)
//let last;                   /* parent table entry */
let last_bits,last_op,last_val;// paked "last" denormalized (JS specific)
let len;/* length to copy for repeats, bits to drop */let ret;/* return code */const hbuf=new Uint8Array(4);/* buffer for gzip header crc calculation */let opts;let n;// temporary variable for NEED_BITS
const order=/* permutation of code lengths */new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!strm||!strm.state||!strm.output||!strm.input&&strm.avail_in!==0){return Z_STREAM_ERROR$1;}state=strm.state;if(state.mode===TYPE$1){state.mode=TYPEDO;}/* skip check */ //--- LOAD() ---
put=strm.next_out;output=strm.output;left=strm.avail_out;next=strm.next_in;input=strm.input;have=strm.avail_in;hold=state.hold;bits=state.bits;//---
_in=have;_out=left;ret=Z_OK$2;inf_leave:// goto emulation
for(;;){switch(state.mode){case HEAD:if(state.wrap===0){state.mode=TYPEDO;break;}//=== NEEDBITS(16);
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(state.wrap&2&&hold===0x8b1f){/* gzip header */state.check=0/*crc32(0L, Z_NULL, 0)*/;//=== CRC2(state.check, hold);
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;state.check=crc32_1(state.check,hbuf,2,0);//===//
//=== INITBITS();
hold=0;bits=0;//===//
state.mode=FLAGS;break;}state.flags=0;/* expect zlib header */if(state.head){state.head.done=false;}if(!(state.wrap&1)||/* check if zlib header allowed */(((hold&0xff)<</*BITS(8)*/8)+(hold>>8))%31){strm.msg='incorrect header check';state.mode=BAD$1;break;}if((hold&0x0f)!==/*BITS(4)*/Z_DEFLATED$2){strm.msg='unknown compression method';state.mode=BAD$1;break;}//--- DROPBITS(4) ---//
hold>>>=4;bits-=4;//---//
len=(hold&0x0f)+/*BITS(4)*/8;if(state.wbits===0){state.wbits=len;}else if(len>state.wbits){strm.msg='invalid window size';state.mode=BAD$1;break;}// !!! pako patch. Force use `options.windowBits` if passed.
// Required to always use max window size by default.
state.dmax=1<<state.wbits;//state.dmax = 1 << len;
//Tracev((stderr, "inflate:   zlib header ok\n"));
strm.adler=state.check=1/*adler32(0L, Z_NULL, 0)*/;state.mode=hold&0x200?DICTID:TYPE$1;//=== INITBITS();
hold=0;bits=0;//===//
break;case FLAGS://=== NEEDBITS(16); */
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.flags=hold;if((state.flags&0xff)!==Z_DEFLATED$2){strm.msg='unknown compression method';state.mode=BAD$1;break;}if(state.flags&0xe000){strm.msg='unknown header flags set';state.mode=BAD$1;break;}if(state.head){state.head.text=hold>>8&1;}if(state.flags&0x0200){//=== CRC2(state.check, hold);
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;state.check=crc32_1(state.check,hbuf,2,0);//===//
}//=== INITBITS();
hold=0;bits=0;//===//
state.mode=TIME;/* falls through */case TIME://=== NEEDBITS(32); */
while(bits<32){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(state.head){state.head.time=hold;}if(state.flags&0x0200){//=== CRC4(state.check, hold)
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;hbuf[2]=hold>>>16&0xff;hbuf[3]=hold>>>24&0xff;state.check=crc32_1(state.check,hbuf,4,0);//===
}//=== INITBITS();
hold=0;bits=0;//===//
state.mode=OS;/* falls through */case OS://=== NEEDBITS(16); */
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(state.head){state.head.xflags=hold&0xff;state.head.os=hold>>8;}if(state.flags&0x0200){//=== CRC2(state.check, hold);
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;state.check=crc32_1(state.check,hbuf,2,0);//===//
}//=== INITBITS();
hold=0;bits=0;//===//
state.mode=EXLEN;/* falls through */case EXLEN:if(state.flags&0x0400){//=== NEEDBITS(16); */
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.length=hold;if(state.head){state.head.extra_len=hold;}if(state.flags&0x0200){//=== CRC2(state.check, hold);
hbuf[0]=hold&0xff;hbuf[1]=hold>>>8&0xff;state.check=crc32_1(state.check,hbuf,2,0);//===//
}//=== INITBITS();
hold=0;bits=0;//===//
}else if(state.head){state.head.extra=null/*Z_NULL*/;}state.mode=EXTRA;/* falls through */case EXTRA:if(state.flags&0x0400){copy=state.length;if(copy>have){copy=have;}if(copy){if(state.head){len=state.head.extra_len-state.length;if(!state.head.extra){// Use untyped array for more convenient processing later
state.head.extra=new Uint8Array(state.head.extra_len);}state.head.extra.set(input.subarray(next,// extra field is limited to 65536 bytes
// - no need for additional size check
next+copy),/*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/len);//zmemcpy(state.head.extra + len, next,
//        len + copy > state.head.extra_max ?
//        state.head.extra_max - len : copy);
}if(state.flags&0x0200){state.check=crc32_1(state.check,input,copy,next);}have-=copy;next+=copy;state.length-=copy;}if(state.length){break inf_leave;}}state.length=0;state.mode=NAME;/* falls through */case NAME:if(state.flags&0x0800){if(have===0){break inf_leave;}copy=0;do{// TODO: 2 or 1 bytes?
len=input[next+copy++];/* use constant limit because in js we should not preallocate memory */if(state.head&&len&&state.length<65536/*state.head.name_max*/){state.head.name+=String.fromCharCode(len);}}while(len&&copy<have);if(state.flags&0x0200){state.check=crc32_1(state.check,input,copy,next);}have-=copy;next+=copy;if(len){break inf_leave;}}else if(state.head){state.head.name=null;}state.length=0;state.mode=COMMENT;/* falls through */case COMMENT:if(state.flags&0x1000){if(have===0){break inf_leave;}copy=0;do{len=input[next+copy++];/* use constant limit because in js we should not preallocate memory */if(state.head&&len&&state.length<65536/*state.head.comm_max*/){state.head.comment+=String.fromCharCode(len);}}while(len&&copy<have);if(state.flags&0x0200){state.check=crc32_1(state.check,input,copy,next);}have-=copy;next+=copy;if(len){break inf_leave;}}else if(state.head){state.head.comment=null;}state.mode=HCRC;/* falls through */case HCRC:if(state.flags&0x0200){//=== NEEDBITS(16); */
while(bits<16){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(hold!==(state.check&0xffff)){strm.msg='header crc mismatch';state.mode=BAD$1;break;}//=== INITBITS();
hold=0;bits=0;//===//
}if(state.head){state.head.hcrc=state.flags>>9&1;state.head.done=true;}strm.adler=state.check=0;state.mode=TYPE$1;break;case DICTID://=== NEEDBITS(32); */
while(bits<32){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
strm.adler=state.check=zswap32(hold);//=== INITBITS();
hold=0;bits=0;//===//
state.mode=DICT;/* falls through */case DICT:if(state.havedict===0){//--- RESTORE() ---
strm.next_out=put;strm.avail_out=left;strm.next_in=next;strm.avail_in=have;state.hold=hold;state.bits=bits;//---
return Z_NEED_DICT;}strm.adler=state.check=1/*adler32(0L, Z_NULL, 0)*/;state.mode=TYPE$1;/* falls through */case TYPE$1:if(flush===Z_BLOCK$1||flush===Z_TREES){break inf_leave;}/* falls through */case TYPEDO:if(state.last){//--- BYTEBITS() ---//
hold>>>=bits&7;bits-=bits&7;//---//
state.mode=CHECK;break;}//=== NEEDBITS(3); */
while(bits<3){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.last=hold&0x01/*BITS(1)*/;//--- DROPBITS(1) ---//
hold>>>=1;bits-=1;//---//
switch(hold&0x03){/*BITS(2)*/case 0:/* stored block */ //Tracev((stderr, "inflate:     stored block%s\n",
//        state.last ? " (last)" : ""));
state.mode=STORED;break;case 1:/* fixed block */fixedtables(state);//Tracev((stderr, "inflate:     fixed codes block%s\n",
//        state.last ? " (last)" : ""));
state.mode=LEN_;/* decode codes */if(flush===Z_TREES){//--- DROPBITS(2) ---//
hold>>>=2;bits-=2;//---//
break inf_leave;}break;case 2:/* dynamic block */ //Tracev((stderr, "inflate:     dynamic codes block%s\n",
//        state.last ? " (last)" : ""));
state.mode=TABLE;break;case 3:strm.msg='invalid block type';state.mode=BAD$1;}//--- DROPBITS(2) ---//
hold>>>=2;bits-=2;//---//
break;case STORED://--- BYTEBITS() ---// /* go to byte boundary */
hold>>>=bits&7;bits-=bits&7;//---//
//=== NEEDBITS(32); */
while(bits<32){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if((hold&0xffff)!==(hold>>>16^0xffff)){strm.msg='invalid stored block lengths';state.mode=BAD$1;break;}state.length=hold&0xffff;//Tracev((stderr, "inflate:       stored length %u\n",
//        state.length));
//=== INITBITS();
hold=0;bits=0;//===//
state.mode=COPY_;if(flush===Z_TREES){break inf_leave;}/* falls through */case COPY_:state.mode=COPY;/* falls through */case COPY:copy=state.length;if(copy){if(copy>have){copy=have;}if(copy>left){copy=left;}if(copy===0){break inf_leave;}//--- zmemcpy(put, next, copy); ---
output.set(input.subarray(next,next+copy),put);//---//
have-=copy;next+=copy;left-=copy;put+=copy;state.length-=copy;break;}//Tracev((stderr, "inflate:       stored end\n"));
state.mode=TYPE$1;break;case TABLE://=== NEEDBITS(14); */
while(bits<14){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.nlen=(hold&0x1f)+/*BITS(5)*/257;//--- DROPBITS(5) ---//
hold>>>=5;bits-=5;//---//
state.ndist=(hold&0x1f)+/*BITS(5)*/1;//--- DROPBITS(5) ---//
hold>>>=5;bits-=5;//---//
state.ncode=(hold&0x0f)+/*BITS(4)*/4;//--- DROPBITS(4) ---//
hold>>>=4;bits-=4;//---//
//#ifndef PKZIP_BUG_WORKAROUND
if(state.nlen>286||state.ndist>30){strm.msg='too many length or distance symbols';state.mode=BAD$1;break;}//#endif
//Tracev((stderr, "inflate:       table sizes ok\n"));
state.have=0;state.mode=LENLENS;/* falls through */case LENLENS:while(state.have<state.ncode){//=== NEEDBITS(3);
while(bits<3){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.lens[order[state.have++]]=hold&0x07;//BITS(3);
//--- DROPBITS(3) ---//
hold>>>=3;bits-=3;//---//
}while(state.have<19){state.lens[order[state.have++]]=0;}// We have separate tables & no pointers. 2 commented lines below not needed.
//state.next = state.codes;
//state.lencode = state.next;
// Switch to use dynamic table
state.lencode=state.lendyn;state.lenbits=7;opts={bits:state.lenbits};ret=inftrees(CODES$1,state.lens,0,19,state.lencode,0,state.work,opts);state.lenbits=opts.bits;if(ret){strm.msg='invalid code lengths set';state.mode=BAD$1;break;}//Tracev((stderr, "inflate:       code lengths ok\n"));
state.have=0;state.mode=CODELENS;/* falls through */case CODELENS:while(state.have<state.nlen+state.ndist){for(;;){here=state.lencode[hold&(1<<state.lenbits)-1];/*BITS(state.lenbits)*/here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}if(here_val<16){//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
state.lens[state.have++]=here_val;}else {if(here_val===16){//=== NEEDBITS(here.bits + 2);
n=here_bits+2;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
if(state.have===0){strm.msg='invalid bit length repeat';state.mode=BAD$1;break;}len=state.lens[state.have-1];copy=3+(hold&0x03);//BITS(2);
//--- DROPBITS(2) ---//
hold>>>=2;bits-=2;//---//
}else if(here_val===17){//=== NEEDBITS(here.bits + 3);
n=here_bits+3;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
len=0;copy=3+(hold&0x07);//BITS(3);
//--- DROPBITS(3) ---//
hold>>>=3;bits-=3;//---//
}else {//=== NEEDBITS(here.bits + 7);
n=here_bits+7;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
len=0;copy=11+(hold&0x7f);//BITS(7);
//--- DROPBITS(7) ---//
hold>>>=7;bits-=7;//---//
}if(state.have+copy>state.nlen+state.ndist){strm.msg='invalid bit length repeat';state.mode=BAD$1;break;}while(copy--){state.lens[state.have++]=len;}}}/* handle error breaks in while */if(state.mode===BAD$1){break;}/* check for end-of-block code (better have one) */if(state.lens[256]===0){strm.msg='invalid code -- missing end-of-block';state.mode=BAD$1;break;}/* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */state.lenbits=9;opts={bits:state.lenbits};ret=inftrees(LENS$1,state.lens,0,state.nlen,state.lencode,0,state.work,opts);// We have separate tables & no pointers. 2 commented lines below not needed.
// state.next_index = opts.table_index;
state.lenbits=opts.bits;// state.lencode = state.next;
if(ret){strm.msg='invalid literal/lengths set';state.mode=BAD$1;break;}state.distbits=6;//state.distcode.copy(state.codes);
// Switch to use dynamic table
state.distcode=state.distdyn;opts={bits:state.distbits};ret=inftrees(DISTS$1,state.lens,state.nlen,state.ndist,state.distcode,0,state.work,opts);// We have separate tables & no pointers. 2 commented lines below not needed.
// state.next_index = opts.table_index;
state.distbits=opts.bits;// state.distcode = state.next;
if(ret){strm.msg='invalid distances set';state.mode=BAD$1;break;}//Tracev((stderr, 'inflate:       codes ok\n'));
state.mode=LEN_;if(flush===Z_TREES){break inf_leave;}/* falls through */case LEN_:state.mode=LEN;/* falls through */case LEN:if(have>=6&&left>=258){//--- RESTORE() ---
strm.next_out=put;strm.avail_out=left;strm.next_in=next;strm.avail_in=have;state.hold=hold;state.bits=bits;//---
inffast(strm,_out);//--- LOAD() ---
put=strm.next_out;output=strm.output;left=strm.avail_out;next=strm.next_in;input=strm.input;have=strm.avail_in;hold=state.hold;bits=state.bits;//---
if(state.mode===TYPE$1){state.back=-1;}break;}state.back=0;for(;;){here=state.lencode[hold&(1<<state.lenbits)-1];/*BITS(state.lenbits)*/here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}if(here_op&&(here_op&0xf0)===0){last_bits=here_bits;last_op=here_op;last_val=here_val;for(;;){here=state.lencode[last_val+((hold&(1<<last_bits+last_op)-1)>>/*BITS(last.bits + last.op)*/last_bits)];here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(last_bits+here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}//--- DROPBITS(last.bits) ---//
hold>>>=last_bits;bits-=last_bits;//---//
state.back+=last_bits;}//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
state.back+=here_bits;state.length=here_val;if(here_op===0){//Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
//        "inflate:         literal '%c'\n" :
//        "inflate:         literal 0x%02x\n", here.val));
state.mode=LIT;break;}if(here_op&32){//Tracevv((stderr, "inflate:         end of block\n"));
state.back=-1;state.mode=TYPE$1;break;}if(here_op&64){strm.msg='invalid literal/length code';state.mode=BAD$1;break;}state.extra=here_op&15;state.mode=LENEXT;/* falls through */case LENEXT:if(state.extra){//=== NEEDBITS(state.extra);
n=state.extra;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.length+=hold&(1<<state.extra)-1/*BITS(state.extra)*/;//--- DROPBITS(state.extra) ---//
hold>>>=state.extra;bits-=state.extra;//---//
state.back+=state.extra;}//Tracevv((stderr, "inflate:         length %u\n", state.length));
state.was=state.length;state.mode=DIST;/* falls through */case DIST:for(;;){here=state.distcode[hold&(1<<state.distbits)-1];/*BITS(state.distbits)*/here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}if((here_op&0xf0)===0){last_bits=here_bits;last_op=here_op;last_val=here_val;for(;;){here=state.distcode[last_val+((hold&(1<<last_bits+last_op)-1)>>/*BITS(last.bits + last.op)*/last_bits)];here_bits=here>>>24;here_op=here>>>16&0xff;here_val=here&0xffff;if(last_bits+here_bits<=bits){break;}//--- PULLBYTE() ---//
if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;//---//
}//--- DROPBITS(last.bits) ---//
hold>>>=last_bits;bits-=last_bits;//---//
state.back+=last_bits;}//--- DROPBITS(here.bits) ---//
hold>>>=here_bits;bits-=here_bits;//---//
state.back+=here_bits;if(here_op&64){strm.msg='invalid distance code';state.mode=BAD$1;break;}state.offset=here_val;state.extra=here_op&15;state.mode=DISTEXT;/* falls through */case DISTEXT:if(state.extra){//=== NEEDBITS(state.extra);
n=state.extra;while(bits<n){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
state.offset+=hold&(1<<state.extra)-1/*BITS(state.extra)*/;//--- DROPBITS(state.extra) ---//
hold>>>=state.extra;bits-=state.extra;//---//
state.back+=state.extra;}//#ifdef INFLATE_STRICT
if(state.offset>state.dmax){strm.msg='invalid distance too far back';state.mode=BAD$1;break;}//#endif
//Tracevv((stderr, "inflate:         distance %u\n", state.offset));
state.mode=MATCH;/* falls through */case MATCH:if(left===0){break inf_leave;}copy=_out-left;if(state.offset>copy){/* copy from window */copy=state.offset-copy;if(copy>state.whave){if(state.sane){strm.msg='invalid distance too far back';state.mode=BAD$1;break;}// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
}if(copy>state.wnext){copy-=state.wnext;from=state.wsize-copy;}else {from=state.wnext-copy;}if(copy>state.length){copy=state.length;}from_source=state.window;}else {/* copy from output */from_source=output;from=put-state.offset;copy=state.length;}if(copy>left){copy=left;}left-=copy;state.length-=copy;do{output[put++]=from_source[from++];}while(--copy);if(state.length===0){state.mode=LEN;}break;case LIT:if(left===0){break inf_leave;}output[put++]=state.length;left--;state.mode=LEN;break;case CHECK:if(state.wrap){//=== NEEDBITS(32);
while(bits<32){if(have===0){break inf_leave;}have--;// Use '|' instead of '+' to make sure that result is signed
hold|=input[next++]<<bits;bits+=8;}//===//
_out-=left;strm.total_out+=_out;state.total+=_out;if(_out){strm.adler=state.check=/*UPDATE(state.check, put - _out, _out);*/state.flags?crc32_1(state.check,output,_out,put-_out):adler32_1(state.check,output,_out,put-_out);}_out=left;// NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
if((state.flags?hold:zswap32(hold))!==state.check){strm.msg='incorrect data check';state.mode=BAD$1;break;}//=== INITBITS();
hold=0;bits=0;//===//
//Tracev((stderr, "inflate:   check matches trailer\n"));
}state.mode=LENGTH;/* falls through */case LENGTH:if(state.wrap&&state.flags){//=== NEEDBITS(32);
while(bits<32){if(have===0){break inf_leave;}have--;hold+=input[next++]<<bits;bits+=8;}//===//
if(hold!==(state.total&0xffffffff)){strm.msg='incorrect length check';state.mode=BAD$1;break;}//=== INITBITS();
hold=0;bits=0;//===//
//Tracev((stderr, "inflate:   length matches trailer\n"));
}state.mode=DONE;/* falls through */case DONE:ret=Z_STREAM_END$2;break inf_leave;case BAD$1:ret=Z_DATA_ERROR$1;break inf_leave;case MEM:return Z_MEM_ERROR;case SYNC:/* falls through */default:return Z_STREAM_ERROR$1;}}// inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
/*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */ //--- RESTORE() ---
strm.next_out=put;strm.avail_out=left;strm.next_in=next;strm.avail_in=have;state.hold=hold;state.bits=bits;//---
if(state.wsize||_out!==strm.avail_out&&state.mode<BAD$1&&(state.mode<CHECK||flush!==Z_FINISH$2)){if(updatewindow(strm,strm.output,strm.next_out,_out-strm.avail_out));}_in-=strm.avail_in;_out-=strm.avail_out;strm.total_in+=_in;strm.total_out+=_out;state.total+=_out;if(state.wrap&&_out){strm.adler=state.check=/*UPDATE(state.check, strm.next_out - _out, _out);*/state.flags?crc32_1(state.check,output,_out,strm.next_out-_out):adler32_1(state.check,output,_out,strm.next_out-_out);}strm.data_type=state.bits+(state.last?64:0)+(state.mode===TYPE$1?128:0)+(state.mode===LEN_||state.mode===COPY_?256:0);if((_in===0&&_out===0||flush===Z_FINISH$2)&&ret===Z_OK$2){ret=Z_BUF_ERROR$1;}return ret;};const inflateEnd=strm=>{if(!strm||!strm.state/*|| strm->zfree == (free_func)0*/){return Z_STREAM_ERROR$1;}let state=strm.state;if(state.window){state.window=null;}strm.state=null;return Z_OK$2;};const inflateGetHeader=(strm,head)=>{/* check state */if(!strm||!strm.state){return Z_STREAM_ERROR$1;}const state=strm.state;if((state.wrap&2)===0){return Z_STREAM_ERROR$1;}/* save header structure */state.head=head;head.done=false;return Z_OK$2;};const inflateSetDictionary=(strm,dictionary)=>{const dictLength=dictionary.length;let state;let dictid;let ret;/* check state */if(!strm/* == Z_NULL */||!strm.state/* == Z_NULL */){return Z_STREAM_ERROR$1;}state=strm.state;if(state.wrap!==0&&state.mode!==DICT){return Z_STREAM_ERROR$1;}/* check for correct dictionary identifier */if(state.mode===DICT){dictid=1;/* adler32(0, null, 0)*/ /* dictid = adler32(dictid, dictionary, dictLength); */dictid=adler32_1(dictid,dictionary,dictLength,0);if(dictid!==state.check){return Z_DATA_ERROR$1;}}/* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */ret=updatewindow(strm,dictionary,dictLength,dictLength);if(ret){state.mode=MEM;return Z_MEM_ERROR;}state.havedict=1;// Tracev((stderr, "inflate:   dictionary set\n"));
return Z_OK$2;};var inflateReset_1=inflateReset;var inflateReset2_1=inflateReset2;var inflateResetKeep_1=inflateResetKeep;var inflateInit_1=inflateInit;var inflateInit2_1=inflateInit2;var inflate_2=inflate;var inflateEnd_1=inflateEnd;var inflateGetHeader_1=inflateGetHeader;var inflateSetDictionary_1=inflateSetDictionary;var inflateInfo='pako inflate (from Nodeca project)';/* Not implemented
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
*/var inflate_1={inflateReset:inflateReset_1,inflateReset2:inflateReset2_1,inflateResetKeep:inflateResetKeep_1,inflateInit:inflateInit_1,inflateInit2:inflateInit2_1,inflate:inflate_2,inflateEnd:inflateEnd_1,inflateGetHeader:inflateGetHeader_1,inflateSetDictionary:inflateSetDictionary_1,inflateInfo:inflateInfo};// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function GZheader(){/* true if compressed data believed to be text */this.text=0;/* modification time */this.time=0;/* extra flags (not used when writing a gzip file) */this.xflags=0;/* operating system */this.os=0;/* pointer to extra field or Z_NULL if none */this.extra=null;/* extra field length (valid if extra != Z_NULL) */this.extra_len=0;// Actually, we don't need it in JS,
// but leave for few code modifications
//
// Setup limits is not necessary because in js we should not preallocate memory
// for inflate use constant limit in 65536 bytes
//
/* space at extra (only when reading header) */ // this.extra_max  = 0;
/* pointer to zero-terminated file name or Z_NULL */this.name='';/* space at name (only when reading header) */ // this.name_max   = 0;
/* pointer to zero-terminated comment or Z_NULL */this.comment='';/* space at comment (only when reading header) */ // this.comm_max   = 0;
/* true if there was or will be a header crc */this.hcrc=0;/* true when done reading gzip header (not used when writing a gzip file) */this.done=false;}var gzheader=GZheader;const toString$1=Object.prototype.toString;/* Public constants ==========================================================*/ /* ===========================================================================*/const{Z_NO_FLUSH:Z_NO_FLUSH$2,Z_FINISH:Z_FINISH$3,Z_OK:Z_OK$3,Z_STREAM_END:Z_STREAM_END$3,Z_NEED_DICT:Z_NEED_DICT$1,Z_STREAM_ERROR:Z_STREAM_ERROR$2,Z_DATA_ERROR:Z_DATA_ERROR$2,Z_MEM_ERROR:Z_MEM_ERROR$1}=constants;/* ===========================================================================*/ /**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/ /* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/ /**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/ /**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/ /**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/function Inflate(options){this.options=common.assign({chunkSize:1024*64,windowBits:15,to:''},options||{});const opt=this.options;// Force window size for `raw` data, if not set directly,
// because we have no header for autodetect.
if(opt.raw&&opt.windowBits>=0&&opt.windowBits<16){opt.windowBits=-opt.windowBits;if(opt.windowBits===0){opt.windowBits=-15;}}// If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
if(opt.windowBits>=0&&opt.windowBits<16&&!(options&&options.windowBits)){opt.windowBits+=32;}// Gzip header has no info about windows size, we can do autodetect only
// for deflate. So, if window size not set, force it to max when gzip possible
if(opt.windowBits>15&&opt.windowBits<48){// bit 3 (16) -> gzipped data
// bit 4 (32) -> autodetect gzip/deflate
if((opt.windowBits&15)===0){opt.windowBits|=15;}}this.err=0;// error code, if happens (0 = Z_OK)
this.msg='';// error message
this.ended=false;// used to avoid multiple onEnd() calls
this.chunks=[];// chunks of compressed data
this.strm=new zstream();this.strm.avail_out=0;let status=inflate_1.inflateInit2(this.strm,opt.windowBits);if(status!==Z_OK$3){throw new Error(messages[status]);}this.header=new gzheader();inflate_1.inflateGetHeader(this.strm,this.header);// Setup dictionary
if(opt.dictionary){// Convert data if needed
if(typeof opt.dictionary==='string'){opt.dictionary=strings.string2buf(opt.dictionary);}else if(toString$1.call(opt.dictionary)==='[object ArrayBuffer]'){opt.dictionary=new Uint8Array(opt.dictionary);}if(opt.raw){//In raw mode we need to set the dictionary early
status=inflate_1.inflateSetDictionary(this.strm,opt.dictionary);if(status!==Z_OK$3){throw new Error(messages[status]);}}}}/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/Inflate.prototype.push=function(data,flush_mode){const strm=this.strm;const chunkSize=this.options.chunkSize;const dictionary=this.options.dictionary;let status,_flush_mode,last_avail_out;if(this.ended)return false;if(flush_mode===~~flush_mode)_flush_mode=flush_mode;else _flush_mode=flush_mode===true?Z_FINISH$3:Z_NO_FLUSH$2;// Convert data if needed
if(toString$1.call(data)==='[object ArrayBuffer]'){strm.input=new Uint8Array(data);}else {strm.input=data;}strm.next_in=0;strm.avail_in=strm.input.length;for(;;){if(strm.avail_out===0){strm.output=new Uint8Array(chunkSize);strm.next_out=0;strm.avail_out=chunkSize;}status=inflate_1.inflate(strm,_flush_mode);if(status===Z_NEED_DICT$1&&dictionary){status=inflate_1.inflateSetDictionary(strm,dictionary);if(status===Z_OK$3){status=inflate_1.inflate(strm,_flush_mode);}else if(status===Z_DATA_ERROR$2){// Replace code with more verbose
status=Z_NEED_DICT$1;}}// Skip snyc markers if more data follows and not raw mode
while(strm.avail_in>0&&status===Z_STREAM_END$3&&strm.state.wrap>0&&data[strm.next_in]!==0){inflate_1.inflateReset(strm);status=inflate_1.inflate(strm,_flush_mode);}switch(status){case Z_STREAM_ERROR$2:case Z_DATA_ERROR$2:case Z_NEED_DICT$1:case Z_MEM_ERROR$1:this.onEnd(status);this.ended=true;return false;}// Remember real `avail_out` value, because we may patch out buffer content
// to align utf8 strings boundaries.
last_avail_out=strm.avail_out;if(strm.next_out){if(strm.avail_out===0||status===Z_STREAM_END$3){if(this.options.to==='string'){let next_out_utf8=strings.utf8border(strm.output,strm.next_out);let tail=strm.next_out-next_out_utf8;let utf8str=strings.buf2string(strm.output,next_out_utf8);// move tail & realign counters
strm.next_out=tail;strm.avail_out=chunkSize-tail;if(tail)strm.output.set(strm.output.subarray(next_out_utf8,next_out_utf8+tail),0);this.onData(utf8str);}else {this.onData(strm.output.length===strm.next_out?strm.output:strm.output.subarray(0,strm.next_out));}}}// Must repeat iteration if out buffer is full
if(status===Z_OK$3&&last_avail_out===0)continue;// Finalize if end of stream reached.
if(status===Z_STREAM_END$3){status=inflate_1.inflateEnd(this.strm);this.onEnd(status);this.ended=true;return true;}if(strm.avail_in===0)break;}return true;};/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/Inflate.prototype.onData=function(chunk){this.chunks.push(chunk);};/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/Inflate.prototype.onEnd=function(status){// On success - join
if(status===Z_OK$3){if(this.options.to==='string'){this.result=this.chunks.join('');}else {this.result=common.flattenChunks(this.chunks);}}this.chunks=[];this.err=status;this.msg=this.strm.msg;};/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/function inflate$1(input,options){const inflator=new Inflate(options);inflator.push(input);// That will never happens, if you don't cheat with options :)
if(inflator.err)throw inflator.msg||messages[inflator.err];return inflator.result;}/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/function inflateRaw(input,options){options=options||{};options.raw=true;return inflate$1(input,options);}/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/var Inflate_1=Inflate;var inflate_2$1=inflate$1;var inflateRaw_1=inflateRaw;var ungzip=inflate$1;var constants$2=constants;var inflate_1$1={Inflate:Inflate_1,inflate:inflate_2$1,inflateRaw:inflateRaw_1,ungzip:ungzip,constants:constants$2};const{Deflate:Deflate$1,deflate:deflate$2,deflateRaw:deflateRaw$1,gzip:gzip$1}=deflate_1$1;const{Inflate:Inflate$1,inflate:inflate$2,inflateRaw:inflateRaw$1,ungzip:ungzip$1}=inflate_1$1;var Deflate_1$1=Deflate$1;var deflate_1$2=deflate$2;var deflateRaw_1$1=deflateRaw$1;var gzip_1$1=gzip$1;var Inflate_1$1=Inflate$1;var inflate_1$2=inflate$2;var inflateRaw_1$1=inflateRaw$1;var ungzip_1=ungzip$1;var constants_1=constants;var pako={Deflate:Deflate_1$1,deflate:deflate_1$2,deflateRaw:deflateRaw_1$1,gzip:gzip_1$1,Inflate:Inflate_1$1,inflate:inflate_1$2,inflateRaw:inflateRaw_1$1,ungzip:ungzip_1,constants:constants_1};

customElements.define('timeline-scrubber',TimelineScrubber);customElements.define('timeline-gauge',TimelineGauge);customElements.define('timeline-events',TimelineEvents);customElements.define('timeline-view',TimelineView);customElements.define('timeline-item',TimelineItem);customElements.define('timeline-group',TimelineGroup);customElements.define('timeline-spans',TimelineSpans);customElements.define('timeline-span',TimelineSpan);customElements.define('timeline-span-summary',TimelineSpanSummary);customElements.define('timeline-heading',TimelineHeading);customElements.define('query-pipeline',QueryPipeline);class PerfInspectApplication{constructor(viewElementId,detailElementId,pipelineInputId){this.dataSource=null;this.dataCache={};this.detailElement=document.getElementById(detailElementId);this.viewElement=document.getElementById(viewElementId);this.queryPipeline=document.getElementById(pipelineInputId);this.viewElement.loading=false;this.queryPipeline.addEventListener('run-query',event=>{let customEvent=event;let parsedQuery=customEvent===null||customEvent===void 0?void 0:customEvent.detail.parsedQuery;this.runQuery(parsedQuery);});this.viewElement.addEventListener('highlight-changed',event=>{if(!this.dataSource)return;let customEvent=event;let newItem=customEvent===null||customEvent===void 0?void 0:customEvent.detail.highlightedItem;this.detailElement.clearTabs();if(newItem){let section=newItem.data.section;let track=newItem.data.track;switch(track.trackType){case PerfDataTrackType.SpanSummary:let subItems=this.dataSource.getTracksForSection(this,section,track);let spanData=subItems.map(track=>{return {track:track,spanData:this.dataSource.getSpanDataForTrack(this,section,track)};});let el=new SpanSummaryDetailTab(spanData);el.addEventListener('request-timeslice',e=>{let ce=e;let spanId=ce.detail.span;this.queryPipeline.appendQueryPipe('timeslice span.id='+spanId);});this.detailElement.addTab('Child Span Overview',el);break;case PerfDataTrackType.Span:let oneSpanData=this.dataSource.getSpanDataForTrack(this,section,track);let sd=new SpanDetailTab(track,oneSpanData);sd.addEventListener('request-timeslice',e=>{let ce=e;let spanId=ce.detail.span;this.queryPipeline.appendQueryPipe('timeslice span.id='+spanId);});this.detailElement.addTab('Span Detail',sd);let stackDataSource=this.dataSource.getStackDataForTrack(this,section,track);let stackScopes=stackDataSource.getStackScopes();if(stackScopes.includes(tracecap.SampleScope.VM_RUBY)){let prof=new StackProfileDetailTab(track,oneSpanData,stackDataSource,tracecap.SampleScope.VM_RUBY);this.detailElement.addTab('Ruby Profile',prof);}break;}}});this.reloadData();}placeElementsUnder(section,parent,parentTrack,subItems){if(!this.dataSource)return;subItems||(subItems=this.dataSource.getTracksForSection(this,section,parentTrack));let timeBounds=this.dataSource.getTimeBounds(this);subItems.forEach(track=>{if(!this.dataSource)return;let trackItem=new TimelineItem(track.name);trackItem.data={section:section,track:track};trackItem.itemId=track.id;if(track.description)trackItem.description=track.description;if(track.color)trackItem.classList.add(track.color);switch(track.trackType){case PerfDataTrackType.Span:let spanData=this.dataSource.getSpanDataForTrack(this,section,track);let span=new TimelineSpan();span.start=RenderUtils.longAsMillisecond(spanData.timeRange.start.sub(timeBounds.start));span.duration=RenderUtils.longAsMillisecond(spanData.timeRange.duration);if(spanData.queueTime){span.queued=RenderUtils.longAsMillisecond(spanData.queueTime);}trackItem.append(span);break;case PerfDataTrackType.SpanSummary:let spanSummary=new TimelineSpanSummary();spanSummary.spanGroupId=track.id;trackItem.append(spanSummary);trackItem.classList.add('item-nest-tight');break;case PerfDataTrackType.Gauge:let samples=this.dataSource.getTimeseriesDataForTrack(this,section,track);let gauge=new TimelineGauge();samples.data_points.forEach(sample=>{sample.time=sample.time.sub(timeBounds.start).div(1000000);});gauge.samples=samples;trackItem.append(gauge);break;default:break;}let subItems=this.dataSource.getTracksForSection(this,section,track);if(subItems.length>0){trackItem.subgroup=track.id;let trackGroup=new TimelineGroup();trackGroup.classList.add('item-nest-tight');trackGroup.classList.add('item-nest-borderless');trackGroup.id=track.id;parent.append(trackItem);parent.append(trackGroup);trackItem.setExpanded(false);this.placeElementsUnder(section,trackGroup,track,subItems);}else {parent.append(trackItem);}trackItem.recoverExpansion();});}async loadFile(name){if(!this.dataCache[name]){let uri=window.location.pathname.split('/');this.viewElement.loading=true;const resp=await fetch("/"+uri[1]+"/"+uri[2]+"/ui/data-load/"+name+".tcap");const blobData=await resp.arrayBuffer();const dat=new Uint8Array(blobData);const output=pako.inflate(dat);this.dataCache[name]=tracecap.TraceFile.decode(output);this.viewElement.loading=false;}return this.dataCache[name];}async loadDataForQuery(query){let loaders=query.map(command=>{if(command.command=='load'){return this.loadFile(command.args[0]);}});return Promise.all(loaders);}async runQuery(query){await this.loadDataForQuery(query);let dataSource=null;let loadedFile=null;query.forEach(command=>{if(command.command=='load'){loadedFile=this.dataCache[command.args[0]];dataSource=new BasePerfDataSource(loadedFile);}else if(dataSource&&loadedFile&&command.command=='timeslice'){dataSource=new SlicedPerfDataSource(dataSource,loadedFile,command);}});if(dataSource){this.dataSource=dataSource;this.reloadData();this.zoomToDataTimeRange();}}reloadData(){if(!this.dataSource)return;this.viewElement.innerHTML='';this.dataSource.getSections(this).forEach(section=>{this.viewElement.append(new TimelineHeading(section.title));this.placeElementsUnder(section,this.viewElement);});this.viewElement.updated();}zoomToDataTimeRange(){if(!this.dataSource)return;let timeRange=this.dataSource.getTimeBounds(this);let viewWidth=this.viewElement.viewDisplayWidth;let displayedBounds=RenderUtils.longAsMillisecond(timeRange.duration);this.viewElement.widthPerMillisecond=viewWidth/displayedBounds;}}var app=new PerfInspectApplication('main-app-view','timeline-detail','main-pipeline-input');
