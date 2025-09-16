const AboutVisionMission = () => {
  return (
    <>
      <div className="container-fluid py-5" id="mission-vision-valueImg">
        <div className="container py-4">
          <div className="row">
            <div className="col-4 px-2">
              <div
                className="vision p-4"
                style={{
                  backgroundColor: "#3786cf",
                  opacity: "0.8",
                  borderRadius: "12px",
                }}
              >
                <h1 className="text-white">VISION</h1>
                <p className="text-white ">
                  Empower students through quality education, fostering
                  innovation, critical thinking, and social responsibility for
                  lifelong personal and professional growth.
                </p>
              </div>
            </div>
            <div className="col-4 px-2">
              <div
                className="mission p-4"
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
            <div className="col-4 px-2">
              <div
                className="values p-4"
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
