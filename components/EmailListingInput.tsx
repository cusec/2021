import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { FormEvent, ReactElement, useState } from "react";
import useStore from "@/src/store";
import firebase from "firebase/app";
import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";

enum ToastStatusEnum {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

export default function EmailListingInput(props: {
  collection: string;
  placeholder: string;
  width: string;
}): ReactElement {
  const toast = useToast();
  const firestore = useStore((state) => state.firestore);

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
        setIsSubmitted(true);
        showToast(
          ToastStatusEnum.SUCCESS,
          "Success!",
          "We've added your email to our list."
        );
      } catch (error) {
        setHasBadSubmission(true);
        setIsDisabled(false);

        showToast(
          ToastStatusEnum.ERROR,
          "Error",
          "Email has already been registered."
        );
      }
    } else {
      setHasBadSubmission(true);
      showToast(
        ToastStatusEnum.ERROR,
        "Error",
        "Please enter a valid email address."
      );
    }

    setIsLoading(false);
  };

  const submitToDatabase = (email: string) => {
    return firestore
      .collection(props.collection)
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
    <InputGroup size="md" width={props.width}>
      <Input
        type="email"
        paddingRight="72px"
        placeholder={props.placeholder}
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
      <InputRightElement
        width="56px"
        justifyContent="flex-end"
        children={
          <Flex width="100%">
            <IconButton
              aria-label="Submit email address to join email listing"
              icon={isSubmitted ? <CheckIcon /> : <ArrowForwardIcon />}
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
        }
      />
    </InputGroup>
  );
}
