import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/core";
import { useState, FormEvent } from "react";
import useStore from "../src/store";
import * as firebase from "firebase/app";

enum ToastStatusEnum {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

export default function EmailListingInput() {
  const toast = useToast();
  const firestore: firebase.firestore.Firestore = useStore(
    (state) => state.firestore
  );

  const [emailValue, setEmailValue] = useState("");
  const [hasValidEmail, setHasValidEmail] = useState(false);
  const [hasBadSubmission, setHasBadSubmission] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: FormEvent) => {
    const inputElement = event.target as HTMLInputElement;
    const trimmedEmail = inputElement.value.trim();
    const valid = isValidEmail(trimmedEmail);

    setEmailValue(trimmedEmail);
    setHasValidEmail(valid);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = new RegExp(
      "^[\\w.\\-]{1,100}@[\\w.\\-]{1,100}\\.[A-Za-z]{2,4}$"
    );

    return emailRegex.test(email) && email.length < 100;
  };

  const handleSubmitClick = async () => {
    if (hasValidEmail) {
      setIsLoading(true);
      setIsDisabled(true);

      try {
        await submitToDatabase(emailValue);
      } catch (error) {
        setHasBadSubmission(true);
        showToast(
          ToastStatusEnum.ERROR,
          "Error",
          "Email has already been registered."
        );
      }

      setIsSubmitted(true);
      showToast(
        ToastStatusEnum.SUCCESS,
        "Success!",
        "We've added your email to our list."
      );
    } else {
      setHasBadSubmission(true);
      showToast(ToastStatusEnum.ERROR, "Error", "Please enter a valid email.");
    }

    setIsLoading(false);
  };

  const submitToDatabase = (email: string) => {
    return firestore
      .collection("emails")
      .doc(email)
      .set({ createdAt: firebase.firestore.FieldValue.serverTimestamp() });
  };

  const showToast = (
    status: ToastStatusEnum,
    title: string,
    description: string
  ) => {
    toast({
      position: "top",
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <InputGroup
        size="md"
        width="3in"
        marginRight={["0px", "0px", "0px", "24px"]}
        marginBottom={["16px", "16px", "16px", "0px"]}
      >
        <Input
          paddingRight="72px"
          placeholder="Enter your email address"
          rounded="100px"
          fontFamily="Inter"
          fontSize="14px"
          borderColor="#d3d3d3"
          _hover={{}}
          isDisabled={isDisabled}
          value={emailValue}
          onChange={handleInputChange}
          isInvalid={hasBadSubmission && !hasValidEmail && emailValue !== ""}
          errorBorderColor="red.300"
        />
        <InputRightElement width="64px" justifyContent="flex-end">
          <Flex width="100%">
            <IconButton
              aria-label="Submit email address to join email listing"
              icon={isSubmitted ? "check" : "arrow-forward"}
              isRound={true}
              backgroundColor="brand.blue"
              color="white"
              fontSize={isSubmitted ? "20px" : "24px"}
              width="100%"
              _hover={
                isDisabled
                  ? undefined
                  : {
                      backgroundColor: "brand.dark_teal",
                    }
              }
              _active={{}}
              onClick={handleSubmitClick}
              isDisabled={isDisabled}
              isLoading={isLoading}
            />
          </Flex>
        </InputRightElement>
      </InputGroup>
    </>
  );
}
