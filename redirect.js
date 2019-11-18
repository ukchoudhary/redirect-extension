var title = document.getElementsByTagName('head')[0].querySelector('title').innerText;
var desc = getMeta('description');
if(desc.includes('videos') || title.includes('videos')){
    window.location.href = 'https://www.google.com';
}

function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
  
    return '';
  }
