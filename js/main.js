// var scroll = new SmoothScroll('a[href*="#"]',{
//     speed:300
// });

var app = new Vue({
    el: '#app',
    data: {
        instituteName: 'Prabha Institute of Civil Services',
        instituteLogo: './assets/logo.png',
        instituteNumber: "9810651005",
        whatsappNumber: "919972968390",
        whatsappMessage: "I want to join online classes at Prabha Institute of Civil Services",
        instituteCode: "PICS1005",
        latitude: "28.711291",
        longitude: "77.215991",
        mapquery: "28.711291, 77.215991",
        books:[
            {
                image:"./assets/b1.jpg",
                title:"POLITY NCERT SAAR (VI-XII) in English",
                url: "https://www.amazon.in/POLITY-NCERT-SAAR-VI-XII-English/dp/9383315644/ref=sr_1_1?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-1"
            },
            {
                image:"./assets/b2.jpg",
                title:"History(Hindi) N.C.E.R.T SAR",
                url:"https://www.amazon.in/History-Hindi-N-C-R-T-SAR/dp/8192756513/ref=sr_1_2?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-2"
            },
            {
                image:"./assets/b3.jpg",
                title:"Vastunist Ncert Saar (VI-XII)",
                url:"https://www.amazon.in/Vastunist-Ncert-Saar-VI-XII-Lohiya/dp/B07VNW515H/ref=sr_1_3?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-3"
            },
            {
                image:"./assets/b4.jpg",
                title:"Rajvaystha(NCERT SAAR,VI-XII)",
                url: "https://www.amazon.in/Rajvaystha-NCERT-VI-XII-Lohiya-Manoj/dp/819275653X/ref=sr_1_4?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-4"
            }
        ],
        banners: [
            {
                image: "https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1559640610634.jpg",
                action: ""
            },
            {
                image: "https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1559647354580.jpg",
                action: ""
            },
            {
                image: "https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1567695708811.jpg",
                action: "https://docs.google.com/forms/d/e/1FAIpQLSdLgRya_3ZFzmUzwSbIRSeWFly85G6p47pKWAoJrvDsvpOcKg/viewform?usp=sf_link"
            }
        ],
        videos: [
            {
                youtubeId: "xKwRrPbReMw",
                title: "Pub. Ad. Strategy",
                subtitle: "BPSC 65 Mains",
                message: "Atul Lohiya sir's lecture on Pub. Ad. Strategy for BPSC 65 Mains"
            },
            {
                youtubeId: "TOlnpKopaDo",
                title: "Mugal Kaleen Administration",
                subtitle: "UPSC 2020",
                message: "Atul Lohiya sir's lecture on Mugal Kaleen Administration for UPSC 2020"
            },
            {
                youtubeId: "2WhIONVlSgs",
                title: "Mitigation - Disaster Management",
                subtitle: "UPSC 2020",
                message: "Akashi Lohiya madam's Lecture on Mitigation - Disaster Management for UPSC 2020"
            }
        ],
        downloads: [
            // {
            //     name: "मूल अवधारणाएँ/प्रस्तावना",
            //     url: "https://mobishaala.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/ebook/dc3f74c0-c807-4eca-8c9a-cd169e51070a/file/Notes_1.pdf"
            // },
            // {
            //     name: "प्रशासनिक चिंतन",
            //     url: "https://mobishaala.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/ebook/e2e1c8b2-bbcb-491d-9724-35b2fce7c1da/file/Notes_2.pdf"
            // },
            // {
            //     name: "संगठन के नियम एवं संगठन",
            //     url: "https://mobishaala.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/ebook/6a5e21cb-9d6b-4192-92f7-997366b7aa8b/file/Notes_3.pdf"
            // },
            // {
            //     name: "प्रशासनिक व्यवहार",
            //     url: "https://mobishaala.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/ebook/3fab06b5-6c84-49a4-b951-c6c785a4e52f/file/Notes_4.pdf"
            // }
        ],
        courses: [
            {
                name: "Pub Ad | UPSC UPPCS BPSC",
                description: "We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series.",
                image: "./assets/cc1.jpg",
            },
            {
                name: "Ethics | UPSC UPPCS",
                description: "We provide online and offline courses for Ethics, UPSC UPPCS, in the form of Classroom Lecture, Study material and Test Series.",
                image: "./assets/cc2.jpg",
            },
            {
                name: "Disaster Management | UPSC UPPCS",
                description: "We provide online and offline courses for Disaster Management   subject, UPSC UPPCS, in the form of Classroom Lecture, Study material and Test Series.",
                image: "./assets/cc3.jpg",
            },
            {
                name: "हिंदी साहित्य | UPPCS, BPSC",
                description: "We provide online and offline courses for हिंदी साहित्य, UPPCS, BPSC, in the form of Classroom Lecture, Study material and Test Series.",
                image: "./assets/cc4.jpg",
            },
            {
                name: "NCERT | SAAR",
                description: "We provide online and offline courses for NCERT, SAR, in the form of Classroom Lecture, Study material and Test Series.",
                image: "./assets/cc5.jpg",
            }
        ],
        testimonies: [
            {
                text: "A cookie associated with a cross-site resource at <URL> was set without the `SameSite` attribute.",
                author: "Anik Raj, BPSC Rank 1"
            },
            {
                text: "A cookie associated with a cross-site resource at <URL> was set without the `SameSite` attribute.",
                author: "Anik Raj, BPSC Rank 1"
            },
            {
                text: "A cookie associated with a cross-site resource at <URL> was set without the `SameSite` attribute.",
                author: "Anik Raj, BPSC Rank 1"
            },
            {
                text: "A cookie associated with a cross-site resource at <URL> was set without the `SameSite` attribute.",
                author: "Anik Raj, BPSC Rank 1"
            },
            {
                text: "A cookie associated with a cross-site resource at <URL> was set without the `SameSite` attribute.",
                author: "Anik Raj, BPSC Rank 1"
            }
        ],
        toppers: [{
                name: "Anik",
                subtext: "Rank 1",
                image: "https://anikrajc.com/img/dp.jpg"
            },
            {
                name: "Anik",
                subtext: "Rank 1",
                image: "https://anikrajc.com/img/dp.jpg"
            },
            {
                name: "Anik",
                subtext: "Rank 1",
                image: "https://anikrajc.com/img/dp.jpg"
            },
            {
                name: "Anik",
                subtext: "Rank 1",
                image: "https://anikrajc.com/img/dp.jpg"
            },
            {
                name: "Anik",
                subtext: "Rank 1",
                image: "https://anikrajc.com/img/dp.jpg"
            },
            {
                name: "Anik",
                subtext: "Rank 1",
                image: "https://anikrajc.com/img/dp.jpg"
            },
            {
                name: "Anik",
                subtext: "Rank 1",
                image: "https://anikrajc.com/img/dp.jpg"
            },
            {
                name: "Anik",
                subtext: "Rank 1",
                image: "https://anikrajc.com/img/dp.jpg"
            },
            {
                name: "Anik",
                subtext: "Rank 1",
                image: "https://anikrajc.com/img/dp.jpg"
            },
            {
                name: "Anik",
                subtext: "Rank 10",
                image: "https://anikrajc.com/img/dp.jpg"
            }
        ]
    },
    mounted() {

        var bannerCarousel = M.Carousel.init(this.$refs.bannerCarousel, {
            fullWidth: true,
            indicators: true,
            padding: 100,
            // shift: 0,
            // numVisible: 3,
            // dist: 0
        });
        var testimonyCarousel = M.Carousel.init(this.$refs.testimonyCarousel, {
            fullWidth: true,
            indicators: true,
            padding: 100
        });
        var videoCarousel = M.Carousel.init(this.$refs.videoCarousel, {
            fullWidth: true,
            indicators: true,
            padding: 100
        });
        var topperCarousel = M.Carousel.init(this.$refs.topperCarousel, {
            fullWidth: false,
            indicators: false,
            padding: -100,
            shift: 0,
            numVisible: 15,
            dist: 0
        });

        setInterval(() => {
            bannerCarousel.next()
        }, 5000)

        // setInterval(() => {
        //     testimonyCarousel.next()
        // }, 5000)

        // setInterval(() => {
        //     topperCarousel.next()
        // }, 2000)

    },
    methods:{
        openLink(link){
            if(link && link != '')
                window.open(link,"_blank")
        }
    }
})