$(function () {
  const headerHeight = $(".header").outerHeight();
  const mo_1_offset = $(".motion-1").offset().top;
  const mo_2_offset = $(".motion-2").offset().top;
  const mo_3_offset = $(".motion-3").offset().top;
  const mo_4_offset = $(".motion-4").offset().top;
  const mo_5_offset = $(".motion-5").offset().top;
  const mo_6_offset = $(".motion-6").offset().top;
  const sc1_menu_offset = $(".sec1 .sub_menu").offset().top;
  const sc2_offset = $(".sec2").offset().top;
  const sc3_offset = $(".sec3").offset().top;
  const sc4_offset = $(".sec4").offset().top;

  // 스크롤 이벤트
  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    sc2_scrollTop = scrollTop - sc2_offset;

    $(".pos").text(scrollTop);

    if (scrollTop >= sc1_menu_offset) {
      $(".sec1 .sub_menu").addClass("fix");
    } else {
      $(".sec1 .sub_menu").removeClass("fix");
    }

    // section2
    if (scrollTop >= sc2_offset - innerHeight / 2) {
      $(".sec2 .sec2_des").css({
        transform: "translateY(0)",
        opacity: "1",
      });
    } else {
      $(".sec2 .sec2_des").css({
        transform: "",
        opacity: "",
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
    // section2 motions effect
    if (scrollTop >= mo_1_offset - innerHeight / 1.5) {
      $(".motion-1").css({
        opacity: "1",
      });
    } else {
      $(".motion-1").css({
        opacity: "",
      });
    }
    if (scrollTop >= mo_2_offset - innerHeight / 1.5) {
      $(".motion-2").css({
        opacity: "1",
      });
    } else {
      $(".motion-2").css({
        opacity: "",
      });
    }
    if (scrollTop >= mo_3_offset - innerHeight / 1.5) {
      $(".motion-3").css({
        opacity: "1",
      });
    } else {
      $(".motion-3").css({
        opacity: "",
      });
    }
    if (scrollTop >= mo_4_offset - innerHeight / 1.5) {
      $(".motion-4").css({
        opacity: "1",
      });
    } else {
      $(".motion-4").css({
        opacity: "",
      });
    }
    if (scrollTop >= mo_5_offset - innerHeight / 1.5) {
      $(".motion-5").css({
        opacity: "1",
      });
    } else {
      $(".motion-5").css({
        opacity: "",
      });
    }
    if (scrollTop >= mo_6_offset - innerHeight / 1.5) {
      $(".motion-6").css({
        opacity: "1",
      });
    } else {
      $(".motion-6").css({
        opacity: "",
      });
    }

    if (
      scrollTop >= sc2_offset &&
      scrollTop + $(window).innerHeight() <= sc3_offset
    ) {
      $(".sec2 .sec2_bg").css({
        position: "fixed",
      });
    } else {
      if (scrollTop + $(window).innerHeight() > sc3_offset) {
        $(".sec2 .sec2_bg").css({
          position: "",
          top: "initial",
          bottom: "0",
        });
      }
    }

    // if (scrollTop + $(".header").outerHeight() >= sc4_offset) {
    //   // $("body").addClass('stop-scrolling');
    //   // $("body").removeClass('stop-scrolling');

    //   $(".sec4_inner").css({
    //     position: "fixed",
    //     top: headerHeight + "px",
    //   });
    // } else {
    //   $(".sec4_inner").css({
    //     position: "",
    //     top: "",
    //   });
    // }
  });

  $(function () {
    let x;
    let y;

    $(window).on("mousemove", function (event) {
      x = event.clientX;
      y = event.clientY;
      $(".sec2_mouse").css({
        transform: "translate(" + x + "px, " + y + "px)",
      });
    });
  });
});

$(function () {
  function setLayout() {
    const partRemoveHeight = $(window).innerWidth() - $(window).innerHeight();
    const secFixHeight = $(window).innerWidth() * 3 - partRemoveHeight;
    $(".sec4").css({ height: secFixHeight + "px" });
  }

  function scrollEvent() {
    const sc4_offset = $(".sec4").offset().top;
    const sc5_offset = $(".sec5").offset().top;
    const scrollTop = $(this).scrollTop();

    let secFixScrollTop = sc4_offset - scrollTop;
    let winWidthValue = $(window).innerWidth() * 3;

    if (
      scrollTop > sc4_offset &&
      scrollTop + $(window).innerHeight() <= sc5_offset
    ) {
      $(".sec4_inner").css({
        position: "fixed",
        transform: "translateX(" + secFixScrollTop + "px)",
      });
    } else {
      if (scrollTop < sc4_offset) {
        $(".sec4_inner").css({
          position: "",
          top: "",
          bottom: "initial",
          transform: "",
        });
      } else if (scrollTop + $(window).innerHeight() >= sc5_offset) {
        $(".sec4_inner").css({
          position: "",
          top: "initial",
          bottom: 0,
          transform: "translateX(${-winWidthValue}px)",
        });
      }
    }
  }

  setLayout();

  $(window).on("scroll", function () {
    scrollEvent();
  });
  $(".menu-btn").click(function () {
    $(".menu-section").fadeToggle();
    $(".menu-btn").toggleClass("active");
  });
});
