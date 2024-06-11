import React, { useState } from 'react';
import FontIcon from '@mui/icons-material/FontDownload';
import AlignIcon from '@mui/icons-material/FormatAlignLeft';
import ColorIcon from '@mui/icons-material/ColorLens';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssistantIcon from '@mui/icons-material/Assistant';
import alignmentApproach from '../assets/alignmentApproach.png'
import alignmentText from '../assets/alignmentText.png'
import fontsApproach from '../assets/fontsApproach.png'
import fontsText from '../assets/fontsText.png'
import TitleIcon from '@mui/icons-material/Title';
import ShortTextIcon from '@mui/icons-material/ShortText';

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('fonts');

  const renderContent = () => {
    switch (selectedCategory) {
      case 'fonts':
        return <Fonts />;
      case 'textAlignments':
        return <TextAlignments />;
      case 'colors':
        return <Colors />;
      default:
        return <Fonts />;
    }
  };

  return (
    <div className="flex">
    <div className="w-1/4 min-h-screen bg-gray-50 p-4">
        <ul>
          <li>
            <button
              className={`block w-full text-left p-2 mb-4 flex items-center justify-between font-semibold text-2xl ${selectedCategory === 'fonts' ? 'text-red-500 transition-all transform scale-105' : 'transition-all'}`}
              onClick={() => setSelectedCategory('fonts')}
            >
              <div className="flex items-center">
                <FontIcon className="inline-block mr-2" /> Fonts
              </div>
              {selectedCategory === 'fonts' && <ArrowForwardIcon className="text-red-500" />}
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-left p-2 mb-4 flex items-center justify-between font-semibold text-2xl ${selectedCategory === 'textAlignments' ? 'text-red-500 transition-all transform scale-105' : 'transition-all'}`}
              onClick={() => setSelectedCategory('textAlignments')}
            >
              <div className="flex items-center">
                <AlignIcon className="inline-block mr-2" /> Text Alignments
              </div>
              {selectedCategory === 'textAlignments' && <ArrowForwardIcon className="text-red-500" />}
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-left p-2 mb-4 flex items-center justify-between font-semibold text-2xl ${selectedCategory === 'colors' ? 'text-red-500 transition-all transform scale-105' : 'transition-all'}`}
              onClick={() => setSelectedCategory('colors')}
            >
              <div className="flex items-center">
                <ColorIcon className="inline-block mr-2" /> Colors
              </div>
              {selectedCategory === 'colors' && <ArrowForwardIcon className="text-red-500" />}
            </button>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-8 mr-8">
        {renderContent()}
      </div>
    </div>
  );
}

function Fonts() {
  return (
    <div>
      <h2 className="text-5xl text-red-500 font-bold mb-4">Fonts</h2>
      <hr className="border-black mb-12" />

      <div className="flex items-center mb-4"> 
        <h2 className="text-2xl font-semibold mr-2">Approach</h2>
        <AssistantIcon className="text-red-500" /> 
      </div>
      
      <p className="mb-10">Typography plays a crucial role in our expression. The Mecherle family of typefaces is deeply rooted in our brand's essence, drawing inspiration from our heritage and values. It ensures a consistent State Farm experience, even in the most functional contexts. Designed for versatility and utility, our sans typeface takes center stage, complemented by our robust slab typeface.</p>
      
      <div className="flex justify-center mb-8"> {/* Centered image container */}
        <img src={fontsApproach} alt="Fonts Approach" />
      </div>
      
      <div className="flex items-center mb-4"> 
        <h2 className="text-2xl font-semibold mr-2">Title Fonts</h2>
        <TitleIcon className="text-red-500" /> 
      </div>
      <p className="mb-10">Our product verifies whether the title font aligns with "Mecherle Sans Semibold" or "Mecherle Sans Slab Regular." If not, it recommends transitioning to one of the specified fonts.</p>
      
      
      <div className="flex items-center mb-4"> 
        <h2 className="text-2xl font-semibold mr-2">Text Fonts</h2>
        <ShortTextIcon className="text-red-500" /> 
      </div>
      <p className="mb-10">In assessing text fonts, our system meticulously examines each shape within the slide. If the shape indeed contains text, it proceeds to scrutinize the font against a set of predetermined criteria based on the paragraph level. For primary paragraphs, denoted as level 0, the expected fonts are either "Mecherle Sans Semibold" or "Mecherle Sans Slab Regular". In contrast, for secondary paragraphs and beyond, including nested levels, conformity to "Mecherle Sans Medium", "Mecherle Sans Regular", or "Mecherle Sans Semibold" is required. Should any discrepancies emerge, the system advises transitioning to one of the specified fonts to maintain consistency and alignment with our typographical standards.</p>
      <div className="flex justify-center mb-8"> {/* Centered image container */}
        <img src={fontsText} alt="Fonts Text" />
      </div>

    </div>
  );
}

