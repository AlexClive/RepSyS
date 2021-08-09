// 基于准备好的dom，初始化echarts实例
var expert_main = echarts.init(document.getElementById('expert_main'));
var svgPath = "data:image/png;base64,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"
var svgPath1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAEuElEQVRYhb2YbWxTVRjHf7frSte5des69hoWcYxBHKKMsYhotmQjCh8mA6I4lEQlkEyiMRAFjUFM9ItCTIjBxJdoCDKXiYoGzZQsChmDZQjMDSZ7f7W1dHbtur764bSzG23vLTD+SXObe//nnN+9597nPOeRLhTuIUapgRXAA0AuYADcgB3oA64BrcBErB2HDqBUDwK7gCogRcbrAdqAU0AdcCUWKJUCzwLgG8Tdb1MABOJmVwJvApeBL4DkOwW1BXGXVYCktNMw2gpcAApvF+oAcBRIug2YUC0CzgJltwr1DvDGHYIJVSpwEhmwcFAvAvvmACgoHQLs0UiG2VDLgA/nECgoHfAdEd4x9az/nwNauR4TFmeR/lQpSaX5aDL1SHEqPJYJ7O1DmOvOMd7UqQRMDzQAxYAjEtQORCyKKEkdR+7uJ5j/7CMATLT2YP2lHf+Um4SCTJJW3UdK+VJszdfp3VuHa8QqB7YEeB/YOWOcQETXAd1ARsTmKomFB58htbKIf75tZeRwI1MDlhmWuCQt6ZtXkfPq47iGrVx97giuoRtyYH7gMeC36aECx61RgYCcXZWkVhYxdOgnel+ruwkIwGtzMvpJE9e2fUx8pp6FH2xBio+Tg5IQT2s6DgahXojWal6ugcztZVgbrzB65Fe5QbC1dDNw4ASJyxZg3FAs60dE//WhUIsQL1tEGTevAkli6OApJQMAYDp+Duf1MdJrVoOkaDGoDYWSDf3JawqY/GsMZ7dJMRSAtbGdhPwMNNlKlksqEFkHKhSEAG2ekcmO4ZiAAJw9ZgA0GXoldonAFKoAs7xdEt9IjPL7ff8Pp0xrglAdcs6pQQvagqgfZ1hp84wAuE02pU2KglCjiBgVUbazXegKs9HkpMYEpS9birPXzNTgzeEjgjKDUADHoznN9ecByNpRrhgopeJ+dEuyMde3gE/x3OtDob6M5pzsGsV0rBnjxhKMm0pke9YVZpO3fwP2P/oxHT2rFAhAA6QFoTqAlmjugfe+x9Z8nby3q8ndvQ61IfEmj6SOI61qBYuP7kSdmoj773/xOd2xQAEkSiG7mY3A19HcKp2GvP3VGNYvx+dwYT39J47Lg/hcHrT3pqMvW8K8XAP2S/3YLw0wv2Y1lh8u0rPnq1imMDk0S2hAJPlFkdw+h4ue3cewnGzDWL2S5IcXYVi3XFybdOHoGGbs0ybM9efxu714rA6yayvwe7z07avH7/XJAXUBtlAoH/A6IiuMqvGmTsabOlFp41Eb7kFSq/DcsOO1OWf4Rg434vf4yHl5LaoEDf1vNeCxOiL0CsCPAHHbjatnk2YhsxYG5ff48NqceMcn8bs8YT0TrT1IkkTak8X4nG4mWnsidgc8D5ikMDtkDfAzIse5m6oHNkH4jYMrcLHvLgI5gOmnE2mLZQLWBo53Q7XA9LxG24xeBSqZe7CPgM9CT8ht2y8i3q25msoG4KXZJ5UUODqAUuDMHQaqA54GvLcCBSKTKAPeRZR5bleHAkCucBeVQoEojO0FSoDTtwgzAtQAryCCdVjFAhVUG1COyBJPIGDlNIgomBQgKjlRFUslb7Z+D/z0iKl9CMhHFNVcgAWxlp4BzhNDQv0fsZ5nh9bYO6kAAAAASUVORK5CYII=";
var svgPath2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAACzElEQVRYhcXZSYgUZxiA4ad7QkSJRm8qYkJkwIioiApiyMGDSgIhQcaDIEgC4kWMonhwg7icI4HEBUREUBLIIUgic/Ak4opCUFBBcFAILoiOCjqLHv6uyTjdVVZVV1kvNF3Lv7xdW3/fV7XBi11yMAVf4HN0YiLGNfY9xRPcw21cx1X8l2ci+CBD28n4ASswM8dcF/ArTuBllo71FG0m4QDu4Cf5BGEBjuAmVqWcmxQN1+IG1sh21JOYiqM4j1lpOsRJjmoM9BvGFqLWzDzhEliPWlLDVpJj8JdwSspmFH7GYXwY12ikZAeOY0l5Xi1ZjT/FiI6U3IVvShaK42sc0+LUD5dciC3vyyiGLmwbuTGS7BCeYakfCyWyU7iphoikVmJOIVN8vDB88tOBQ4YdsGjhx3ZGHU6tc4Na54Z2h5mD76KVOmZjbrujlsDmaKGOpRWKJLEAnxEkp1XrEksN3xIkJ1TrksgigmRvxSJJTCdENj15etfm/Z5r/+tLK7JMM5kgeSlLryF6b7XePrYzeX82xkNt8GLXR3goRCRtEx3BjEcsiXodz/BPUSOWwLjoH2d/pRrJPIsku3G5SpMY+jAQSb7Gjgpl4njE26HZ3zhYjUssPTRngOswQ0j8c1HgXQ3XaA5yX2E57hY5UxtcpXUkfh9faVwPFXOZ+HThXyExevHedJp5hHMk5zTnhei4KtGTGODdiVe36kT/iBbSZIfdQvT+uDSdZnpwKlpJm8KeER5Ld8owasEejVNNtjz7OubjdNFGI7gm1IaGyFoMeCCc+t2G/dIC6cf3je8h8lQs+rEdXwq1yyLZKJQD36KdsspZoQi6VYhJ22UPfmm1o93azyvsFdLifXieY4w+oYLSVKiKKKpAdb8x0VRs0ggMUnBFuGz2JTWq5XxFkoZPsQyLhdrOJ/4vkl5oiJ3A4LsGKlOyFaMFqUyvSN4ArxmBDS1zT7QAAAAASUVORK5CYII=";
var svgPath3 = "data:image/png;base64,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";
var svgPath4 = "data:image/png;base64,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";
var svgPath5 = "data:image/png;base64,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";
var svgPath6 = "data:image/png;base64,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";
// 指定图表的配置项和数据
var nodes = [
    {
        x: 1000,
        y: 950,
        nodeName: {
            name: '康君平1',
            hospital: '北京大学第一医院'
        },
        svgPath: svgPath,
        symbolSize: 115,
        FontSize: "24px"
    },
    {
        x: 850,
        y: 450,
        nodeName: {
            name: '康君平2',
            hospital: '北京大学第一医院'
        },
        svgPath: svgPath,
        symbolSize: 102,
        FontSize: "18px"
    },
    {
        x: 1000,
        y: 100,
        nodeName: {
            name: '康君平3',
            hospital: '北京大学第一医院'
        },
        svgPath: svgPath,
        symbolSize: 82,
        FontSize: "18px"
    },
    {
        x: 600,
        y: 900,
        nodeName: {
            name: '康君平4',
            hospital: '北京大学第一医院'
        },
        svgPath: svgPath,
        symbolSize: 82,
        FontSize: "18px"
    },
    {
        x: 500,
        y: 450,
        nodeName: {
            name: '康君平5',
            hospital: '北京大学第一医院'
        },
        svgPath: svgPath,
        symbolSize: 118,
        FontSize: "24px"
    },
    {
        x: 300,
        y: 1000,
        nodeName: {
            name: '康君平6',
            hospital: '北京大学第一医院'
        },
        svgPath: svgPath,
        symbolSize: 96,
        FontSize: "18px"
    },
    {
        x: 100,
        y: 600,
        nodeName: {
            name: '康君平7',
            hospital: '北京大学第一医院'
        },
        svgPath: svgPath,
        symbolSize: 82,
        FontSize: "16px"

    },
    {
        x: 250,
        y: 100,
        nodeName: {
            name: '康君平8',
            hospital: '北京大学第一医院'
        },
        svgPath: svgPath,
        symbolSize: 73,
        FontSize: "16px"
    },
    {
        x: 700,
        y: 0,
        nodeName: {
            name: '康君平9',
            hospital: '北京大学第一医院'
        },
        svgPath: svgPath,
        symbolSize: 82,
        FontSize: "16px"
    },
    {
        x: 320,
        y: 390,
        nodeName: {
            name: '',
            hospital: ''
        },
        svgPath: svgPath1,
        symbolSize: 46
    },
    {
        x: 460,
        y: 800,
        nodeName: {
            name: '',
            hospital: ''
        },
        svgPath: svgPath2,
        symbolSize: 46
    },
    {
        x: 810,
        y: 840,
        nodeName: {
            name: '',
            hospital: ''
        },
        svgPath: svgPath3,
        symbolSize: 46
    },
    {
        x: 700,
        y: 280,
        nodeName: {
            name: '',
            hospital: ''
        },
        svgPath: svgPath6,
        symbolSize: 46
    },
    {
        x: 1000,
        y: 500,
        nodeName: {
            name: '',
            hospital: ''
        },
        svgPath: svgPath4,
        symbolSize: 46
    },
    {
        x: 500,
        y: 150,
        nodeName: {
            name: '',
            hospital: ''
        },
        svgPath: svgPath5,
        symbolSize: 46
    },
];
var charts = {
    nodes: [],
    linesData: [
        {
            coords: [
                [1000, 1000],
                [850, 500],
                [1000, 100],
            ]
        },
        {
            coords: [
                [100, 600],
                [300, 1000],
                [600, 900],
                [1000, 1000],
            ]
        },
        {
            coords: [
                [100, 600],
                [240, 120],
                [700, 0],
                [980, 100],
            ]
        },
        {
            coords: [
                [100, 600],
                [500, 450],
                [600, 900]
            ]
        },
        {
            coords: [
                [500, 450],
                [850, 500],
            ]
        },
        {
            coords: [
                [500, 450],
                [700, 0],
            ]
        }
        ,
        {
            coords: [
                [500, 450],
                [220, 110],
            ]
        }
    ]
};
for (var j = 0; j < nodes.length; j++) {
    //var {x, y, nodeName, svgPath, symbolSize} = nodes[j];
    var x = nodes[j]["x"];
    var y = nodes[j]["y"];
    var nodeName = nodes[j]["nodeName"];
    var svgPath = nodes[j]["svgPath"];
    var symbolSize = nodes[j]["symbolSize"];
    var hospital = nodeName["hospital"];
    var FontSize = nodes[j]["FontSize"];
    if (hospital.length > 5) {
        hospital = hospital.slice(0, 5) + "\n" + hospital.slice(5);
    }
    var node = {
        nodeName: nodeName["name"],
        hospital: hospital,
        value: [x, y],
        symbolSize: symbolSize || 120,
        symbol: 'image://'+svgPath,
        itemStyle: {
            normal: {
            },
        },
        label: {
            fontSize: FontSize,
            color: '#544a69'
        }
    };
    charts.nodes.push(node)
}
var option = {
    xAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
    yAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
    series: [{
        type: 'graph',
        coordinateSystem: 'cartesian2d',
        label: {
            show: true,
            position: '',
            color: '#fffff',
            fontSize: '12px',
            formatter: function (item) {
                var str = '{a|' + item.data.nodeName + '}' + '\n' + '{b|' + item.data.hospital + '}';
                return str;
            },
            rich: {
                a: {
                    color: '#544a69',
                    fontFamily: 'AdobeHeitiStd-Regular',
                    fontSize: 16,
                    lineHeight: 18,
                    align: 'center'
                },
                b: {
                    color: '#ffffff',
                    fontFamily: 'AdobeHeitiStd-Regular',
                    fontSize: 12,
                    align: 'center',
                    lineHeight: 18
                }
            }
        },
        data: charts.nodes,
    }, {
        type: 'lines',
        polyline: true,
        coordinateSystem: 'cartesian2d',
        lineStyle: {
            width: 1,
            color: '#d5d5f1',
            curveness: 0.5

        },
        data: charts.linesData
    }]
};
// 使用刚指定的配置项和数据显示图表。
expert_main.setOption(option);
