/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

package com.github.jaredbwasserman.janusgraph.app.model;

public class QueryRequest {
    public final String queryString;

    public QueryRequest(String queryString) {
        this.queryString = queryString;
    }
}
