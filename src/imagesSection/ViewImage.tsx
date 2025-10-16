import { useEffect, useRef} from "react";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";

const ViewImage = () => {
     const images = [
    "https://img.freepik.com/free-photo/woman-art-exhibition_53876-14379.jpg?semt=ais_hybrid&w=740&q=80",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2012/5/9/0/Original_Jeanine-Hays-Gallery-Wall-2-20x200-White-Mats-Black-Frames_s4x3.jpg.rend.hgtvcom.966.725.jpeg",
    "https://www.photocrati.com/wp-content/uploads/2020/08/Why-gallery-descriptions-are-so-Important.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24k4LiMoQTor-_EdwteXMRp43BXONOYLZRA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ri9x49CdiHRf7QFvhEO0-ShFXZdMSIx_Wg&s",
    "https://images.squarespace-cdn.com/content/v1/5d569899bdf59100013c8a11/1741610098717-85OW68LT87NIO0F37QDQ/science_gallery_darkmatters_lowres-85.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/5d569899bdf59100013c8a11/1741610098717-85OW68LT87NIO0F37QDQ/science_gallery_darkmatters_lowres-85.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/5d569899bdf59100013c8a11/1741610098717-85OW68LT87NIO0F37QDQ/science_gallery_darkmatters_lowres-85.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/5d569899bdf59100013c8a11/1741610098717-85OW68LT87NIO0F37QDQ/science_gallery_darkmatters_lowres-85.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/5d569899bdf59100013c8a11/1741610098717-85OW68LT87NIO0F37QDQ/science_gallery_darkmatters_lowres-85.jpg?format=2500w",
     ];
      const galleryRef = useRef<HTMLDivElement>(null);
  const viewerInstance = useRef<Viewer | null>(null);

  useEffect(() => {
    const initViewer = () => {
      if (galleryRef.current) {
        viewerInstance.current = new Viewer(galleryRef.current, {
          toolbar: true,
          title: [1, (image: HTMLImageElement, imageData: { index: number; length: number }) => `${image.alt} (${imageData.index + 1}/${imageData.length})`],
          navbar: true,
          movable: true,
          zoomable: true,
          scalable: true,
        });
      }
    };

    // Wait until images are loaded before initializing
    const images = galleryRef.current?.querySelectorAll("img") || [];
    let loadedCount = 0;

    if (images.length > 0) {
      images.forEach((img: HTMLImageElement) => {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) initViewer();
        };
      });
    } else {
      initViewer();
    }

    // Cleanup on component unmount
    return () => {
      if (viewerInstance.current) {
        viewerInstance.current.destroy();
        viewerInstance.current = null;
      }
    };
  }, []);

return (
    <div className="w-full max-w-[1300px] mx-auto p-4">
      <div
        ref={galleryRef}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Nature ${index + 1}`}
            className="w-full h-auto my-2 cursor-pointer rounded-lg"
          />
        ))}
      </div>
    </div>
)
}

export default ViewImage