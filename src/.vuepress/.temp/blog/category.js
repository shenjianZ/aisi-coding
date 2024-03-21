export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/使用指南/","indexes":[0]},"WEB":{"path":"/category/web/","indexes":[0]},"HTML":{"path":"/category/html/","indexes":[0]},"project":{"path":"/category/project/","indexes":[1,2]},"Linux":{"path":"/category/linux/","indexes":[3]},"MySQL":{"path":"/category/mysql/","indexes":[4]},"CacheDatabase":{"path":"/category/cachedatabase/","indexes":[5]},"webServer":{"path":"/category/webserver/","indexes":[6]}}}},"tag":{"/":{"path":"/tag/","map":{"project.ts":{"path":"/tag/project.ts/","indexes":[7]},"backend":{"path":"/tag/backend/","indexes":[1]},"frontend":{"path":"/tag/frontend/","indexes":[2]},"Springboot":{"path":"/tag/springboot/","indexes":[8]},"linux":{"path":"/tag/linux/","indexes":[9,3]},"shell":{"path":"/tag/shell/","indexes":[3]},"mysql":{"path":"/tag/mysql/","indexes":[10,4]},"redis":{"path":"/tag/redis/","indexes":[11,5]},"nginx":{"path":"/tag/nginx/","indexes":[12,6]},"Java":{"path":"/tag/java/","indexes":[13]},"dbs":{"path":"/tag/dbs/","indexes":[14,15]},"dv":{"path":"/tag/dv/","indexes":[16]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

