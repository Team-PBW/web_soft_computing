// "use client";

// import MainNavbar from "@/components/MainNavbar";
// import UploadCard from "@/components/UploadCard";
// import { ChangeEvent, useEffect, useRef, useState } from "react";
// import WaveSurfer from "wavesurfer.js";
// // import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.js";
// import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.esm.js";

// export default function MoodPredictor() {
//   const containerRef = useRef(null);
//   const [files, setFiles] = useState<File[] | null>(null);
// //   const [prediction, setPrediction] = useState(null);

//   const wsRef = useRef<WaveSurfer | null>(null);
//   const fileRef = useRef<File | null>(null);

//   //   const myData = [
//   //     { start: 0, end: 30, label: "Intro", score: "92%" },
//   //     { start: 31, end: 60, label: "Verse", score: "80%" },
//   //   ];

//   const labels = ["Happy", "Angry", "Sad", "Relax"];

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const regionsPlugin = RegionsPlugin.create();

//     wsRef.current = WaveSurfer.create({
//       container: containerRef.current,
//       waveColor: "#4f46e5",
//       progressColor: "#818cf8",
//       height: 100,
//       plugins: [regionsPlugin],
//       mediaControls: true,
//     });

//     // ws.load("/audio/kassia_q2.mp3");

//     // Menambahkan segmen prediksi setelah audio dimuat
//     wsRef.current.on("ready", async () => {
//       if (!fileRef.current) return;

//     //   const regions = wsRef.current?.plugins[0];
//       // const regions = wsRef.current?.getActivePlugins().regions;
//       //   const regions = regionsPlugin;

//       if (!regionsPlugin) return;
//       regionsPlugin.clearRegions();

//       console.log(fileRef.current)

//       const myData = await uploadFileAndPredict(fileRef.current);

//       console.log(myData);

//       //   const res = prediction && prediction.result;
//       //   const { num_segments, segment_results } = res;
//       myData?.segment_results.map((item) => {
//         regionsPlugin.addRegion({
//           start: item.segment * 30,
//           end: (item.segment + 1) * 30,
//           content: `${labels[item.class_id]} - ${item.confidence}`,
//           color: "rgba(74, 222, 128, 0.3)",
//         });
//       });
//     });

//     wsRef.current.on("interaction", () => {
//       wsRef.current?.play().catch((err) => {
//         console.error(
//           "Autoplay diblokir browser, butuh interaksi user pertama kali:",
//           err,
//         );
//       });
//     });

//     return () => wsRef.current?.destroy();
//   }, []);

//   const uploadFileAndPredict = async (file: File) => {
//     try {
//       //   setLoading(true);
//       //   setPrediction(null);

//       const formData = new FormData();
//       formData.append("file", file);

//       const res = await fetch(`http://localhost:8000/music/predict_mood`, {
//         method: "POST",
//         body: formData,
//       });

//       if (!res.ok) throw new Error("Gagal download audio");

//       const data = await res.json();

//       return data.result;
//     } catch (err) {
//       console.error(err);
//       alert("Gagal memproses URL audio");
//     } finally {
//       //   setLoading(false);
//     }
//   };

// //   useEffect(() => {
// //     if (files && files.length > 0) {
// //       uploadFileAndPredict(files[0]);
// //     }
// //   }, [files]);

//   const handleAudioFileChange = (files: File[]) => {
//     if (!files || files.length === 0) return;

//     if (!wsRef.current) return;

//     fileRef.current = files[0];
//     setFiles(files);

//     wsRef.current.loadBlob(files[0]);
//   };

//   return (
//     <section>
//       <MainNavbar />
//       <UploadCard
//         onFilesChange={handleAudioFileChange}
//         onUrlSubmit={uploadFileAndPredict}
//       />
//       {/* {!prediction ? ( */}
//       <div className="bg-slate-900 p-6 rounded-xl text-white">
//         <h2 className="text-xl font-bold mb-4">Song Segment Prediction</h2>
//         <div ref={containerRef} />
//         {/* List detail label dan confidence di bawah waveform */}
//       </div>
//       {/* ) : null} */}
//     </section>
//   );
// }

"use client";

import MainNavbar from "@/components/MainNavbar";
import UploadCard from "@/components/UploadCard";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.esm.js";

