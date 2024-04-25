import { FullPageView } from "~/components/full-page-view";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageView photoId={photoId} />
    </Modal>
  );
}
