/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app.util;

import com.github.jaredbwasserman.janusgraph.app.util.jsonexporter.JSONExporter;
import org.gephi.io.exporter.api.ExportController;
import org.gephi.io.importer.api.Container;
import org.gephi.io.importer.api.ImportController;
import org.gephi.io.importer.plugin.file.ImporterGraphML;
import org.gephi.io.processor.plugin.DefaultProcessor;
import org.gephi.project.api.ProjectController;
import org.gephi.project.api.Workspace;
import org.openide.util.Lookup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.ByteArrayInputStream;
import java.io.StringWriter;

public class GraphUtil {
    private static final Logger logger = LoggerFactory.getLogger(GraphUtil.class);

    public static String graphMLToJSON(byte[] bytes) {
        // Init a project - and therefore a workspace
        ProjectController pc = Lookup.getDefault().lookup(ProjectController.class);
        pc.newProject();
        Workspace workspace = pc.getCurrentWorkspace();

        // Import file
        ImportController importController = Lookup.getDefault().lookup(ImportController.class);
        Container container;
        try {
            container = importController.importFile(new ByteArrayInputStream(bytes), new ImporterGraphML());
        } catch (Exception e) {
            logger.debug(e.getMessage());
            return "";
        }

        // Append imported data to GraphAPI
        importController.process(container, new DefaultProcessor(), workspace);

        // Export graph
        ExportController exportController = Lookup.getDefault().lookup(ExportController.class);
        StringWriter stringWriter = new StringWriter();
        try {
            exportController.exportWriter(stringWriter, new JSONExporter());
        } catch (Exception e) {
            logger.debug(e.getMessage());
            return "";
        }

        return stringWriter.toString();
    }
}
