import { EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { useNavigate } from "react-router-dom";

const CreateMeetingButtons = ({
  createMeeting,
  isEdit = false,
  closeFlyout,
}: {
  createMeeting: () => {};
  isEdit?: boolean;
  closeFlyout?: () => {};
}) => {
  const navigate = useNavigate();
  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButton
          color="danger"
          onClick={() => (isEdit ? closeFlyout!() : navigate("/"))}
        >
          Cancel
        </EuiButton>
        <EuiFlexItem grow={false}>
          <EuiButton type="submit" onClick={createMeeting} fill>
            {isEdit ? "Edit Meeting" : "Create Meeting"}
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default CreateMeetingButtons;
