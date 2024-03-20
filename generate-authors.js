const authors = [
  {
    name: "John Doe",
    description:
      "John Doe is a bestselling author known for his gripping thriller novels. With over two decades of writing experience, he has captivated readers with his intricate plots, complex characters, and heart-pounding suspense. His books have been praised for their fast-paced narrative style and unexpected twists, keeping readers on the edge of their seats until the very end. John's passion for storytelling shines through in every page, as he masterfully crafts stories that delve into the darkest corners of the human psyche while exploring themes of morality, justice, and redemption.",
    avatar: "https://api.dicebear.com/8.x/bottts-neutral/png?seed=JohnDoe",
  },
  {
    name: "Jane Smith",
    description:
      "Jane Smith is an award-winning poet and essayist whose words resonate with readers on a profound level. Her evocative poetry and insightful essays have garnered critical acclaim for their emotional depth and thought-provoking themes. Drawing inspiration from nature, love, and the human experience, Jane's writing captures the beauty and complexity of life in all its forms. With a unique voice and a keen eye for detail, she invites readers to explore the depths of their own hearts and minds, sparking introspection and inspiring personal growth.",
    avatar: "https://api.dicebear.com/8.x/bottts-neutral/png?seed=JaneSmith",
  },
  {
    name: "Michael Johnson",
    description:
      "Michael Johnson is a renowned historian specializing in ancient civilizations. With a lifelong fascination for the mysteries of the past, he has dedicated his career to uncovering the secrets of lost civilizations and forgotten cultures. Through meticulous research and scholarly analysis, Michael brings the ancient world to life, shedding light on the people, events, and beliefs that shaped our collective history. His groundbreaking discoveries and groundbreaking discoveries have reshaped our understanding of the past, providing valuable insights into the origins of human civilization and the forces that shaped the world we live in today.",
    avatar:
      "https://api.dicebear.com/8.x/bottts-neutral/png?seed=MichaelJohnson",
  },
  {
    name: "Emily Brown",
    description:
      "Emily Brown is a visionary science fiction writer who explores the possibilities of artificial intelligence and its impact on society. With a background in computer science and a passion for speculative fiction, she combines cutting-edge technology with imaginative storytelling to create thought-provoking narratives that challenge the boundaries of human imagination. Emily's novels delve into the ethical dilemmas and existential questions raised by the advent of AI, offering a glimpse into a future where humans and machines coexist in ways we have yet to imagine. Her work pushes the boundaries of the genre, inspiring readers to ponder the implications of technology on the future of humanity.",
    avatar: "https://api.dicebear.com/8.x/bottts-neutral/png?seed=EmilyBrown",
  },
  {
    name: "David Wilson",
    description:
      "David Wilson is a fantasy novelist renowned for his enchanting tales of magic and adventure. With vivid imagery and richly drawn characters, he transports readers to fantastical realms where anything is possible. Drawing inspiration from myth, legend, and folklore, David weaves epic sagas of heroism, sacrifice, and triumph against impossible odds. His imaginative worlds are populated by wizards, warriors, and mythical creatures, each with their own struggles and desires. Through his storytelling prowess, David invites readers to embark on unforgettable journeys filled with danger, intrigue, and wonder, where the fate of kingdoms hangs in the balance.",
    avatar: "https://api.dicebear.com/8.x/bottts-neutral/png?seed=DavidWilson",
  },
  {
    name: "Sarah Thompson",
    description:
      "Sarah Thompson is a mystery writer known for her intricate plots and compelling characters. With a keen eye for detail and a knack for building suspense, she keeps readers guessing until the very end. Sarah's novels are populated by complex protagonists, each with their own secrets and motivations, as they navigate a world filled with twists, turns, and unexpected revelations. Her stories are masterfully crafted puzzles, where every clue and every twist brings readers closer to uncovering the truth. With each new book, Sarah proves herself to be a master of the genre, delivering gripping tales of intrigue, betrayal, and redemption that leave readers eagerly awaiting her next installment.",
    avatar:
      "https://api.dicebear.com/8.x/bottts-neutral/png?seed=SarahThompson",
  },
  {
    name: "Alexandra Lee",
    description:
      "Alexandra Lee is a romance author known for crafting heartwarming stories of love and redemption. With a gift for capturing the intricacies of human relationships, she explores the complexities of the heart with warmth, humor, and empathy. Alexandra's novels are filled with unforgettable characters who face adversity with courage and resilience, finding strength in the bonds of love and friendship. Whether set in small-town America or exotic locales, her stories are timeless tales of hope and healing that resonate with readers of all ages. With each new book, Alexandra reminds us that love is the greatest adventure of all, and that true love has the power to overcome even the greatest challenges.",
    avatar: "https://api.dicebear.com/8.x/bottts-neutral/png?seed=AlexandraLee",
  },
  {
    name: "Christopher Davis",
    description:
      "Christopher Davis is a thriller writer with a knack for keeping readers on the edge of their seats. With pulse-pounding suspense and unexpected twists, he delivers adrenaline-fueled stories that leave readers breathless. Christopher's novels are populated by flawed heroes and formidable villains, as they race against time to uncover dark secrets and thwart sinister plots. His writing is fast-paced and action-packed, with each chapter ending on a cliffhanger that compels readers to keep turning the pages. From international espionage to domestic intrigue, Christopher's stories are a rollercoaster ride of thrills and excitement that will leave readers guessing until the very end.",
    avatar:
      "https://api.dicebear.com/8.x/bottts-neutral/png?seed=ChristopherDavis",
  },
  {
    name: "Jessica Roberts",
    description:
      "Jessica Roberts is a children's book author who sparks imaginations and fosters creativity with her enchanting tales. With whimsical characters and magical adventures, she transports young readers to fantastical worlds where anything is possible. Jessica's stories are filled with wonder and delight, as they inspire children to dream big and embrace their imagination. Whether exploring the depths of the ocean or soaring through the skies on the back of a dragon, her books are timeless classics that capture the joy and innocence of childhood. With each new story, Jessica invites children of all ages to join her on unforgettable journeys filled with laughter, friendship, and discovery.",
    avatar:
      "https://api.dicebear.com/8.x/bottts-neutral/png?seed=JessicaRoberts",
  },
  {
    name: "Matthew White",
    description:
      "Matthew White is a biographer who chronicles the lives of influential figures throughout history. With meticulous research and compelling storytelling, he brings the past to life, illuminating the achievements and struggles of remarkable individuals who shaped the course of history. From political leaders to cultural icons, Matthew's biographies offer insight into the lives and legacies of those who have left an indelible mark on the world. His passion for history and his dedication to his craft shine through in every page, as he captures the essence of each subject with nuance and depth. Through his work, Matthew reminds us that the stories of the past are not just tales of the past, but lessons for the future.",
    avatar: "https://api.dicebear.com/8.x/bottts-neutral/png?seed=MatthewWhite",
  },
];
const postAuthorData = async () => {
  try {
    for (const author of authors) {
      const formData = await createFormData(author);
      const response = await fetch("http://localhost:3010/authors", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Author added:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const createFormData = async (author) => {
  const formData = new FormData();
  formData.append("name", author.name);
  formData.append("description", author.description);

  try {
    // Download the image and append it to the FormData object
    const response = await fetch(author.avatar);
    const imageBlob = await response.blob();
    formData.append("avatar", imageBlob, "avatar.png");
  } catch (error) {
    console.error("Error downloading image:", error);
  }

  console.log(formData);
  return formData;
};

postAuthorData();
