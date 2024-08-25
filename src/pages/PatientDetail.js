import { useEffect, useRef, useState } from 'react';
import cornerstone from 'cornerstone-core';
import cornerstoneTools from 'cornerstone-tools';
import { CornerstoneSetup } from '../cornerstone/CornerstoneSetup'; // CornerstoneSetup fonksiyonunuzu içermelidir
import { useFormContext } from '../context/FormContext';
import { useParams } from 'react-router-dom';
import DicomViewer from '../Components/DicomViewer';
import DicomViewerDetail from '../Components/DicomViewerDetail';

const PatientDetail = () => {
  const element = useRef(null);
  const [selections, setSelections] = useState([]);
  const [toolActive, setToolActive] = useState(false);
  const [patientDetail, setPatientDetail] = useState({});
  const { patientData } = useFormContext();
  const { id } = useParams();

  useEffect(() => {
    if (patientData && id) {
      const patient = patientData.find(patient => patient.id === parseInt(id, 10));
      setPatientDetail(patient);
    }
  }, [patientData, id]);
  useEffect(() => {
    CornerstoneSetup();
    if (element.current && Object.keys(patientDetail).length !== 0 ) {
      cornerstone.enable(element.current);

      const imageId = `wadouri:${patientDetail?.imageId}`;

      cornerstone.loadImage(imageId).then((image) => {
        cornerstone.displayImage(element.current, image);

        // DICOM araçlarını ekleyin
        cornerstoneTools.addTool(cornerstoneTools.RectangleRoiTool);
        cornerstoneTools.setToolEnabled('RectangleRoi');

        const handleRectangleRoiCompleted = (event) => {
          const toolData = cornerstoneTools.getToolState(element.current, 'RectangleRoi');

          if (toolData && toolData.data) {
            const newSelections = toolData.data.map(rectangle => ({
              x: rectangle.handles?.start.x || 0,
              y: rectangle.handles?.start.y || 0,
              width: rectangle.handles?.end.x - rectangle.handles?.start.x || 0,
              height: rectangle.handles?.end.y - rectangle.handles?.start.y || 0,
            }));
            setSelections(newSelections);
          }
        };

        cornerstoneTools.addEventListener('CornerstoneToolsRectangleRoiCompleted', handleRectangleRoiCompleted);

        return () => {
          cornerstone.disable(element.current);
          cornerstoneTools.removeEventListener('CornerstoneToolsRectangleRoiCompleted', handleRectangleRoiCompleted);
        };
      }).catch((err) => {
        console.error('Error loading image:', err);
      });
    }
  }, [patientDetail]);
  const handleClick = () => {
    const toolData = cornerstoneTools.getToolState(element.current, 'RectangleRoi');
    if (toolData && toolData.data) {
      const newSelections = toolData.data.map(rectangle => ({
        area: rectangle.cachedStats.area || 0,
        mean: rectangle.cachedStats.mean || 0,
        max: rectangle.cachedStats.max || 0,
        stdDev: rectangle.cachedStats.area || 0,
        unit: rectangle.unit || "",
        uuid: rectangle.uuid || ""
      }));
      setSelections(newSelections);
    }
  };

  useEffect(() => {
    const currentElement = element.current;
    if (currentElement) {
      currentElement.addEventListener('click', handleClick);
    }
  }, [element, toolActive]);


  const handleToggleTool = () => {
    if (toolActive) {
      cornerstoneTools.setToolDisabled('RectangleRoi');
      setToolActive(false);
    } else {
      cornerstoneTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 });
      setToolActive(true);
    }
  };

  const handleDeleteSelection = (index, uuid) => {
    const toolState = cornerstoneTools.getToolState(element.current, 'RectangleRoi');
    if (toolState) {
      const toolIndex = toolState.data.findIndex(tool => tool.uuid === uuid);
      if (toolIndex !== -1) {
        toolState.data.splice(toolIndex, 1); // Remove the specific RectangleRoi
      }
    }
    cornerstone.updateImage(element.current);
    setSelections(prevSelections => {
      const updatedSelections = [...prevSelections];
      updatedSelections.splice(index, 1);
      return updatedSelections;
    });
  };

  return (
    <div class="grid lg:grid-cols-12 gap-4 bg-black text-white">
     <DicomViewer element={element}/>
      <DicomViewerDetail toolActive={toolActive} handleToggleTool={handleToggleTool} patientDetail={patientDetail} selections={selections} handleDeleteSelection={handleDeleteSelection} />

    </div>
  );
};

export default PatientDetail;
