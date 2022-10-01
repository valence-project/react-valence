import { ActionButton, Button } from "@react-valence/button";
import { ButtonGroup } from "@react-valence/buttongroup";
import { Content } from "@react-valence/view";
import { Dialog, DialogTrigger } from "@react-valence/dialog";
import { Divider } from "@react-valence/divider";
import { Heading, Text } from "@react-valence/text";
import { Modal } from "../";
import React, { Fragment, useState } from "react";
import { Story } from "@ladle/react";
import { ModalProps } from "@types-valence/overlays";

const ModalExample: Story<ModalProps> = (props) => {
  let [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <ActionButton onPress={() => setOpen(true)}>Open modal</ActionButton>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <Dialog>
          <Heading>Title</Heading>
          <Divider />
          <Content>
            <Text>I am a dialog</Text>
          </Content>
          <ButtonGroup>
            <Button variant="cta" onPress={() => setOpen(false)}>
              Close
            </Button>
          </ButtonGroup>
        </Dialog>
      </Modal>
    </Fragment>
  );
};

export const UnmountingTrigger: Story<ModalProps> = (props) => {
  let [isPopoverOpen, setPopoverOpen] = useState(false);
  let [isModalOpen, setModalOpen] = useState(false);

  let openModal = () => {
    setPopoverOpen(false);
    setModalOpen(true);
  };

  // Ideally this would be a menu, but we don't have those implemented yet...
  return (
    <Fragment>
      <DialogTrigger
        type="popover"
        isOpen={isPopoverOpen}
        onOpenChange={setPopoverOpen}
      >
        <ActionButton>Open popover</ActionButton>
        <Dialog>
          <Heading>Title</Heading>
          <Divider />
          <Content>
            <Text>I am a dialog</Text>
          </Content>
          <ButtonGroup>
            <ActionButton onPress={openModal}>Open modal</ActionButton>
          </ButtonGroup>
        </Dialog>
      </DialogTrigger>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Dialog>
          <Heading>Title</Heading>
          <Divider />
          <Content>
            <Text>I am a dialog</Text>
          </Content>
          <ButtonGroup>
            <Button variant="cta" onPress={() => setModalOpen(false)}>
              Close
            </Button>
          </ButtonGroup>
        </Dialog>
      </Modal>
    </Fragment>
  );
};

export const Default: Story<ModalProps> = ModalExample.bind({});
