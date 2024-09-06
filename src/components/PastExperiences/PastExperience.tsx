import SectionTitle from "../SectionTitle/SectionTitle";
import './PastExperiences.css'
import PastExperienceSection from "../PastExperienceSection/PastExperienceSection";

export default function PastExperiences(){
    return(
        <>
            <div className="ProjectsDiv">
                <div className="ProjectsDivText">
                    <SectionTitle SectionName="My past experience" SectionNumber="011"/>
                    <p>Altough I'm pratically fresh out of high school, I've done quite a few things, here are some of them:</p>
                    <PastExperienceSection/>
                    <PastExperienceSection/>
                    <PastExperienceSection/>
                </div>
            </div>
        </>
    )
}
