import styles from './index.module.css';

function ModalWaiverContent() {
  return (
    <div className={`${styles.modalContent}`}>
      <p className="mb-2">
        By participating in any of the featured missions organized by our space exploration team,
        you acknowledge and agree to the following terms:
      </p>

      <ol>
        <li className="mb-2">
          <strong>Assumption of Risk</strong>
          <span>
            : You understand that space missions involve inherent risks, including but not limited
            to physical injury, psychological stress, and potential loss of life. You voluntarily
            assume all such risks associated with participation.
          </span>
        </li>
        <li className="mb-2">
          <strong>Release of Liability</strong>
          <span>
            : You hereby release and hold harmless our organization, its affiliates, officers,
            employees, and agents from any and all claims, demands, or causes of action arising out
            of or related to any loss, damage, or injury, including death, that may be sustained by
            you while participating in the missions.
          </span>
        </li>
        <li className="mb-2">
          <strong>Medical Fitness</strong>
          <span>
            : You certify that you are in good health and have no medical conditions that would
            prevent you from safely participating in the missions. You agree to undergo any
            necessary medical examinations and provide truthful information regarding your health.
          </span>
        </li>
        <li className="mb-2">
          <strong>Compliance with Instructions</strong>
          <span>
            : You agree to follow all instructions and safety guidelines provided by our team.
            Failure to comply with these instructions may result in your removal from the mission
            and forfeiture of any fees paid.
          </span>
        </li>
        <li className="mb-2">
          <strong>Use of Likeness</strong>
          <span>
            : You grant our organization the right to use your name, likeness, and any photographs
            or videos taken during the missions for promotional and educational purposes.
          </span>
        </li>
        <li>
          <strong>Governing Law</strong>
          <span>
            : This waiver shall be governed by and construed in accordance with the laws of the
            jurisdiction in which our organization is based.
          </span>
        </li>
      </ol>

      <p className="mt-2">
        By clicking &quot;Accept and Join Mission&quot; below, you acknowledge that you have read
        and understood this waiver of liability and agree to its terms.
      </p>
    </div>
  );
}

export default ModalWaiverContent;