function TextAlignments() {
  return (
    <div>
      <h2 className="text-5xl text-red-500 font-bold mb-4">Text Alignment</h2>
      <hr className="border-black mb-12" />

      <div className="flex items-center mb-4"> 
        <h2 className="text-2xl font-semibold mr-2">Approach</h2>
        <AssistantIcon className="text-red-500" /> 
      </div>      
      <p className="mb-10">In most cases, headlines and subheads should be left-aligned. Center alignment can be used in special cases, such as typographic bold statements, compositions that are more central (e.g., Two-oval Portals), or narrow formats.</p>
      
      <div className="flex justify-center mb-8"> {/* Centered image container */}
        <img src={alignmentApproach} alt="Alignment Approach" />
      </div>
      
      <div className="flex items-center mb-4"> 
        <h2 className="text-2xl font-semibold mr-2">Title Alignment</h2>
        <TitleIcon className="text-red-500" /> 
      </div>
      <p className="mb-10">Our product is designed to meticulously assess the alignment settings of the title text within a PowerPoint slide. It meticulously evaluates whether the title text is either centered or left-aligned, adhering to predetermined specifications. Should the alignment of the title deviate from these established guidelines, our product intervenes, offering suggestions for alignment adjustments to ensure compliance with the expected standards. This meticulous scrutiny guarantees that the title's alignment aligns seamlessly with the desired presentation aesthetics, enhancing overall visual coherence and professionalism.</p>
      
      <div className="flex items-center mb-4"> 
        <h2 className="text-2xl font-semibold mr-2">Text Alignment</h2>
        <ShortTextIcon className="text-red-500" /> 
      </div>
      <p className="mb-10">Our product meticulously assesses the alignment settings of text within each shape present within the PowerPoint slide. It evaluates the alignment against predefined criteria based on the paragraph level. For top-level paragraphs (level 0), our product expects alignments to be centered or left-aligned. Similarly, for other paragraphs, including nested levels, adherence to either center alignment or left alignment is required. In the event that the alignment does not meet the specified criteria, our product provides actionable feedback, suggesting appropriate adjustments to ensure alignment consistency and adherence to presentation standards.</p>
      <div className="flex justify-center mb-8"> {/* Centered image container */}
        <img src={alignmentText} alt="Alignment Text" />
      </div>
    </div>
  );
}

function Colors() {
  return (
    <div>
      <h2 className="text-5xl text-red-500 font-bold mb-4">Colors</h2>
      <hr className="border-black mb-12" />
      <div className="flex items-center mb-4"> 
        <h2 className="text-2xl font-semibold mr-2">Approach</h2>
        <AssistantIcon className="text-red-500" /> 
      </div>
      <p className="mb-10">When choosing a color for text or its background, it's crucial to ensure that the contrast ratio between the two meets specific standards. This ensures that the text remains easily readable against its background, catering to users with various visual impairments.</p>
    </div>
  );
}
