"use client";

import { useState, useEffect } from "react";

const gallery = [
  { type: "image", src: "/pouch_3.png" },
  { type: "image", src: "/pouch_4.png" },
  { type: "image", src: "/pouch_5.jpg" },
  { type: "image", src: "/pouch_6.jpg" },
  { type: "image", src: "/pouch_7.jpg" },
  { type: "image", src: "/pouch_8.png" },
  { type: "video", src: "/pouchvideo_1.MOV" },
] as const;

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const current = gallery[selected];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelected((prev) => (prev + 1) % gallery.length);
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelected((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const closeGallery = () => {
    setOpen(false);
    setSelected(0);
  };

  return (
    <>
            {/* HERO */}

<div className="mb-6">

  <div
    onClick={() => setOpen(true)}
    className="group cursor-zoom-in"
  >

    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#111]">

      {current.type === "image" ? (

        <img
          src={current.src}
          alt="Benaiah Shell Pouch"
          className="w-full h-full object-cover animate-float transition duration-500 group-hover:scale-[1.02]"
        />

      ) : (

        <video
          src={current.src}
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
        />

      )}

      {/* ZOOM ICON */}

      <div className="absolute bottom-4 right-4">

        <div
          className="
            w-11
            h-11
            rounded-full
            bg-black/65
            backdrop-blur
            border
            border-[#C47A2C]
            flex
            items-center
            justify-center
            text-[#C47A2C]
            text-lg
            opacity-0
            group-hover:opacity-100
            transition
          "
        >
          ⤢
        </div>

      </div>

    </div>

  </div>

</div>

        {/* THUMBNAILS */}

<div className="flex items-center justify-center gap-4 mb-8">

  {/* LEFT */}

  <button
    type="button"
    onClick={prev}
    className="
      w-9
      h-9
      flex
      items-center
      justify-center
      rounded-full
      border
      border-[#2A2A2A]
      bg-[#111]
      text-[#C47A2C]
      hover:border-[#C47A2C]
      hover:bg-[#181818]
      transition
    "
  >
    ‹
  </button>

  {/* THUMBNAILS */}

  <div className="grid grid-cols-4 gap-3">

    {Array.from({ length: 4 }).map((_, slot) => {

      const index = (selected + slot) % gallery.length;
      const item = gallery[index];

      return (

        <button
          key={index}
          type="button"
          onClick={() => setSelected(index)}
          className={`
            overflow-hidden
            rounded-xl
            border
            transition-all
            duration-200
            ${
              index === selected
                ? "border-[#C47A2C]"
                : "border-[#1A1A1A] hover:border-[#555]"
            }
          `}
        >

          <div className="w-20 h-20 bg-[#111]">

            {item.type === "image" ? (

              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
              />

            ) : (

              <div className="w-full h-full flex items-center justify-center">

                <div className="w-9 h-9 rounded-full border border-[#C47A2C] flex items-center justify-center text-[#C47A2C]">

                  ▶

                </div>

              </div>

            )}

          </div>

        </button>

      );

    })}

  </div>

  {/* RIGHT */}

  <button
    type="button"
    onClick={next}
    className="
      w-9
      h-9
      flex
      items-center
      justify-center
      rounded-full
      border
      border-[#2A2A2A]
      bg-[#111]
      text-[#C47A2C]
      hover:border-[#C47A2C]
      hover:bg-[#181818]
      transition
    "
  >
    ›
  </button>

</div>

            {/* LIGHTBOX */}
      {open && (
        <div
          onClick={closeGallery}
          className="fixed inset-0 z-[999999] bg-black/95 flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            {/* IMAGE / VIDEO */}

            {current.type === "image" ? (
              <img
                src={current.src}
                alt=""
                className="w-full max-h-[82vh] object-contain rounded-xl bg-[#111]"
              />
            ) : (
              <video
                src={current.src}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[82vh] rounded-xl bg-[#111]"
              />
            )}

            {/* CLOSE */}

<button
  type="button"
  onClick={closeGallery}
  className="
    absolute
    bottom-4
    right-4
    z-50
    w-11
    h-11
    rounded-full
    bg-black/70
    backdrop-blur
    border
    border-[#C47A2C]
    text-[#C47A2C]
    hover:bg-[#C47A2C]
    hover:text-black
    transition
  "
>
  ✕
</button>

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={prev}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-black/70
                backdrop-blur
                border
                border-[#C47A2C]
                text-[#C47A2C]
                text-2xl
                hover:bg-[#C47A2C]
                hover:text-black
                transition
              "
            >
              ‹
            </button>

            {/* NEXT */}

            <button
              type="button"
              onClick={next}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-black/70
                backdrop-blur
                border
                border-[#C47A2C]
                text-[#C47A2C]
                text-2xl
                hover:bg-[#C47A2C]
                hover:text-black
                transition
              "
            >
              ›
            </button>

            {/* COUNTER */}

            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                px-4
                py-2
                rounded-full
                bg-black/70
                backdrop-blur
                border
                border-[#1A1A1A]
                text-sm
                text-[#A1A1A1]
              "
            >
              {selected + 1} / {gallery.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}