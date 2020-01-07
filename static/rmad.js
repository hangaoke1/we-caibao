var style = document.createElement('style');
style.innerHTML=`
.follow, .item-tab, .search-league, .icon-return, .sk-point, .sk-btips {
  display: none!important;
}

.navigator ul li:nth-last-of-type(1) {
  display: none!important;
}

.switch-box {
  bottom: 3.5rem!important;
}

.refresh-box {
  bottom: 2.1rem!important;
}
`;
document.getElementsByTagName('HEAD').item(0).appendChild(style);
