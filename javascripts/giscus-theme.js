function setGiscusTheme() {
  const scheme = document.body.getAttribute("data-md-color-scheme");
  const iframe = document.querySelector("iframe.giscus-frame");

  if (!iframe) return;

  const theme = scheme === "slate" ? "dark" : "light";

  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: theme
        }
      }
    },
    "https://giscus.app"
  );
}

// 页面加载后执行
document.addEventListener("DOMContentLoaded", setGiscusTheme);

// 监听主题变化
const observer = new MutationObserver(setGiscusTheme);
observer.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
