var Teams=function(e){this.name=ko.observable(e.name),this.stadium=ko.observable(e.stadium),this.lat=ko.observable(e.lat),this.lng=ko.observable(e.lng),this.conference=ko.observable(e.conference),this.visible=ko.observable(!0)},appViewModel=function(){var e=this;this.query=ko.observable(""),this.teamList=ko.observableArray([]),this.liveSearch=function(t){e.teamList().forEach(function(t){t.name().toLowerCase().indexOf(e.query().toLowerCase())>=0?t.visible(!0):t.visible(!1)})},this.createTeamList=function(){for(var t=0;t<teamData.length;t++)e.teamList.push(new Teams(teamData[t]))},this.filter=function(t){for(var a=0;a<teamData.length;a++)teamData[a].conference===t&&e.teamList.push(new Teams(teamData[a]))},this.filterWest=function(){e.teamList.removeAll(),e.query(""),e.filter("west")},this.filterEast=function(){e.teamList.removeAll(),e.query(""),e.filter("east")},this.filterAll=function(){e.teamList.removeAll(),e.query(""),e.createTeamList()},this.map,this.initMap=function(){var t={center:{lat:37.8,lng:-101.5},zoom:5,mapTypeControl:!1,streetViewControl:!1};e.map=new google.maps.Map(document.getElementById("map"),t)},this.createTeamList(),this.initMap()},init=function(){ko.applyBindings(new appViewModel)};$(document).ready(function(){$("#sidebar-btn").on("click",function(){$("#sidebar").toggleClass("visible")})});