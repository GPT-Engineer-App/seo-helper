import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const SeoOptimization = () => {
  const [general, setGeneral] = useState({ title: "", description: "" });
  const [openGraph, setOpenGraph] = useState({
    title: "",
    type: "",
    url: "",
    image: "",
    description: "",
  });
  const [twitter, setTwitter] = useState({
    title: "",
    description: "",
    creator: "",
    card: "",
    image: "",
    imageAlt: "",
  });
  const [markup, setMarkup] = useState("");

  const handleChange = (section, field, value) => {
    if (section === "general") {
      setGeneral({ ...general, [field]: value });
    } else if (section === "openGraph") {
      setOpenGraph({ ...openGraph, [field]: value });
    } else if (section === "twitter") {
      setTwitter({ ...twitter, [field]: value });
    }
  };

  const validateFields = () => {
    if (general.title.length > 66) {
      alert("General title should not exceed 66 characters.");
      return false;
    }
    if (general.description.length > 165) {
      alert("General description should not exceed 165 characters.");
      return false;
    }
    if (openGraph.title.length > 66) {
      alert("OpenGraph title should not exceed 66 characters.");
      return false;
    }
    if (openGraph.description.length > 165) {
      alert("OpenGraph description should not exceed 165 characters.");
      return false;
    }
    if (twitter.title.length > 66) {
      alert("Twitter title should not exceed 66 characters.");
      return false;
    }
    if (twitter.description.length > 165) {
      alert("Twitter description should not exceed 165 characters.");
      return false;
    }
    return true;
  };

  const generateMarkup = () => {
    if (!validateFields()) return;

    const seoData = {
      title: general.title,
      description: general.description,
      openGraph: {
        basic: {
          title: openGraph.title,
          type: openGraph.type,
          url: openGraph.url,
          image: openGraph.image,
        },
        optional: {
          description: openGraph.description,
        },
      },
      twitter: {
        title: twitter.title,
        description: twitter.description,
        creator: twitter.creator,
        card: twitter.card,
        image: twitter.image,
        imageAlt: twitter.imageAlt,
      },
    };

    setMarkup(JSON.stringify(seoData, null, 2));
  };

  return (
    <div className="container mx-auto p-4">
      <Toaster />
      <Accordion type="single" collapsible>
        <AccordionItem value="general">
          <AccordionTrigger>General Settings</AccordionTrigger>
          <AccordionContent>
            <Card className="mb-2">
              <CardContent>
                <div className="mb-2">
                  <label className="block mb-1">Title</label>
                  <Input
                    value={general.title}
                    onChange={(e) => handleChange("general", "title", e.target.value)}
                    maxLength={66}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Description</label>
                  <Textarea
                    value={general.description}
                    onChange={(e) =>
                      handleChange("general", "description", e.target.value)
                    }
                    maxLength={165}
                  />
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="openGraph">
          <AccordionTrigger>OpenGraph Settings</AccordionTrigger>
          <AccordionContent>
            <Card className="mb-2">
              <CardContent>
                <div className="mb-2">
                  <label className="block mb-1">Title</label>
                  <Input
                    value={openGraph.title}
                    onChange={(e) =>
                      handleChange("openGraph", "title", e.target.value)
                    }
                    maxLength={66}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Type</label>
                  <Input
                    value={openGraph.type}
                    onChange={(e) => handleChange("openGraph", "type", e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">URL</label>
                  <Input
                    value={openGraph.url}
                    onChange={(e) => handleChange("openGraph", "url", e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Image</label>
                  <Input
                    value={openGraph.image}
                    onChange={(e) =>
                      handleChange("openGraph", "image", e.target.value)
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Description</label>
                  <Textarea
                    value={openGraph.description}
                    onChange={(e) =>
                      handleChange("openGraph", "description", e.target.value)
                    }
                    maxLength={165}
                  />
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="twitter">
          <AccordionTrigger>Twitter Settings</AccordionTrigger>
          <AccordionContent>
            <Card className="mb-2">
              <CardContent>
                <div className="mb-2">
                  <label className="block mb-1">Title</label>
                  <Input
                    value={twitter.title}
                    onChange={(e) => handleChange("twitter", "title", e.target.value)}
                    maxLength={66}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Description</label>
                  <Textarea
                    value={twitter.description}
                    onChange={(e) =>
                      handleChange("twitter", "description", e.target.value)
                    }
                    maxLength={165}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Creator</label>
                  <Input
                    value={twitter.creator}
                    onChange={(e) =>
                      handleChange("twitter", "creator", e.target.value)
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Card</label>
                  <Input
                    value={twitter.card}
                    onChange={(e) => handleChange("twitter", "card", e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Image</label>
                  <Input
                    value={twitter.image}
                    onChange={(e) => handleChange("twitter", "image", e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Image Alt</label>
                  <Input
                    value={twitter.imageAlt}
                    onChange={(e) =>
                      handleChange("twitter", "imageAlt", e.target.value)
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button onClick={generateMarkup} className="mt-4">Generate Markup</Button>

      {markup && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Generated Markup</h2>
          <pre className="bg-gray-100 p-4 rounded">{markup}</pre>
        </div>
      )}
    </div>
  );
};

export default SeoOptimization;