$(function () {
  $(".slide_wrap").slick({
    dots: true, //네이베이션 사용여부
    arrows: false, //화살표 사용여부
    autoplay: true, //자동넘김
    autoplaySpeed: 500, //자동넘김 속도
    pauseOnHover: true, //마우스 오버시 자동재생 멈춤
    fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 1500, // 슬라이드 속도
    infinite: true, // 무한슬라이
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    swipe: true, //스와이프
    focusOnSelect: true, //슬라이드 선택시 넘어
    draggable: true,
    initialSlide: 0, //슬라이드 시작순서
    variableWidth: false,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
    responsive: [
      //반응형 적용여부
      {
        breakpoint: 767, //해상도 브레이크 포인트 설정
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          fade: true,
          autoplay: true, //자동넘김
        },
      },
    ],
  });

  // sec1 Click Event
  $(function () {
    $(".black").click(function () {
      $(this).css({
        color: "#fff",
        transition: "0.5s",
      });
      $(".light").css({
        color: "#fff",
        transition: "0.5s",
      });
      $(".header").css({
        background: "#000",
        transition: "0.5s",
      });
      $(".header .gnb a").css({
        color: "#fff",
        transition: "0.5s",
      });
      $(".header .logo").css({
        background: "url(image/common/logo-w.png) no-repeat center",
        transition: "0.5s",
      });
      $(".sec1").css({
        background: "url(image/main/section1_bg-black.png) no-repeat center",
        transition: "0.5s",
      });
    });

    $(".light").click(function () {
      $(this).css({
        color: "",
        transition: "0.5s",
      });
      $(".black").css({
        color: "",
        transition: "0.5s",
      });
      $(".header").css({
        background: "",
      });
      $(".header .gnb a").css({
        color: "",
        transition: "0.5s",
      });
      $(".header .logo").css({
        background: "",
        transition: "0.5s",
      });
      $(".sec1").css({
        background: "",
        transition: "0.5s",
      });
      $(this).hover(function () {
        $(this).css({
          color: "red",
        });
      });
    });
  });

  let imageValue = 0;
  $(".change-image").on("mouseenter", function () {
    if (imageValue === 0) {
      $(this).css({
        background: "url('./image/main/section1_img2.png') no-repeat center",
      });
    }

    if (imageValue === 1) {
      $(this).css({
        background: "url('./image/main/section1_img3.png')",
      });
    }

    if (imageValue === 2) {
      $(this).css({
        background: "url('./image/main/section1_img4.png')",
      });
    }

    if (imageValue === 3) {
      $(this).css({
        background: "",
      });
      imageValue = 0;
    }

    imageValue++;
    console.log(imageValue);
  });

  $(function () {
    const headerHeight = $(".header").outerHeight();
    const sc2_offset = $(".sec2").offset().top;
    const sec4_offset = $(".sec4").offset().top;
    const sec4_crack_offset = $(".sec4-crack").offset().top;
    const sc4_box_offset = $(".sec4_plus").offset().top;
    const sec5_first_offset = $(".sec5 .sec5_first").offset().top;
    const sec5_second_offset = $(".sec5 .sec5_second").offset().top;

    $(window).scroll(function () {
      const scrollTop = $(this).scrollTop();
      $(".pos").text(scrollTop);

      //   Header, Top btn
      if (scrollTop >= sc2_offset - headerHeight) {
        $(".header").css({
          display: "none",
        });
      } else {
        $(".header").css({
          display: "",
        });
      }
      if (scrollTop >= sc2_offset - innerHeight * 0.2) {
        $(".top_btn").css({
          opacity: "1",
        });
      } else {
        $(".top_btn").css({
          opacity: "0",
        });
      }
      // Crack Effect
      if (scrollTop >= sec4_crack_offset - innerHeight * 0.8) {
        $(".crack1").css({
          transform: "translate(0, 0)",
        });
      }
      if (scrollTop >= sec4_crack_offset - innerHeight * 0.6) {
        $(".crack2").css({
          transform: "translate(0, 0)",
        });
      }
      if (scrollTop >= sec4_crack_offset - innerHeight * 0.4) {
        $(".crack3").css({
          transform: "translate(0, 0)",
        });
      }
      if (scrollTop >= sec4_crack_offset - innerHeight * 0.2) {
        $(".crack4").css({
          transform: "translate(0, 0)",
        });
      }
      if (scrollTop >= sec4_crack_offset - innerHeight * 0.4) {
        $(".crack-des").css({
          transform: "translateY(0)",
          opacity: "1",
        });
      }

      // ..sec5
      if (scrollTop >= sc4_box_offset) {
        let sec4_scrollValue = sc4_box_offset - scrollTop;

        $(".sec4_plus .leftArea").css({
          transform: "translateY(" + sec4_scrollValue * 0.3 + "px)",
        });

        $(".sec4_plus .centerArea").css({
          transform: "translateY(" + sec4_scrollValue * 0.9 + "px)",
        });

        $(".sec4_plus .rightArea").css({
          transform: "translateY(" + sec4_scrollValue * 0.4 + "px)",
        });
      }

      //sc5_Effect
      if (scrollTop >= sec5_first_offset - innerHeight / 2) {
        $(".scroll_left .scroll_first").css({
          transform: "translateX(0)",
          opacity: "1",
        });
      }
      if (scrollTop >= sec5_first_offset - innerHeight / 2) {
        $(".scroll_right .txt_first").css({
          transform: "translateY(0)",
          opacity: "1",
        });
      } else {
        $(".scroll_right .txt_first").css({
          transform: "",
          opacity: "",
        });
      }
      if (scrollTop >= sec5_second_offset - innerHeight / 2) {
        $(".scroll_left .scroll_second").css({
          transform: "translateX(0)",
          opacity: "1",
        });
      }
      //  else {
      //   $(".scroll_left .scroll_second").css({
      //     transform: "",
      //   });
      // }
      if (scrollTop >= sec5_second_offset - innerHeight / 2) {
        $(".scroll_right .txt_second").css({
          transform: "translateY(0)",
          opacity: "1",
        });
      } else {
        $(".scroll_right .txt_second").css({
          transform: "",
          opacity: "",
        });
      }
    });
  });
  $(".menu-btn").click(function () {
    $(".menu-section").fadeToggle();
    $(".menu-btn").toggleClass("active");
  });
});
