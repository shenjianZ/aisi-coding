      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[9,10,17,8,11,12,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,7,1,2,3,4,5,6,13,14,16,15,0]}},"star":{"/":{"path":"/star/","indexes":[9,10,17,8,3,4,11,5,6,12]}},"timeline":{"/":{"path":"/timeline/","indexes":[18,19,9,10,17,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,7,1,2,8,3,4,11,5,6,12,13,14,16,15,0]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      