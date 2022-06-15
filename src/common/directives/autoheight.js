const autoheight = {
    update(el, binding, vnode) {
        if (el && el.offsetHeight < el.scrollHeight) {
            el.style.height = `${el.scrollHeight}px`
        }
    },
    unbind(el, binding, vnode) {
      
    }
  };
  
  export default _.cloneDeep(autoheight);