const AboutVisionMission = () => {
  return (
    <>
      <div className="container-fluid py-5" id="mission-vision-valueImg">
        <div className="container py-4">
          <div className="row">
            {/* 
              ✅ Responsive grid:
              - col-lg-4: three columns on large screens (desktop)
              - col-md-6: two columns on medium screens (tablet)
              - col-12 : full width on small screens (mobile)
            */}
            <div className="col-lg-4 col-md-6 col-12 px-2 mb-4">
              <div
                className="vision p-4 h-100"
                style={{
                  backgroundColor: "#3786cf",
                  opacity: "0.8",
                  borderRadius: "12px",
                }}
              >
                <h1 className="text-white">VISION</h1>
                <p className="text-white">
                  Empower students through quality education, fostering
                  innovation, critical thinking, and social responsibility for
                  lifelong personal and professional growth.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 px-2 mb-4">
              <div
                className="mission p-4 h-100"
                style={{
                  backgroundColor: "#3786cf",
                  opacity: "0.8",
                  borderRadius: "12px",
                }}
              >
                <h1 className="text-white">MISSION</h1>
                <p className="text-white">
                  Be a leading institution inspiring global citizens with
                  knowledge, creativity, and ethical leadership to shape a
                  sustainable, progressive future.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 px-2 mb-4">
              <div
                className="values p-4 h-100"
                style={{
                  backgroundColor: "#3786cf",
                  opacity: "0.8",
                  borderRadius: "12px",
                }}
              >
                <h1 className="text-white">VALUES</h1>
                <p className="text-white">
                  Integrity, inclusivity, innovation, respect, collaboration,
                  and continuous learning to nurture excellence and meaningful
                  community impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVisionMission;
