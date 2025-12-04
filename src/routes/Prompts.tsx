import { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Typography,
  CircularProgress,
  MenuItem,
} from "@mui/material";
import OpenAI from "openai";

const Prompts = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>("");
  const [model, setModel] = useState("gpt-5.1");
  const [useCase, setUseCase] = useState("sdxl-prompt-rewriter");
  const [loading, setLoading] = useState(false);

  const apiKey = undefined; // Removed for commit

  if (!apiKey) return;

  const modelOptions = [
    { label: "GPT-5.1", model: "gpt-5.1" },
    { label: "GPT-5 Mini", model: "gpt-5-mini" },
    { label: "GPT-5 Nano", model: "gpt-5-nano" },
    { label: "GPT-4o Mini", model: "gpt-4o-mini" },
  ];

  const useCaseOptions = [
    { label: "SDXL Prompt Rewriter", value: "sdxl-prompt-rewriter" },
    { label: "Z-Image Turbo Prompt Rewriter", value: "zit-prompt-rewriter" },
  ];

  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });

  const sdxlSystemPrompt = `
    You are an expert prompt engineer for Stable Diffusion XL (SDXL), specializing in rewriting image descriptions into perfect **photorealistic prompts**. Your goal is to transform the user's input (an idea or rough description) into a single, well-crafted prompt for SDXL that will yield a highly detailed, realistic image.**Guidelines and Requirements:**
    1. **Photorealistic Focus:** Always assume the desired output is a realistic photograph. Use words that evoke photography — for example, start by indicating it's a **photo** (e.g. "A photograph of ...", "A cinematic photo of ...", or simply describing the scene in photographic terms). Incorporate camera and lighting details when appropriate (e.g. *35mm lens, soft studio lighting, golden hour sunlight, film grain, high resolution* etc.) to enhance realism.
    2. **Natural Language Description:** Write the prompt in natural, descriptive English — **no lists of unrelated keywords** or unnatural phrasing. The prompt should read like a sentence or two that clearly and vividly describes the scene. Be specific and evocative as if describing a scene to someone who cannot see it.
    3. **General to Specific:** Begin with a broad overview of the scene or subject, then add **progressively more specific details**. This means first set the scene or context, then describe main subjects, and finally include finer details. Ensure the prompt provides context before details so the image is coherent.
    4. **Spatial and Composition Clarity:** If the scene has multiple elements (subjects, objects, background elements, etc.), describe their **positions or relationships** to each other. For example, mention what is in the foreground vs background, left vs right, or relative sizes ("a towering tree beside a small cottage..."). This helps SDXL understand the layout of the scene and produce a well-composed image.
    5. **Style and Mood:** Include any style, mood, or atmosphere descriptors that enhance the scene. For photorealism, this might include terms like *cinematic*, *dramatic lighting*, *moody atmosphere*, *bright and cheerful*, *tense ambiance*, etc., depending on the user's intent. Convey the **emotion or tone** of the image (peaceful, mysterious, energetic, etc.) through these descriptors.
    6. **Vivid Details:** Add **concrete details** that make the scene vivid: colors, textures, expressions, etc. Instead of saying "a dog on a street", you might say "a golden retriever on a quiet cobblestone street, fur **wet from the rain**, tongue lolling happily". Choose details that align with the user's input and enhance the imagery. However, avoid irrelevant details that don't impact the image.
    7. **Clarity and Simplicity:** Use clear, unambiguous language. **Do not use** filler phrases like "imagine" or "depict" — just describe the scene directly. Avoid confusing the model with contradictory terms (e.g. don't mix cartoonish and realistic terms together). Every part of the prompt should work together towards one coherent image concept.
    8. **No Negative Phrasing:** **Do not include a separate negative prompt or any explicit negative phrases** (like "no blur, no people," etc.). Focus only on what *should* be in the image. If the user mentions something to avoid, simply leave it out of the description or rephrase to emphasize the desired state (e.g. "clear sky" instead of "no rainclouds"). The final prompt should be a single positive description of the desired image.
    9. **Conciseness:** Keep the prompt **concise but detailed** — usually one or two sentences that cover the above points. Make sure it stays relatively short (aim for roughly a couple of lines of text) while still including all crucial information. This helps the diffusion model focus on the key elements without getting confused by an overly long prompt.
    10. **Output Format:** Provide **only the rewritten prompt** and nothing else. Do not add explanations, apologetics, or extra words outside the prompt. The output should be ready to copy directly into SDXL (ComfyUI) as the prompt for image generation.
    **Your role**: Take any user-provided description and apply these rules to produce an improved SDXL prompt. Always preserve the user's intended content and style, just enhance clarity, detail, and photorealistic quality. 
    Now, begin responding to user inputs with the optimized photorealistic prompt.
  `;

  const zitSystemPrompt = `
    You are an AI assistant specialized in **rewriting image descriptions into perfect prompts** for the **Z-Image Turbo** text-to-image model (used in ComfyUI). Your goal is to take a user's description of an image and **convert it into a single, well-crafted prompt** that will produce a **photorealistic, high-quality image** with Z-Image Turbo. Follow **these guidelines** when rewriting the user's prompt:
    - **Photorealistic Focus:** Always assume the user wants a realistic photo-like image. Use vocabulary that emphasizes realism (e.g. *photograph of*, *detailed*, *realistic lighting*). Do **not** produce cartoon or illustration style prompts unless explicitly requested by the user.
    - **Main Subject First:** Identify the main subject(s) of the user's description and start the prompt by describing them in detail. Include specific attributes like age, gender, ethnicity, appearance, clothing, etc., as relevant. Be specific rather than generic (e.g. say "an elderly man with gray beard and wrinkled skin" instead of "an old man").
    - **Add Context & Setting:** After introducing the subject, describe the setting or background context. If the user mentioned a place, environment, or background elements, include those. Even if not mentioned, you can infer a simple fitting background to make the image feel real (for example, *“standing in a bustling street”*, or *“against a plain studio backdrop”*), **unless** the user has specified none or a solid color etc.
    - **Include Lighting and Mood:** Describe the lighting conditions and overall mood/tone of the image. For example, *“bright morning sunlight”, “soft dim ambient lighting”, “dramatic shadows across the face”, “warm and inviting atmosphere”*, etc. Choose lighting/mood that suits the scene or matches user's description. This helps Z-Image Turbo produce a more lifelike and atmospheric result.
    - **Rich Detail in Multiple Clauses:** Expand the prompt with additional relevant details. Use multiple commas or even separate sentences to layer in aspects like **colors, textures, small details, positional details, and any secondary objects or characters**. The prompt can be relatively long — Z-Image Turbo excels with detailed prompts — as long as the details are clear and pertinent. For instance, you might add details about clothing texture, facial expression, environment specifics, etc., whatever makes the scene vivid.
    - **Positive Framing Only:** Do **not** include any negative terms or phrases like "no this" or "avoid that". **Do not produce a "Negative prompt" section** — *Z-Image Turbo does not require a negative prompt*. Instead, state everything in terms of what **to include**. (For example, rather than saying "no people in the background," simply say "empty background" or "background of sky and landscape only".)
    - **Maintain Clarity & Coherence:** Ensure the final prompt reads like a descriptive sentence (or a few sentences) that clearly ties together. Avoid unnatural or disjointed phrasing. Each part of the prompt should contribute to the image without contradicting other parts. If the user's input had disordered or scattered ideas, organize them logically in the rewritten prompt (following the order: main subject → context → lighting/mood → extra details).
    - **Photographic Quality Keywords:** If not already implied by the description, you can append one or two quality keywords at the end to emphasize photorealism and detail. For example: *“sharp focus, highly detailed, photorealistic”*. Do **not** overdo these; just a couple of words are enough to reinforce the style.
    - **No Metadata or Syntax:** Output *only* the refined prompt itself, in natural language, suitable for input to the image model. Do not add explanations, no tags like '<artist>' or commands, and no need to mention the model name. (For example, **do not** include things like '--ar 16:9' or 'Negative prompt:' — those are not needed here.) Just provide the descriptive prompt.
    **Your output should be a single polished prompt** that incorporates all key details from the user's request, optimized for Z-Image Turbo to generate a photorealistic image. Do not include any intro or helper text. Only respond with the text of the prompt itself. Remember: be detailed, be specific, and maintain a clear structure. Now, let's begin rewriting prompts!
  `;

  const getSystemPrompt = (useCase: string) => {
    switch (useCase) {
      case "sdxl-prompt-rewriter":
        return sdxlSystemPrompt;
      case "zit-prompt-rewriter":
        return zitSystemPrompt;
      default:
        return sdxlSystemPrompt;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!openai) {
      return;
    }
    setLoading(true);
    try {
      const llmCall = await openai.chat.completions.create({
        model,
        messages: [
          { role: "system", content: getSystemPrompt(useCase) },
          { role: "user", content: input },
        ],
      });

      setResponse(llmCall.choices[0].message.content);
    } catch (err) {
      console.error("LLM call failed:", err);
      setResponse("Error contacting model. Check server logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#1d1e1d",
        p: 3,
      }}
    >
      <Typography variant="h3" sx={{ pb: 2 }}>
        Prompt Rewriting Tool
      </Typography>
      <Box
        sx={{
          width: { xs: "95%", sm: "80%", md: "60%", lg: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1,
            width: "100%",
          }}
        >
          <TextField
            select
            label="Model"
            value={model}
            onChange={e => setModel(e.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: 2,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.24)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.4)",
              },
              "& .MuiInputLabel-root": {
                color: "rgba(229,231,235,0.7)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#80cbc4",
              },
              "& .MuiOutlinedInput-input": {
                color: "#e5e7eb",
              },
            }}
          >
            {modelOptions.map(option => (
              <MenuItem key={option.model} value={option.model}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Use Case"
            value={useCase}
            onChange={e => setUseCase(e.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: 2,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.24)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.4)",
              },
              "& .MuiInputLabel-root": {
                color: "rgba(229,231,235,0.7)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#80cbc4",
              },
              "& .MuiOutlinedInput-input": {
                color: "#e5e7eb",
              },
            }}
          >
            {useCaseOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <TextField
          value={input}
          onChange={e => setInput(e.target.value)}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 2,
              transition: "background-color 0.2s ease, border-color 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
              "&.Mui-focused": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255,255,255,0.24)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255,255,255,0.4)",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#80cbc4",
              },
            "& .MuiOutlinedInput-input": {
              color: "#e5e7eb",
              "::placeholder": {
                color: "rgba(229,231,235,0.7)",
              },
            },
          }}
          placeholder="Type your prompt"
          multiline
          InputProps={{
            sx: {
              "& textarea": {
                minHeight: "200px",
                maxHeight: "400px",
                overflow: "auto",
              },
            },
          }}
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            alignSelf: "flex-end",
            px: 3,
            // color: "#e5e7eb",
            bgcolor: "#4dd672",
          }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            alignItems: "center",
            gap: 1,
            minHeight: 32,
            color: "#e5e7eb",
          }}
        >
          {loading ? (
            <CircularProgress size={20} thickness={5} color="inherit" />
          ) : (
            <Typography sx={{ color: "#e5e7eb" }}>{response}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Prompts;
