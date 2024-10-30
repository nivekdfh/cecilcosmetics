import React, { useState } from 'react';


function ServiceList({ onSelectService }) {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedSubService, setSelectedSubService] = useState(null);

    // Define main services with their respective sub-services
    const services = [
        { name: "PMU", subServices: ["Powder Brows", "Lip Blush", "Eyeliner"] },
        { name: "Eyebrows", subServices: ["Shaping", "Tinting", "Lamination"] },
        { name: "Facials", subServices: ["Basic Facial", "Hydrating Facial", "Anti-Aging Facial"] },
        { name: "Pedicure", subServices: ["Classic Pedicure", "Spa Pedicure", "Medical Pedicure"] },
        { name: "Waxing", subServices: ["Full Body", "Bikini", "Legs"] }
    ];

    const handleServiceClick = (service) => {
        setSelectedService(service.name);
        setSelectedSubService(null); // Reset selected sub-service when a new service is clicked
        onSelectService(service.name);
    };

    const handleSubServiceClick = (subService) => {
        setSelectedSubService(subService);
        onSelectService(subService);
    };

    return (
        <div className="service-list">
            {services.map((service, index) => (
                <div key={index} className="service-item">
                    <button
                        onClick={() => handleServiceClick(service)}
                        className={`service-button ${selectedService === service.name ? "selected" : ""}`}
                    >
                        {service.name}
                    </button>

                    {/* Display sub-services if the main service is selected */}
                    {selectedService === service.name && (
                        <div className="sub-service-list">
                            {service.subServices.map((subService, subIndex) => (
                                <button
                                    key={subIndex}
                                    className={`sub-service-button ${selectedSubService === subService ? "selected" : ""}`}
                                    onClick={() => handleSubServiceClick(subService)}
                                >
                                    {subService}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ServiceList;