export default function MoodPredictor() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wsRef = useRef<WaveSurfer | null>(null);
  const fileRef = useRef<File | null>(null);

  const [files, setFiles] = useState<File[] | null>(null);
  const [segmentData, setSegmentData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const labels = ["Happy", "Angry", "Sad", "Relax"];

  const emotionColors: Record<string, string> = {
    Happy: "rgba(253, 224, 71, 0.3)",
    Angry: "rgba(248, 113, 113, 0.3)",
    Sad: "rgba(96, 165, 250, 0.3)",
    Relax: "rgba(167, 139, 250, 0.3)",
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const regionsPlugin = RegionsPlugin.create();

    wsRef.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#334155",
      progressColor: "#6366f1",
      cursorColor: "#ffffff",
      barWidth: 2,
      barRadius: 2,
      height: 120,
      plugins: [regionsPlugin],
      mediaControls: true,
    });

    wsRef.current.on("ready", async () => {
      if (!fileRef.current) return;

      regionsPlugin.clearRegions();
      setLoading(true);

      const result = await uploadFileAndPredict(fileRef.current);

      if (!result) {
        setLoading(false);
        return;
      }

      setSegmentData(result.segment_results);

      result.segment_results.forEach((item: any) => {
        const label = labels[item.class_id];

        regionsPlugin.addRegion({
          start: item.segment * 30,
          end: (item.segment + 1) * 30,
          content: `${label} - ${(item.confidence * 100).toFixed(1)}%`,
          color: emotionColors[label],
        });
      });

      setLoading(false);
    });

    wsRef.current.on("interaction", () => {
      wsRef.current?.play().catch(() => {});
    });

    return () => {
      wsRef.current?.destroy();
    };
  }, []);

  const uploadFileAndPredict = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:8000/music/predict_mood", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Prediction failed");

      const data = await res.json();
      return data.result;
    } catch (err) {
      console.error(err);
      alert("Gagal memproses audio");
    }
  };

  const submitURL = async (url: string) => {
    try {
      setLoading(true);

      if (wsRef.current) {
        wsRef.current.load(
          "http://localhost:8000/music/stream_audio?url=" +
            encodeURIComponent(url),
        );
      }

      const res = await fetch("http://localhost:8000/music/predict_download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          youtube_url: url,
        }),
      });

      if (!res.ok) throw new Error("Prediction failed");

      const data = await res.json();
      // return data.result;
      setSegmentData(data.result.segment_results);
    } catch (err) {
      console.error(err);
      alert("Gagal memproses audio");
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
    if (!wsRef.current || segmentData.length === 0) return;

    const regions = wsRef.current.plugins[0];

    regions.clearRegions();

    segmentData.forEach((item) => {
      const label = labels[item.class_id];

      regions.addRegion({
        start: item.segment * 30,
        end: (item.segment + 1) * 30,
        content: `${label} - ${(item.confidence * 100).toFixed(1)}%`,
        color: emotionColors[label],
      });
    });
  }, [segmentData]);

  const handleAudioFileChange = (files: File[]) => {
    if (!files || files.length === 0) return;
    if (!wsRef.current) return;

    fileRef.current = files[0];
    setFiles(files);
    setSegmentData([]);

    wsRef.current.loadBlob(files[0]);

    uploadFileAndPredict(files[0]);
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <MainNavbar />

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        {/* Upload Section */}
        <div className="flex justify-center shadow-lg bg-slate-900 p-8 rounded-2xl">
          <UploadCard
            onFilesChange={handleAudioFileChange}
            onUrlSubmit={submitURL}
          />
        </div>

        {/* Prediction Section */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold">
            Song Segment Emotion Prediction
          </h2>

          {!files && segmentData.length === 0 && (
            <div className="text-center text-slate-400 py-10">
              Upload an audio file to visualize emotion segments
            </div>
          )}

          {loading && (
            <div className="flex justify-center items-center py-6">
              <div className="animate-spin h-8 w-8 border-4 border-indigo-500 border-t-transparent rounded-full rounded-full" />
            </div>
          )}

          <div ref={containerRef} className="rounded-lg overflow-hidden" />

          {/* Segment Summary */}
          {segmentData.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {segmentData.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800 p-4 rounded-xl text-center"
                >
                  <p className="text-sm text-slate-400">
                    Segment {item.segment + 1}
                  </p>
                  <p className="font-semibold">{labels[item.class_id]}</p>
                  <p className="text-indigo-400">
                    {(item.confidence * 100).toFixed(1)}%
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
